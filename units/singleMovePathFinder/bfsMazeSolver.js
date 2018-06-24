function bfsMazeSolver(board, unit) {
  this.board = board;
  this.unit = unit;
  this.isPlayerUnit = unit instanceof PlayerUnit;
  this.unitClass = unit.constructor.name;
  this.unitPosition = unit.positions;

  this.paths = {};
  this.potentialPositions = {};
  this.foundNewPositionsFlag = false;
  this.foundPositionFlag = false;
  this.numPositions = 0;
  this.steps = 0;
  this.endPos = endPos;
}

bfsMazeSolver.prototype.createPath(endPos) {
  this.paths[this.unitPosition] = null;
  this.steps = 1;
  this.endPos = endPos;

  while (true) {
    //
    this.findMovesForOneMoreStep();

    if (!this.foundNewPositionsFlag) return null;
    this.steps += 1;
    if (this.paths[endPos] != undefined) return this.routeList();
  }

}

bfsMazeSolver.prototype.findMovesForOneMoreStep = function() {
  this.foundNewPositionsFlag = false;
  const prevPositionStrings = Object.keys(this.paths);
  const iterationMoves = {};

  for(let idx = 0; idx < prevPositionStrings.length; idx++) {
    this.findMoveableAdjPositions(prevPositionStrings[idx], iterationMoves);
  }
}

bfsMazeSolver.prototype.findMoveableAdjPositions = function(prevPositionString, iterationMoves) {
  const prevPosition = stringToPos(positionString);
  const adjMoveablePositions = this.adjacentPositionsCanMoveThrough(prevPosition);
  for(let idx = 0; idx < adjMoveablePositions.length; idx++) {
    if (this.positions[adjMoveablePositions[idx]] === undefined) {
      this.handleTerrainBonus(
        adjMoveablePositions[idx],
        prevPosition,
        this.board.space(adjMoveablePositions[idx]),
        iterationMoves
      );
    }
  }
}

bfsMazeSolver.prototype.handleTerrainBonus = function(pos, prevPos, space, iterationMoves) {
  if (space.terrain === null) {
    this.appendPosition(pos, prevPos);
  } else if (this.potentialPositions[pos] === undefined) {
    this.potentialPositions[pos] = space.terrain.moveCost(this.unitClass) - 1;
  } else if (iterationMoves[pos] === undefined && this.potentialPositions[pos] > 1) {
    this.potentialPositions[pos] -= 1;
  } else if(iterationMoves[pos] === undefined && this.potentialPositions[pos] <= 1) {
    this.appendPosition(pos, prevPos);
  }
  this.foundNewPositionsFlag = true;
  iterationMoves[pos] = true;
}

bfsMazeSolver.prototype.appendPosition = function(position, prevPos) {
  this.positions[position] = prevPos;
  this.numPositions += 1;
}
//
bfsMazeSolver.prototype.adjacentPositionsCanMoveThrough = function(pos) {
  let adjPositions = this.adjacentPositionsList(pos);
  let moveableAdjPositions = [];

  for (let i = 0; i < adjPositions.length; i++) {
    let adjPos = adjPositions[i];
    if(this._isTraversableSpace(adjPos)) {
      moveableAdjPositions.push(adjPos);
    }
  }

  return moveableAdjPositions;
}

bfsMazeSolver.prototype._isTraversableSpace = function(pos) {
  return this.board.space(pos).isTraversableBoolean(this.isPlayerUnit);
}

bfsMazeSolver.prototype.adjacentPositionsList = function(pos) {
  const dimensions = this.board.dimensions;
  const spaces = [];

  if(pos[0] + 1 <= dimensions[0] - 1) spaces.push([pos[0] + 1, pos[1]]);
  if(pos[0] - 1 >= 0) spaces.push([pos[0] - 1, pos[1]]);
  if(pos[1] + 1 <= dimensions[1] - 1) spaces.push([pos[0], pos[1] + 1]);
  if(pos[1] - 1 >= 0) spaces.push([pos[0], pos[1] - 1]);

  return spaces;
}
// 



bfsMazeSolver.prototype.routeList = function() {

}
