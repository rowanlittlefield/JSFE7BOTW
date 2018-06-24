function SingleMovePathFinder(board, unit) {
  this.board = board;
  this.moveStat = unit.stats.move;
  this.isPlayerUnit = unit instanceof PlayerUnit;

  this.moveThroughPositions = new MoveThroughPositions(board, this.isPlayerUnit, unit);
  this.validMovePositions = new ValidMovePositions(board, unit);
  this.attackPositions = new AttackPositions(board, unit);

  this.bfsMazeSolver = new BFSMazeSolver(board, unit);
}

SingleMovePathFinder.prototype.clearAndUpdate = function(unitPosition) {
  this.clear();
  this.moveThroughPositions.update(unitPosition);
  this.validMovePositions.update(unitPosition);
  this.attackPositions.update(unitPosition);
  this.bfsMazeSolver.update(unitPosition);
}

SingleMovePathFinder.prototype.clear = function() {
  this.moveThroughPositions.clear();
  this.validMovePositions.clear();
  this.attackPositions.clear();
  this.bfsMazeSolver.clear();
}

SingleMovePathFinder.prototype.setupSingleMovePositionSets = function(unitPosition) {
  this.clearAndUpdate(unitPosition);
  const moveThrougPositionsHash = this.moveThroughPositions.findPositions();
  const validMovePositionsHash = this.validMovePositions.findPositions(moveThrougPositionsHash);
  const attackPositionsHash = this.attackPositions.findPositions(validMovePositionsHash);
}

SingleMovePathFinder.prototype.setupRoute = function(endPos) {

}

SingleMovePathFinder.prototype.findSeekAndDestroyMultiTurnRoute = function() {

}

SingleMovePathFinder.prototype.findSeekAndDestroySingleTurnPosition = function() {

}

SingleMovePathFinder.prototype.renderSingleMovePositionSets = function(sF, x, y, width, height) {
  this.moveThroughPositions.render(sF, x, y, width, height);
  this.attackPositions.render(sF, x, y, width, height);
}
