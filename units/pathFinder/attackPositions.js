import PlayerUnit from '../playerUnits/playerUnit';
import { stringToPos } from '../../miscellaneousFunctions/MiscellaneousFunctions';
import PositionSet from './positionSet';

function AttackPositions(board, unit) {
  PositionSet.call(this, board, unit, 'rgba(255, 0, 0, 0.2)');

  this.isPlayerUnit = unit instanceof PlayerUnit;
  this.attackRanges = unit.equippedWeapon.stats['range'];
  this.unit = unit;
}

AttackPositions.prototype = Object.create(PositionSet.prototype);
AttackPositions.prototype.constructor = AttackPositions;

AttackPositions.prototype.findPositions = function(validMovePositionsHash) {
  const maxRange = Math.max.apply(null, this.attackRanges);

  for(let idx = 0; idx < maxRange; idx++) {
    const seedSpaceFlag = idx === 0;
    this.iterateAttackSpace(validMovePositionsHash, seedSpaceFlag);
  }

  for(const position in this.positions) {
    if(this.unit.isCorrectDistance(position, validMovePositionsHash, this.attackRanges)) {
      delete this.positions[position];
    }
  }

  return this.positions;
}

AttackPositions.prototype.iterateAttackSpace = function(validMovePositionsHash, seedSpaceFlag) {
  const seedSpace = (seedSpaceFlag ? validMovePositionsHash : this.positions);
  for(const positionString in seedSpace) {
    const position = stringToPos(positionString);
    const adjAttackPositions = this.adjacentAttackablePositions(position, validMovePositionsHash);
    for(let idx = 0; idx < adjAttackPositions.length; idx++) {
      this.positions[adjAttackPositions[idx]] = true;
    }
  }
}

AttackPositions.prototype.adjacentAttackablePositions = function(position, validMovePositionsHash) {
  const adjPositions = this.adjacentPositionsList(position);
  const attackableAdjPositions = [];

  for (let i = 0; i < adjPositions.length; i++) {
    const pos = adjPositions[i];
    const unitAtPos = this.board.space(pos).unit;
    if(validMovePositionsHash[pos] === undefined &&
       (unitAtPos === null ||
      unitAtPos instanceof(PlayerUnit) != this.isPlayerUnit)) {
      attackableAdjPositions.push(pos);
    }
  }

  return attackableAdjPositions;
}

export default AttackPositions;
