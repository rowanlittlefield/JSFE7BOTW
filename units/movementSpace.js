function MovementSpace(board, startPos) {
  this.board = board;
  this.startPos = startPos;

  if (this.board.space(startPos).unit) {
    this.unit = this.board.space(startPos).unit;
  }

  this.steps = 0;
  this.setupFlag = false;

  this.positions = {};
  this.positions[this.startPos] = 0;
  this.numPositions = 1;
  this.potentialSpaces = {};
  this.potentialSpacesChangedFlag = false;

  this.endPos = null;
  this.optimalRoutePositions = {}

  this.validMovePositions = {};
  this.attackMovePositions = {};
}

MovementSpace.prototype.setupSpace = function(numSteps) {
  if (numSteps instanceof Array) {
    this.viablePathToOppUnit(numSteps);
    this.findOptimalRoutePositions();
  } else {
    this.setSpaceForSingleTurnMove(numSteps);
    this.setupFlag = true;
  }
}

//private

//PathFinding

MovementSpace.prototype.viablePathToOppUnit = function(pos) {
  this.steps = 1;
  this.endPos = pos;

  while (true) {
    let previousPositionsCount = this.numPositions;
    this.findMovesForOneMoreStep();

    if (this.noViablePathToOppUnit()) return false;
    this.steps += 1;
    if (this.positions[pos] != undefined) return true;
  }
}

MovementSpace.prototype.noViablePathToOppUnit = function(previousPositionsCount) {
  return (this.numPositions === previousPositionsCount &&
    this.potentialSpacesChangedFlag);
}

MovementSpace.prototype.findOptimalRoutePositions = function() {
  let updatedViablePath = {};
  for(const position in this.positions) {
    if (this.steps >= distance(stringToPos(position), this.startPos) + distance(stringToPos(position), this.endPos)) {
      updatedViablePath[position] = this.positions[position];
    }
  }
  for(const position in updatedViablePath) {
    if (this.optimalRoutePosition(position, updatedViablePath[position])) {
      this.optimalRoutePositions[position] = updatedViablePath[position];
    }
  }
  // return this.optimalRoutePositions;
}

MovementSpace.prototype.optimalRoutePosition = function(pos, preSteps) {
  return preSteps + this.stepsToPosition(pos, this.endPos) <= this.steps;
}

MovementSpace.prototype.stepsToPosition = function(start, pos) {
  let moveSpace = new MovementSpace(this.board, start)
  moveSpace.setupSpace(pos);

  return moveSpace.steps;
}

MovementSpace.prototype.siftRoute = function() {
  let positions = [this.startPos];
  let optRPos = this.optimalRoutePositions;
  optRPos[this.endPos] = this.steps;
  delete optRPos[this.startPos];

  while (true) {
    if(equivalentPositions(this.endPos, positions[0])) return positions.reverse();
    let nextAdjacentPositions = [];
    for(const pos in optRPos) {
      if (distance(positions[0], stringToPos(pos)) === 1) {
        nextAdjacentPositions.unshift(stringToPos(pos));
      }
    }
    if (includePosition(nextAdjacentPositions, this.endPos)) {
      positions.unshift(this.endPos);
    } else {
      positions.unshift(nextAdjacentPositions[0]);
    }

    for(let i = 0; i < nextAdjacentPositions.length; i++) {
      delete optRPos[nextAdjacentPositions[i]];
    }
  }
}


//SingleTurnMoveSpace

MovementSpace.prototype.setSpaceForSingleTurnMove = function() {
  this._setPossibleSpacesCanMoveThrough(this.unit.stats['move']);
  this._setValidMoveSpaces();
}


MovementSpace.prototype._setValidMoveSpaces = function() {
  for(const pos in this.positions) {
    let position = stringToPos(pos);

    if(this.isValidMove(position)) {
      this.validMovePositions[position] = this.positions[position];
    }
  }

  return this.validMoveSpaces;
}

MovementSpace.prototype.isValidMove = function(endPos) {
  if (equivalentPositions(endPos, this.startPos)) {
    return true;
  } else if((this.board.grid[endPos[0]][endPos[1]].unit != null) ||
    !this.positions[endPos]) {
    return false;
  }

  return true;
}

MovementSpace.prototype._setPossibleSpacesCanMoveThrough = function(moves) {
  for(this.steps = 1; this.steps < moves + 1; this.steps++) {
    this.findMovesForOneMoreStep();
  }
  return this.positions;
}

MovementSpace.prototype.findMovesForOneMoreStep = function() {
  this.potentialSpacesChangedFlag = false;
  let keys = Object.keys(this.positions);
  let iterationMoves = {};

  for(let idx3 = 0; idx3 < keys.length; idx3++) {
    this.findMoveableAdjPositions(keys[idx3], iterationMoves);
  }
}

MovementSpace.prototype.findMoveableAdjPositions = function(position, iterationMoves) {
  let pos = stringToPos(position);
  let adSpaces = this.adjacentSpacesCanMoveThrough(pos);
  for(let idx4 = 0; idx4 < adSpaces.length; idx4++) {
    if (this.positions[adSpaces[idx4]] === undefined) {
      this.handleSpaceTerrainBonus(adSpaces[idx4], iterationMoves);
    }
  }
}

MovementSpace.prototype.handleSpaceTerrainBonus = function(pos, iterationMoves) {
  if (this.board.space(pos).terrain === null) {
    this.appendPosition(pos);
  } else if (this.potentialSpaces[pos] === undefined) {
    this.potentialSpaces[pos] = this.board.space(pos).terrain.moveCost(this.constructor.name) - 1;
    this.potentialSpacesChangedFlag = true;
  } else if (iterationMoves[pos] === undefined && this.potentialSpaces[pos] > 1) {
    this.potentialSpaces[pos] -= 1;
    this.potentialSpacesChangedFlag = true;
  } else if(iterationMoves[pos] === undefined && this.potentialSpaces[pos] <= 1) {
    this.appendPosition(pos);
  }
  iterationMoves[pos] = true;
}

MovementSpace.prototype.appendPosition = function(position) {
  this.positions[position] = this.steps;
  this.numPositions += 1;
}

MovementSpace.prototype.adjacentSpacesCanMoveThrough = function(space, targetSpace) {
  let adjSpaces = this.adjacentSpaceList(space);
  let moveableAdjSpaces = [];

  for (let i = 0; i < adjSpaces.length; i++) {
    let pos = adjSpaces[i];
    if(this.isTraversableSpace(pos) ||
      (targetSpace != null && equivalentPositions(pos, targetSpace))) {
      moveableAdjSpaces.push(pos);
    }
  }

  return moveableAdjSpaces;
}

MovementSpace.prototype.isTraversableSpace = function(pos) {
  return this.board.space(pos).isTraversable(this.unit);
}


MovementSpace.prototype.adjacentSpaceList = function(pos) {
  let dimensions = this.board.dimensions;
  let spaces = [];

  if(pos[0] + 1 <= dimensions[0] - 1) spaces.push([pos[0] + 1, pos[1]]);
  if(pos[0] - 1 >= 0) spaces.push([pos[0] - 1, pos[1]]);
  if(pos[1] + 1 <= dimensions[1] - 1) spaces.push([pos[0], pos[1] + 1]);
  if(pos[1] - 1 >= 0) spaces.push([pos[0], pos[1] - 1]);

  return spaces;
}
