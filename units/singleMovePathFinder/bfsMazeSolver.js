import PlayerUnit from '../playerUnits/playerUnit';
import { stringToPos, equivalentPositions, spaceHighlight } from '../../miscellaneousFunctions/MiscellaneousFunctions';

function BFSMazeSolver(board, unit) {
  this.board = board;
  this.unit = unit;
  this.isPlayerUnit = unit instanceof PlayerUnit;
  this.unitClass = unit.constructor.name;
  this.unitPosition = unit.position;

//TODO: substitute this and others with clear if works
  this.paths = {};
  this.potentialPositions = {};
  this.routePositions = null;
  this.foundNewPositionsFlag = false;
  this.numPositions = 0;
  this.steps = 0;
  this.endPos = null;
}

BFSMazeSolver.prototype.clear = function() {
  this.paths = {};
  this.potentialPositions = {};
  this.routePositions = null;
  this.foundNewPositionsFlag = false;
  this.numPositions = 0;
  this.steps = 0;
  this.endPos = null;
}

BFSMazeSolver.prototype.update = function(unitPosition) {
  this.unitPosition = unitPosition;
}

BFSMazeSolver.prototype.findPath = function(endPos) {
  this.paths[this.unitPosition] = null;
  this.steps = 1;
  this.endPos = endPos;
  this.foundNewPositionsFlag = true;

  while (true) {
    this.findMovesForOneMoreStep();

    if (!this.foundNewPositionsFlag) {return null;}
    this.steps += 1;
    if (this.paths[endPos] != undefined) {return this.routeList();}
  }

}

BFSMazeSolver.prototype.findMovesForOneMoreStep = function() {
  this.foundNewPositionsFlag = false;
  const prevPositionStrings = Object.keys(this.paths);
  const iterationMoves = {};

  for(let idx = 0; idx < prevPositionStrings.length; idx++) {
    this.findMoveableAdjPositions(prevPositionStrings[idx], iterationMoves);
  }
}

BFSMazeSolver.prototype.findMoveableAdjPositions = function(prevPositionString, iterationMoves) {
  const prevPosition = stringToPos(prevPositionString);
  const adjMoveablePositions = this.adjacentPositionsCanMoveThrough(prevPosition);
  for(let idx = 0; idx < adjMoveablePositions.length; idx++) {
    if (this.paths[adjMoveablePositions[idx]] === undefined) {
      this.handleTerrainBonus(
        adjMoveablePositions[idx],
        prevPosition,
        this.board.space(adjMoveablePositions[idx]),
        iterationMoves
      );
    }
  }
}

BFSMazeSolver.prototype.handleTerrainBonus = function(pos, prevPos, space, iterationMoves) {
  if (space.terrain === null) {
    this.appendPosition(pos, prevPos);
  } else if (this.potentialPositions[pos] === undefined) {
    this.potentialPositions[pos] = {remainingTerrainBonusCount: space.terrain.moveCost(this.unitClass) - 1, previousPos: prevPos};
  } else if (iterationMoves[pos] === undefined && this.potentialPositions[pos]['remainingTerrainBonusCount'] > 1) {
    this.potentialPositions[pos]['remainingTerrainBonusCount'] -= 1;
  } else if(iterationMoves[pos] === undefined && this.potentialPositions[pos]['remainingTerrainBonusCount'] <= 1) {
    this.appendPosition(pos);
  }
  this.foundNewPositionsFlag = true;
  iterationMoves[pos] = true;
}

BFSMazeSolver.prototype.appendPosition = function(position, prevPos = null) {
  prevPos = (prevPos === null ? this.potentialPositions[position]['previousPos'] : prevPos);
  this.paths[position] = prevPos;
  this.numPositions += 1;
}

BFSMazeSolver.prototype.adjacentPositionsCanMoveThrough = function(pos) {
  const adjPositions = this.adjacentPositionsList(pos);
  const moveableAdjPositions = [];

  for (let i = 0; i < adjPositions.length; i++) {
    const adjPos = adjPositions[i];
    if(this._isTraversableSpace(adjPos) || equivalentPositions(adjPos, this.endPos)) {
      moveableAdjPositions.push(adjPos);
    }
  }

  return moveableAdjPositions;
}

BFSMazeSolver.prototype._isTraversableSpace = function(pos) {
  return this.board.space(pos).isTraversableBoolean(this.isPlayerUnit);
}

BFSMazeSolver.prototype.adjacentPositionsList = function(pos) {
  const dimensions = this.board.dimensions;
  const spaces = [];

  if(pos[0] + 1 <= dimensions[0] - 1) spaces.push([pos[0] + 1, pos[1]]);
  if(pos[0] - 1 >= 0) spaces.push([pos[0] - 1, pos[1]]);
  if(pos[1] + 1 <= dimensions[1] - 1) spaces.push([pos[0], pos[1] + 1]);
  if(pos[1] - 1 >= 0) spaces.push([pos[0], pos[1] - 1]);

  return spaces;
}



BFSMazeSolver.prototype.routeList = function() {
  const routePositionsList = [this.endPos];

  while (!equivalentPositions(routePositionsList[routePositionsList.length - 1], this.unitPosition)) {
    const position = this.paths[routePositionsList[routePositionsList.length - 1]];
    routePositionsList.push(position);
  }

  this.routePositions = routePositionsList;
  return routePositionsList.reverse();
}

BFSMazeSolver.prototype.renderRouteSpaces = function(sF, x, y, width, height) {
  if(this.routePositions === null) return null;
  const topX = x/sF;
  const topY = y/sF;

  for(let i = 0; i < this.routePositions.length; i++) {


    let highlightPos = [this.routePositions[i][0] - topX, this.routePositions[i][1] - topY];
    spaceHighlight(highlightPos, 'rgba(123, 104, 238, 0.4)', sF);
  }

}

export default BFSMazeSolver;
