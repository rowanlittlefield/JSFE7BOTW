import { stringToPos } from '../../miscellaneousFunctions/MiscellaneousFunctions';
import PositionSet from './positionSet';

function MoveThroughPositions(board, isPlayerUnit, unit) {
  PositionSet.call(this, board, unit, 'rgba(0, 0, 255, 0.3)');

  this.isPlayerUnit = isPlayerUnit;
  this.moveStat = unit.stats.move;
  this.unitClass = unit.constructor.name;

  this.potentialPositions = {};
  this.potentialPosChangedFlag = false;
  this.numPositions = 0;
  this.steps = 0;
}

MoveThroughPositions.prototype = Object.create(PositionSet.prototype);
MoveThroughPositions.prototype.constructor = MoveThroughPositions;

MoveThroughPositions.prototype.update = function(unitPosition) {
  this.unitPosition = unitPosition;
}

MoveThroughPositions.prototype.clear = function() {
  this.positions = {};
  this.potentialPositions = {};
  this.potentialPosChangedFlag = false;
  this.steps = 0;
}

MoveThroughPositions.prototype.findPositions = function() {
  this.positions[this.unitPosition] = 0;

  for(this.steps = 1; this.steps < this.moveStat + 1; this.steps++) {
    this.findPositionsForNextStep();
  }
  return this.positions;
}

MoveThroughPositions.prototype.findPositionsForNextStep = function() {
  this.potentialPosChangedFlag = false;
  const positionStrings = Object.keys(this.positions);
  const iterationMoves = {};

  for(let idx = 0; idx < positionStrings.length; idx++) {
    this.findMoveableAdjPositions(positionStrings[idx], iterationMoves);
  }
}

MoveThroughPositions.prototype.findMoveableAdjPositions = function(positionString, iterationMoves) {
  const position = stringToPos(positionString);
  const adjMoveablePositions = this.adjacentPositionsCanMoveThrough(position);
  for(let idx = 0; idx < adjMoveablePositions.length; idx++) {
    if (this.positions[adjMoveablePositions[idx]] === undefined) {
      this.handleTerrainBonus(
        adjMoveablePositions[idx],
        this.board.space(adjMoveablePositions[idx]),
        iterationMoves
      );
    }
  }
}

MoveThroughPositions.prototype.handleTerrainBonus = function(pos, space, iterationMoves) {
  if (space.terrain === null) {
    this.appendPosition(pos);
  } else if (this.potentialPositions[pos] === undefined) {
    this.potentialPositions[pos] = space.terrain.moveCost(this.unitClass) - 1;
    this.potentialPosChangedFlag = true;
  } else if (iterationMoves[pos] === undefined && this.potentialPositions[pos] > 1) {
    this.potentialPositions[pos] -= 1;
    this.potentialPosChangedFlag = true;
  } else if(iterationMoves[pos] === undefined && this.potentialPositions[pos] <= 1) {
    this.appendPosition(pos);
  }
  iterationMoves[pos] = true;
}

MoveThroughPositions.prototype.appendPosition = function(position) {
  this.positions[position] = this.steps;
  this.numPositions += 1;
}


//
MoveThroughPositions.prototype.adjacentPositionsCanMoveThrough = function(pos) {
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

MoveThroughPositions.prototype._isTraversableSpace = function(pos) {
  return this.board.space(pos).isTraversableBoolean(this.isPlayerUnit);
}

export default MoveThroughPositions;
