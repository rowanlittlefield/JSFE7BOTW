import { stringToPos, equivalentPositions, distance } from '~/util';
import PositionSet from '@/pathfinding/position_set';

function ValidMovePositions(board, unit) {
  PositionSet.call(this, board, unit);
}

ValidMovePositions.prototype = Object.create(PositionSet.prototype);
ValidMovePositions.prototype.constructor = ValidMovePositions;

ValidMovePositions.prototype.findPositions = function(moveThroughPositionsHash) {
  for(const positionString in moveThroughPositionsHash) {
    const position = stringToPos(positionString);

    if(this._isValidMove(position)) {
      this.positions[position] = moveThroughPositionsHash[position];
    }
  }

  return this.positions;
}

ValidMovePositions.prototype._isValidMove = function(position) {
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
