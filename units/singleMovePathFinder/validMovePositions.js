function ValidMovePositions(board, unit) {
  this.board = board;
  this.unitPosition = unitPosition;
  this.positions = {};
}

ValidMovePositions.prototype.findPositions = function(moveThroughPositionsHash) {
  for(const positionString in moveThroughPositionsHash) {
    const position = stringToPos(positionString);

    if(this.isValidMove(position)) {
      this.positions[position] = moveThroughPositionsHash[position];
    }
  }

  return this.positions;
}

ValidMovePositions.prototype.isValidMove = function(position) {
  if(!(this.board.space(position).unit === null ||
   equivalentPositions(position, this.unitPosition))) {
    return false;
  }

  return true;
}
