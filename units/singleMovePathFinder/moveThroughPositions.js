function MoveThroughPositions(board, isPlayerUnit, unitPosition) {
  this.board = board;
  this.isPlayerUnit = isPlayerUnit;
  this.unitPosition = unitPosition;

  this.positions = {};
  this.potentialPositions = {};
}

MoveThroughPositions.prototype.clear = function() {
  this.positions = {};
  this.potentialPositions = {};
}

MoveThroughPositions.prototype.adjacentPositionsCanMoveThrough = function(pos) {
  let adjPositions = this.adjacentPositionsList(pos);
  let moveableAdjPositions = [];

  for (let i = 0; i < adjPositions.length; i++) {
    let adjPos = adjPositions[i];
    if(this.isTraversableSpace(adjPos)) {
      moveableAdjPositions.push(adjPos);
    }
  }

  return moveableAdjPositions;
}

MoveThroughPositions.prototype.isTraversableSpace = function(pos) {
  return this.board.space(pos).isTraversableBoolean(this.isPlayerUnit);
}

MoveSpace.prototype.adjacentPositionsList = function(pos) {
  const dimensions = this.board.dimensions;
  const spaces = [];

  if(pos[0] + 1 <= dimensions[0] - 1) spaces.push([pos[0] + 1, pos[1]]);
  if(pos[0] - 1 >= 0) spaces.push([pos[0] - 1, pos[1]]);
  if(pos[1] + 1 <= dimensions[1] - 1) spaces.push([pos[0], pos[1] + 1]);
  if(pos[1] - 1 >= 0) spaces.push([pos[0], pos[1] - 1]);

  return spaces;
}


MoveThroughPositions.prototype.render = function(sF, x, y, width, height) {
  // need to test this!
  // galileoHighlightSpaces(sF, x, y, width, height, this.positions, 'rgba(0, 0, 255, 0.3)');
}
