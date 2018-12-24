import PlayerUnit from '../../../units/playerUnits/playerUnit';
import { stringToPos, equivalentPositions, spaceHighlight } from '~/util';
import MoveThroughPositions from '@/pathfinding/move_through_positions';

function MazeSolver(board, unit) {
  this.board = board;
  this.unit = unit;
  this.isPlayerUnit = unit instanceof PlayerUnit;
  this.unitClass = unit.constructor.name;
  this.unitPosition = unit.position;

  this.clear();
}

MazeSolver.prototype = Object.create(MoveThroughPositions.prototype);
MazeSolver.prototype.constructor = MazeSolver;

MazeSolver.prototype.clear = function() {
  this.paths = {};
  this.potentialPositions = {};
  this.routePositions = null;
  this.foundNewPositionsFlag = false;
  this.numPositions = 0;
  this.steps = 0;
  this.endPos = null;
}

MazeSolver.prototype.findPath = function(endPos) {
  if(equivalentPositions(endPos, this.unitPosition)) return [this.unitPosition];

  this.paths[this.unitPosition] = null;
  this.steps = 1;
  this.endPos = endPos;
  this.foundNewPositionsFlag = true;

  while (true) {
    this._findMovesForOneMoreStep();

    if (!this.foundNewPositionsFlag) {return null;}
    this.steps += 1;
    if (this.paths[endPos] != undefined) {return this.routeList();}
  }

}

MazeSolver.prototype._findMovesForOneMoreStep = function() {
  this.foundNewPositionsFlag = false;
  const prevPositionStrings = Object.keys(this.paths);
  const iterationMoves = {};

  for(let idx = 0; idx < prevPositionStrings.length; idx++) {
    this._findMoveableAdjPositions(prevPositionStrings[idx], iterationMoves);
  }
}

MazeSolver.prototype._findMoveableAdjPositions = function(prevPositionString, iterationMoves) {
  const prevPosition = stringToPos(prevPositionString);
  const adjMoveablePositions = this._adjacentPositionsCanMoveThrough(prevPosition);
  for(let idx = 0; idx < adjMoveablePositions.length; idx++) {
    if (this.paths[adjMoveablePositions[idx]] === undefined) {
      this._handleTerrainBonus(
        adjMoveablePositions[idx],
        prevPosition,
        this.board.space(adjMoveablePositions[idx]),
        iterationMoves
      );
    }
  }
}

MazeSolver.prototype._handleTerrainBonus = function(pos, prevPos, space, iterationMoves) {
  if (space.terrain === null) {
    this._appendPosition(pos, prevPos);
  } else if (this.potentialPositions[pos] === undefined) {
    this.potentialPositions[pos] = {remainingTerrainBonusCount: space.terrain.moveCost(this.unitClass) - 1, previousPos: prevPos};
  } else if (iterationMoves[pos] === undefined && this.potentialPositions[pos]['remainingTerrainBonusCount'] > 1) {
    this.potentialPositions[pos]['remainingTerrainBonusCount'] -= 1;
  } else if(iterationMoves[pos] === undefined && this.potentialPositions[pos]['remainingTerrainBonusCount'] <= 1) {
    this._appendPosition(pos);
  }
  this.foundNewPositionsFlag = true;
  iterationMoves[pos] = true;
}

MazeSolver.prototype._appendPosition = function(position, prevPos = null) {
  prevPos = (prevPos === null ? this.potentialPositions[position]['previousPos'] : prevPos);
  this.paths[position] = prevPos;
  this.numPositions += 1;
}

MazeSolver.prototype._adjacentPositionsCanMoveThrough = function(pos) {
  const adjPositions = this._adjacentPositionsList(pos);
  const moveableAdjPositions = [];

  for (let i = 0; i < adjPositions.length; i++) {
    const adjPos = adjPositions[i];
    if(this._isTraversableSpace(adjPos) || equivalentPositions(adjPos, this.endPos)) {
      moveableAdjPositions.push(adjPos);
    }
  }

  return moveableAdjPositions;
}

MazeSolver.prototype.routeList = function() {
  const routePositionsList = [this.endPos];

  while (!equivalentPositions(routePositionsList[routePositionsList.length - 1], this.unitPosition)) {
    const position = this.paths[routePositionsList[routePositionsList.length - 1]];
    routePositionsList.push(position);
  }

  this.routePositions = routePositionsList;
  return routePositionsList.reverse();
}

MazeSolver.prototype.renderRouteSpaces = function(sF, x, y, width, height) {
  if(this.routePositions === null) return null;
  const topX = x/sF;
  const topY = y/sF;

  for(let i = 0; i < this.routePositions.length; i++) {
    const highlightPos = [this.routePositions[i][0] - topX, this.routePositions[i][1] - topY];
    spaceHighlight(highlightPos, 'rgba(123, 104, 238, 0.4)', sF);
  }
}

export default MazeSolver;
