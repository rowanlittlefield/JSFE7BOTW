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
    return this.possibleAttackSpaces();
  } else {
    return this.toNearestOppUnit();
  }
}

Unit.prototype.toNearestOppUnit = function() {
  debugger;
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
debugger;
  distancesArr.sort();

  for(let i = 0; i < distancesArr.length; i++) {
    distances.forEach(function(value, key, map) {
      if (value === distancesArr[i]) {
        crudePathArray = viablePathToUnit(start, stringToPos(key));
      }
    });
  }
  return this.position;
}

Unit.prototype.viablePathToUnit = function(start, pos) {
  let moveHash = {};
  moveHash[[start[0], start[1]]] = true;
  let dupMoveHash = {};
  dupMoveHash[[start[0], start[1]]] = true;
  let moveHashPosNumber = 0;
  let dupMoveHashPosNumber = 1;
  let moves = 0;

  while (true) {
    for(const position in dupMoveHash) {
      this.adjacentSpacesCanMoveThrough(stringToPos(position), pos).forEach(function(el) {
        moveHash[el] = true;
      }.bind(this))
    }

    for (k in moveHash) if (moveHash.hasOwnProperty(k)) moveHashPosNumber++;

    if (moveHashPosNumber === dupMoveHashPosNumber) {
      return false;
    } else {
      for(const position in moveHash) {
        dupMoveHash[position] = true;
      }
      dupMoveHashPosNumber = moveHashPosNumber;
      moveHashPosNumber = 0;
    }
    moves += 1;

    if (moveHash[pos] === true) {
      return [moveHash, moves];
    }
  }
}

Unit.prototype.optimalRoutePositions = function(viablePath, steps, start, endPos) {
  let updatedViablePath = {};
  let optimalRoutePositions = {};

  for(const position in viablePath) {
    if (steps >= distance(stringToPos(position), start) + distance(stringToPos(position), endPos)) {
      updatedViablePath[position] = true;
    }
  }
  for(const position in updatedViablePath) {
    if (this.optimalRoutePosition(position, steps, start, endPos)) {
      optimalRoutePositions[position] = true;
    }
  }
  return optimalRoutePositions;
}

Unit.prototype.siftRoute = function(optimalRoutePositions, start, endPos) {
//  debugger;
  let positions = [start];
  let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  let dirIndex = 0;

  while (true) {
    if(equivalentPositions(endPos, positions[0])) return positions.reverse();

    let nextPosition = [positions[0][0] - directions[dirIndex][0], positions[0][1] - directions[dirIndex][1]];
    if (optimalRoutePositions[nextPosition] === true && !includePosition(positions, nextPosition)) {
      positions.unshift(nextPosition);
    } else {
      dirIndex = (dirIndex + 1) % 4;
    }
  }

}

Unit.prototype.optimalRoutePosition = function(pos, steps, start, endPos) {
  let stepsToS = 0;
  let stepsToE = 0;
  let viableSpaceHash = {};
  viableSpaceHash[pos] = true;
  let dupViableSpaceHash = {};
  dupViableSpaceHash[pos] = true;
  let loopCondition = true;

  while (loopCondition) {
    if (!viableSpaceHash[start]) { stepsToS += 1; }
    if (!viableSpaceHash[endPos]) { stepsToE += 1; }

    for(const position in dupViableSpaceHash) {
      let adjacentPositions = this.adjacentSpacesCanMoveThrough(stringToPos(position), endPos);

      for(let i = 0; i < adjacentPositions.length; i++) {
        viableSpaceHash[adjacentPositions[i]] = true;
      }
    }
    for(const position in viableSpaceHash) {
      dupViableSpaceHash[position] = true;
    }

    loopCondition = viableSpaceHash[start] === undefined || viableSpaceHash[endPos] === undefined;
  }

  return stepsToS + stepsToE <= steps;
}

Unit.prototype.attackPlayerUnitInRange = function() {
  let playerUnitPositionsInRange = [];

  this.board.boardIterator(function(row, col){
    if (this.board.grid[row][col].unit instanceof(PlayerUnit) &&
        this.inventory.stats['range'].includes(distance(this.position, [row, col]))) {
      playerUnitPositionsInRange.push([row, col]);
    }
  }.bind(this));

  if (playerUnitPositionsInRange.length > 0) {
    let attackIndex = Math.floor(Math.random() * playerUnitPositionsInRange.length);
    let pos = playerUnitPositionsInRange[attackIndex];
    this.fight(this.board.grid[pos[0]][pos[1]].unit);
  }

}

Unit.prototype.possibleAttackSetupSpace = function() {
  let weaponRange = this.inventory.stats['range'];

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
  let ranges = this.inventory.stats['range'];
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
  options.push('End');

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
