Unit.prototype.moveSelection = function() {
  this.movementSpace = new MovementSpace(this.board, this.position)
   if(this.behavior === 'idle') {
     this.movementSpace.setupSpace(0);
     this.movementSpace.moveSpace.endPos = this.position;
     this.movementSpace.findOptimalRoutePositions();
    } else if(this.behavior === 'TWBS') {
     if (this.possibleAttackSetupSpace() != this.position) {
       let attackSetupPos = this.possibleAttackSetupSpace();
       this.movementSpace.moveSpace.endPos = attackSetupPos;
       this.movementSpace.findOptimalRoutePositions();
     } else {
       let theEndPos = this.position;
       this.movementSpace.moveSpace.endPos = theEndPos;
       this.movementSpace.findOptimalRoutePositions();
     }
   } else if(this.behavior === 'seekAndDestroy') {
     let anEndPos =  this.seekAndDestoryPosition();
     this.movementSpace.moveSpace.endPos = anEndPos;
     this.movementSpace.findOptimalRoutePositions();
   }
}

Unit.prototype.seekAndDestoryPosition = function() {
  if (this.possibleAttackSetupSpace() != this.position) {
    let attackSetupPos = this.possibleAttackSetupSpace();
    this.movementSpace.moveSpace.endPos = attackSetupPos;
    this.movementSpace.findOptimalRoutePositions();
    return attackSetupPos;
  } else {
    return this.toNearestOppUnit();
  }
}

Unit.prototype.toNearestOppUnit = function() {
  let start = this.position;
  let oppUnits = this.board.listOfUnits(PlayerUnit);
  let distances = {};
  let distancesArr = [];
  let endPos = null;

  oppUnits.forEach(function(value, key, map) {
    distances[key.position] = distance(start, key.position);
    distancesArr.push(distance(start, key.position));
  });
  distancesArr.sort();
  for(let i = 0; i < distancesArr.length; i++) {
    for(const pos in distances) {
      if (distances[pos] === distancesArr[i]) {
        this.movementSpace = new MovementSpace(this.board, this.position);
        let flag = this.movementSpace.setupSpace(stringToPos(pos));
        if (flag) {
          this.movementSpace.findOptimalRoutePositions();
          let optPos = this.movementSpace.pickOptPos();
          this.movementSpace.endPos = optPos;
          return optPos;
        }
      }
    }
  }

  return this.position;
}

Unit.prototype.toNearestOppUnitMoveSpace = function() {
  let start = this.position;
  let oppUnits = this.board.listOfUnits(PlayerUnit);
  let distances = {};
  let distancesArr = [];
  let endPos = null;

  oppUnits.forEach(function(value, key, map) {
    distances[key.position] = distance(start, key.position);
    distancesArr.push(distance(start, key.position));
  });
  distancesArr.sort();

  for(let i = 0; i < distancesArr.length; i++) {

    for(const pos in distances) {
      if (distances[pos] === distancesArr[i]) {
        let crudePath = new MovementSpace(this.board, this.position);
        let validCrudePathFlag = crudePathArray.setupSpace();
      }
      if(validCrudePathFlag) {
        crudePath.optimalRoutePositions();
        return crudePath.pickOptPos();
      }
    }

  }
  return this.position;
}

Unit.prototype.findAnOptimalRoute = function(destination) {
  this.movementSpace = new MovementSpace(this.board, this.position);
  this.movementSpace.setupSpace(destination);
  this.movementSpace.findOptimalRoutePositions();
  return this.movementSpace.siftRoute();
}

Unit.prototype.selectPlayerUnitInRange = function() {
  let playerUnitPositionsInRange = [];

  this.board.boardIterator(function(row, col){
    if (this.board.grid[row][col].unit instanceof(PlayerUnit) &&
        this.equippedWeapon.stats['range'].includes(distance(this.position, [row, col]))) {
      playerUnitPositionsInRange.push([row, col]);
    }
  }.bind(this));

  if (playerUnitPositionsInRange.length > 0) {
    let attackIndex = Math.floor(Math.random() * playerUnitPositionsInRange.length);
    let pos = playerUnitPositionsInRange[attackIndex];
    return this.board.grid[pos[0]][pos[1]].unit;
  }

  return null;
}

Unit.prototype.possibleAttackSetupSpace = function() {
  let weaponRange = this.equippedWeapon.stats['range'];

  let playerUnitPositions = [];

  this.board.boardIterator(function(row, col){
    if (this.board.grid[row][col].unit instanceof(PlayerUnit)) {
      playerUnitPositions.push([row, col]);
    }
  }.bind(this));

  // this.moveSpace = new MovementSpace(this.board, this.position);
  // this.moveSpace.setupSpace(this.stats['move']);
  this.movementSpace = new MovementSpace(this.board, this.position);
  this.movementSpace.setupSpace(this.stats['move']);


  let validSpaces = this.validMoveSpaces();
  let setupSpaces = [];

  for(let i = 0; i < playerUnitPositions.length; i++) {
    for(const space in validSpaces) {
      let spaceArr = stringToPos(space);
      if(weaponRange.includes(distance(playerUnitPositions[i], spaceArr))) {
        setupSpaces.push(spaceArr);
      }
    }
  }

  if (setupSpaces.length === 0) {
    return this.position;
  }

  let moveSpaceIndex = Math.floor(Math.random() * setupSpaces.length);
  let pos = setupSpaces[moveSpaceIndex];
  return pos;
}

// Possibly non-AI methods that may need to be sorted into their own
// methods later

Unit.prototype.isOppInRange = function() {
  let ranges = this.equippedWeapon.stats['range'];
  let oppUnitPositions = [];
  let oppUnitsPosInRange = [];

  this.board.boardIterator(function(row, col){
    if (this.board.grid[row][col].unit &&
      this.board.grid[row][col].unit instanceof(EnemyUnit)) {
      oppUnitPositions.push([row, col]);
    }
  }.bind(this));

  for(let i = 0; i < oppUnitPositions.length; i++) {
    if (ranges.includes(distance(oppUnitPositions[i], this.position))) {
      oppUnitsPosInRange.push(oppUnitPositions[i]);
    }
  }

  return oppUnitsPosInRange;
}

Unit.prototype.postMoveWindowOptions = function() {
  options = [];
  if (this.isOppInRange().length > 0) {
    options.push('Fight');
  }
  if (this.board.space(this.position).terrain instanceof Gate) {
    options.push('Seize')
  }
  options.push('Wait');

  return options;
}

Unit.prototype.stationaryUnitAttackSpaces = function() {
  let ranges = this.inventory.stats['range'];
  let attackPositions = [];

  this.board.boardIterator(function(row, col){
    if ((this.board.grid[row][col].unit === null ||
      this.board.grid[row][col].unit instanceof(EnemyUnit)) &&
      ranges.includes(distance([row, col], this.position))) {
      attackPositions.push([row, col]);
    }
  }.bind(this));

  return attackPositions;
}
