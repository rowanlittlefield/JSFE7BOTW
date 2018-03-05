Unit.prototype.moveSelection = function() {

   if(this.behavior === 'idle') {
     return this.position;
    } else if(this.behavior === 'TWBS') {
     return this.possibleAttackSetupSpace();
   } else if(this.behavior === 'seekAndDestroy') {
     return this.seekAndDestoryPosition();
   }
}

Unit.prototype.seekAndDestoryPosition = function() {
  if (this.possibleAttackSetupSpace() != this.position) {
    return this.possibleAttackSetupSpace();
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
  let crudePathArray = false;

  oppUnits.forEach(function(value, key, map) {
    distances[key.position] = distance(start, key.position);
    distancesArr.push(distance(start, key.position));
  });
  distancesArr.sort();

  for(let i = 0; i < distancesArr.length; i++) {

    for(const pos in distances) {
      if (distances[pos] === distancesArr[i]) {
        crudePathArray = this.viablePathToUnit(start, stringToPos(pos));
      }
      if(crudePathArray) {
        let crudePath = crudePathArray[0];
        let steps = crudePathArray[1];
        let optPaths = this.optimalRoutePositions(crudePath, steps, this.position, stringToPos(pos));
        return this.pickOptPos(optPaths);
      }
    }

  }
  return this.position;
}

Unit.prototype.pickOptPos = function(optPaths) {
  let positions = [];
  for(const pos in optPaths) {
    positions.push(stringToPos(pos));
  }

  let sortedPositions = positions.sort(function(posOne, posTwo) {
    if (optPaths[posTwo] > optPaths[posOne]) {
      return 1;
    } else if (optPaths[posTwo] < optPaths[posOne]) {
      return -1;
    } else {
      return 0;
    }
  }.bind(this));

  for(let i = 0; i < sortedPositions.length; i ++) {
    if (this.isValidMove(sortedPositions[i]) && optPaths[sortedPositions[i]] <= this.stats['move']) {
      return sortedPositions[i];
    }
  }
}

Unit.prototype.stepsToPosition = function(start, pos) {
  let steps = 0;
  let viableSpaceHash = {};
  viableSpaceHash[start] = true;
  let dupViableSpaceHash = {};
  dupViableSpaceHash[start] = true;
  let loopCondition = true;

  while (loopCondition) {
    if (!viableSpaceHash[pos]) { steps += 1; }

    for(const position in dupViableSpaceHash) {
      let adjacentPositions = this.adjacentSpacesCanMoveThrough(stringToPos(position), pos);

      for(let i = 0; i < adjacentPositions.length; i++) {
        viableSpaceHash[adjacentPositions[i]] = true;
      }
    }
    for(const position in viableSpaceHash) {
      dupViableSpaceHash[position] = true;
    }

    loopCondition = viableSpaceHash[pos] === undefined;
  }

  return steps;
}

Unit.prototype.viablePathToUnit = function(start, pos) {
  let moveHash = {};
  moveHash[[start[0], start[1]]] = 0;
  let dupMoveHash = {};
  dupMoveHash[[start[0], start[1]]] = 0;
  let moveHashPosNumber = 0;
  let dupMoveHashPosNumber = 1;
  let moves = 1;

  while (true) {
    for(const position in dupMoveHash) {
      this.adjacentSpacesCanMoveThrough(stringToPos(position), pos).forEach(function(el) {
        if (dupMoveHash[el] != undefined) {
          moveHash[el] = dupMoveHash[el]
        } else {
          moveHash[el] = moves;
        }
      }.bind(this))
    }

    for (k in moveHash) if (moveHash.hasOwnProperty(k)) moveHashPosNumber++;

    if (moveHashPosNumber === dupMoveHashPosNumber) {
      return false;
    } else {
      for(const position in moveHash) {
        dupMoveHash[position] = moveHash[position];
      }
      dupMoveHashPosNumber = moveHashPosNumber;
      moveHashPosNumber = 0;
    }
    moves += 1;

    if (moveHash[pos] != undefined) {
      return [moveHash, moves];
    }
  }
}

Unit.prototype.optimalRoutePositions = function(viablePath, steps, start, endPos) {
  let updatedViablePath = {};
  let optimalRoutePositions = {};

  for(const position in viablePath) {
    if (steps >= distance(stringToPos(position), start) + distance(stringToPos(position), endPos)) {
      updatedViablePath[position] = viablePath[position];
    }
  }
  for(const position in updatedViablePath) {
    if (this.optimalRoutePosition(position, steps, updatedViablePath[position], endPos)) {
      optimalRoutePositions[position] = updatedViablePath[position];
    }
  }
  return optimalRoutePositions;
}

Unit.prototype.optimalRoutePosition = function(pos, steps, preSteps, endPos) {
  return preSteps + this.stepsToPosition(pos, endPos) <= steps;
}

Unit.prototype.siftRoute = function(optimalRoutePositions, start, endPos) {
  let positions = [start];
  let optRPos = optimalRoutePositions;
  delete optRPos[start];

  while (true) {
    if(equivalentPositions(endPos, positions[0])) return positions.reverse();
    let nextAdjacentPositions = [];
    for(const pos in optRPos) {
      if (distance(positions[0], stringToPos(pos)) === 1) {
        nextAdjacentPositions.unshift(stringToPos(pos));
      }
    }
    if (includePosition(nextAdjacentPositions, endPos)) {
      positions.unshift(endPos);
    } else {
      positions.unshift(nextAdjacentPositions[0]);
    }

    for(let i = 0; i < nextAdjacentPositions.length; i++) {
      delete optRPos[nextAdjacentPositions[i]];
    }
  }
}

Unit.prototype.findAnOptimalRoute = function(destination) {
  let pathAndSteps = this.viablePathToUnit(
    this.position,
    destination);

  let optRPositions = this.optimalRoutePositions(
    pathAndSteps[0],
    pathAndSteps[1],
    this.position,
    destination);

   return this.siftRoute(optRPositions, this.position, destination);
}

Unit.prototype.attackPlayerUnitInRange = function() {
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
    this.fight(this.board.grid[pos[0]][pos[1]].unit);
  }

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
