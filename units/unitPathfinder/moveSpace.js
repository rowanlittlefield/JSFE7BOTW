function MoveSpace(board, startPos, unit) {
  this.board = board;
  this.startPos = startPos;
  this.endPos = null;

  if (unit) {
    this.unit = unit
  } else if(this.board.space(startPos).unit) {
    this.unit = this.board.space(startPos).unit;
  }

  this.moveThroughPos = {};
  this.potentialPos = {};
  this.validMovePos = {};

  this.moveThroughPos[this.startPos] = 0;
  this.numPositions = 1;
  this.steps = 0;
  this.potentialPosChangedFlag = false;
}

//find crude path and steps
MoveSpace.prototype.viablePathToOppUnit = function(pos) {
  this.steps = 1;
  this.endPos = pos;

  while (true) {
    let previousPositionsCount = this.numPositions;
    this.findMovesForOneMoreStep();

    if (this.noViablePathToOppUnit(previousPositionsCount)) return false;
    this.steps += 1;
    if (this.moveThroughPos[pos] != undefined) return true;
  }
}

MoveSpace.prototype.noViablePathToOppUnit = function(previousPositionsCount) {
  return (this.numPositions === previousPositionsCount &&
    !this.potentialPosChangedFlag);
}

//Single turn move
MoveSpace.prototype.setSpaceForSingleTurnMove = function() {
  this._setPossibleSpacesCanMoveThrough(this.unit.stats['move']);
  this._setValidMoveSpaces();
}

MoveSpace.prototype._setValidMoveSpaces = function() {
  for(const pos in this.moveThroughPos) {
    let position = stringToPos(pos);

    if(this.isValidMove(position)) {
      this.validMovePos[position] = this.moveThroughPos[position];
    }
  }

  return this.validMovePos;
}

MoveSpace.prototype.isValidMove = function(endPos) {
  if (equivalentPositions(endPos, this.startPos)) {
    return true;
  } else if((this.board.space(endPos).unit != null) ||
    !this.moveThroughPos[endPos]) {
    return false;
  }

  return true;
}

MoveSpace.prototype._setPossibleSpacesCanMoveThrough = function(moves) {
  for(this.steps = 1; this.steps < moves + 1; this.steps++) {
    this.findMovesForOneMoreStep();
  }
  return this.positions;
}

MoveSpace.prototype.findMovesForOneMoreStep = function() {
  this.potentialPosChangedFlag = false;
  let keys = Object.keys(this.moveThroughPos);
  let iterationMoves = {};

  for(let idx3 = 0; idx3 < keys.length; idx3++) {
    this.findMoveableAdjPositions(keys[idx3], iterationMoves);
  }
}

MoveSpace.prototype.findMoveableAdjPositions = function(position, iterationMoves) {
  let pos = stringToPos(position);
  let adSpaces = this.adjacentSpacesCanMoveThrough(pos);
  for(let idx4 = 0; idx4 < adSpaces.length; idx4++) {
    if (this.moveThroughPos[adSpaces[idx4]] === undefined) {
      this.handleSpaceTerrainBonus(adSpaces[idx4], iterationMoves);
    }
  }
}

MoveSpace.prototype.handleSpaceTerrainBonus = function(pos, iterationMoves) {
  if (this.board.space(pos).terrain === null) {
    this.appendPosition(pos);
  } else if (this.potentialPos[pos] === undefined) {
    this.potentialPos[pos] = this.board.space(pos).terrain.moveCost(this.unit.constructor.name) - 1;
    this.potentialPosChangedFlag = true;
  } else if (iterationMoves[pos] === undefined && this.potentialPos[pos] > 1) {
    this.potentialPos[pos] -= 1;
    this.potentialPosChangedFlag = true;
  } else if(iterationMoves[pos] === undefined && this.potentialPos[pos] <= 1) {
    this.appendPosition(pos);
  }
  iterationMoves[pos] = true;
}

MoveSpace.prototype.appendPosition = function(position) {
  this.moveThroughPos[position] = this.steps;
  this.numPositions += 1;
}


MoveSpace.prototype.adjacentSpacesCanMoveThrough = function(space, targetSpace) {
  let adjSpaces = this.adjacentSpaceList(space);
  let moveableAdjSpaces = [];

  for (let i = 0; i < adjSpaces.length; i++) {
    let pos = adjSpaces[i];
    if(this.isTraversableSpace(pos) ||
      (this.endPos != null && equivalentPositions(pos, this.endPos))) {
      moveableAdjSpaces.push(pos);
    }
  }

  return moveableAdjSpaces;
}

MoveSpace.prototype.isTraversableSpace = function(pos) {
  return this.board.space(pos).isTraversable(this.unit);
}


MoveSpace.prototype.adjacentSpaceList = function(pos) {
  let dimensions = this.board.dimensions;
  let spaces = [];

  if(pos[0] + 1 <= dimensions[0] - 1) spaces.push([pos[0] + 1, pos[1]]);
  if(pos[0] - 1 >= 0) spaces.push([pos[0] - 1, pos[1]]);
  if(pos[1] + 1 <= dimensions[1] - 1) spaces.push([pos[0], pos[1] + 1]);
  if(pos[1] - 1 >= 0) spaces.push([pos[0], pos[1] - 1]);

  return spaces;
}

//rendering
MoveSpace.prototype.render = function(sF, x, y, width, height) {
  // highlightSpaces(this.moveThroughPos, this.board,
  //   'rgba(0, 0, 255, 0.3)', sF);

  galileoHighlightSpaces(sF, x, y, width, height, this.moveThroughPos, 'rgba(0, 0, 255, 0.3)');
}
