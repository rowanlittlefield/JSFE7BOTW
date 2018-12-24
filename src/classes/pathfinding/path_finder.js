import PlayerUnit from '../../../units/playerUnits/playerUnit';
import MoveThroughPositions from '@/pathfinding/move_through_positions';
import ValidMovePositions from '@/pathfinding/valid_move_positions';
import AttackPositions from '@/pathfinding/attack_positions';
import MazeSolver from '@/pathfinding/maze_solver';
import { equivalentPositions, stringToPos } from '~/util';

function PathFinder(board, unit) {
  this.board = board;
  this.moveStat = unit.stats.move;
  this.isPlayerUnit = unit instanceof PlayerUnit;

  this.moveThroughPositions = new MoveThroughPositions(board, this.isPlayerUnit, unit);
  this.validMovePositions = new ValidMovePositions(board, unit);
  this.attackPositions = new AttackPositions(board, unit);

  this.mazeSolver = new MazeSolver(board, unit);
}

PathFinder.prototype.clearAndUpdate = function(unitPosition) {
  this.clear();
  this.update(unitPosition);
}

PathFinder.prototype.clear = function() {
  this.moveThroughPositions.clear();
  this.validMovePositions.clear();
  this.attackPositions.clear();
  this.mazeSolver.clear();
}

PathFinder.prototype.update = function(unitPosition) {
  this.moveThroughPositions.update(unitPosition);
  this.validMovePositions.update(unitPosition);
  this.attackPositions.update(unitPosition);
  this.mazeSolver.update(unitPosition);
}

PathFinder.prototype.setupSingleMovePositionSets = function(unitPosition) {
  this.clearAndUpdate(unitPosition);
  const moveThrougPositionsHash = this.moveThroughPositions.findPositions();
  const validMovePositionsHash = this.validMovePositions.findPositions(moveThrougPositionsHash);
  const attackPositionsHash = this.attackPositions.findPositions(validMovePositionsHash);
}

PathFinder.prototype.setupRoute = function(endPos) {
  return this.mazeSolver.findPath(endPos);
}

PathFinder.prototype.findSingleMoveAttackPosition = function(unitPosition, unitRanges) {
  this.setupSingleMovePositionSets(unitPosition, unitRanges);
  const playerUnitPositions = this.board.listOfUnitsObject(PlayerUnit);
  for(const pos in playerUnitPositions) {
    if(this.attackPositions.positions[pos]) {
      return this.validMovePositions.selectAttackSetupSpace(pos, unitRanges);
    }
  }
  return unitPosition;
}

PathFinder.prototype.findSeekAndDestroySingleTurnPosition = function(unitPosition, unitRanges) {
  const singleMoveAttackPosition = this.findSingleMoveAttackPosition(
    unitPosition, unitRanges
  );
  if(!equivalentPositions(unitPosition, singleMoveAttackPosition)) {
    return singleMoveAttackPosition;
  }

  const multiTurnRoute = this.findSeekAndDestroyMultiTurnRoute(unitPosition, unitRanges);
  if(equivalentPositions(unitPosition, multiTurnRoute)) return unitPosition;

  this.clearAndUpdate(unitPosition);
  this.setupSingleMovePositionSets(unitPosition);

  for(let i = multiTurnRoute.length - 1; i >= 0; i--){
    const position = multiTurnRoute[i];
    if(this.validMovePositions.positions[position] != undefined) {
      return position;
    }
  }
}

PathFinder.prototype.findSeekAndDestroyMultiTurnRoute = function(unitPosition, unitRanges) {
  const playerUnitPositions = this.board.listOfUnitsObject(PlayerUnit);

  for(const positionString in playerUnitPositions) {
    const position = stringToPos(positionString);
    this.mazeSolver.clear();
    this.mazeSolver.update(unitPosition);
    const route = this.mazeSolver.findPath(position);
    if(route !== null) return route;
  }

  return unitPosition;
}


PathFinder.prototype.renderSingleMovePositionSets = function(sF, x, y, width, height) {
  this.moveThroughPositions.render(sF, x, y, width, height);
  this.attackPositions.render(sF, x, y, width, height);
  this.mazeSolver.renderRouteSpaces(sF, x, y, width, height);
}

export default PathFinder;
