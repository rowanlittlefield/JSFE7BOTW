import { stringToPos, equivalentPositions } from '../../miscellaneousFunctions/MiscellaneousFunctions';

function ValidMovePositions(board, unit) {
  this.board = board;
  this.unitPosition = unit.position;
  this.positions = {};
}

ValidMovePositions.prototype.update = function(unitPosition) {
  this.unitPosition = unitPosition;
}

ValidMovePositions.prototype.clear = function() {
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

ValidMovePositions.prototype.selectAttackSetupSpace = function(attackPositionString, ranges) {
  const viablePositions = [];
  const attackPosition = stringToPos(attackPositionString);
  for(const positionString in this.positions) {
    const position = stringToPos(positionString);
    const dist = distance(position, attackPosition);
    if(ranges.includes(dist)) {
      viablePositions.push(position);
    }
  }

  const moveSpaceIndex = Math.floor(Math.random() * viablePositions.length);
  const pos = viablePositions[moveSpaceIndex];
  return pos;
}

export default ValidMovePositions;
