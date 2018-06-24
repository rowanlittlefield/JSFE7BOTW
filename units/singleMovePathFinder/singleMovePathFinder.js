function SingleMovePathFinder(board, unit) {
  this.board = board;
  this.moveStat = unit.stats.move;
  this.isPlayerUnit = unit instanceof PlayerUnit;

  this.moveThroughPositions = new MoveThroughPositions(board, this.isPlayerUnit, unit);
  this.validMovePositions = new ValidMovePositions(board, unit);
  this.attackPositions = new AttackPositions(board, unit);

  // this.routePositions = new RoutePositions(board, unit);
  // this.singleRoutePositionsList = new SingleRoutePositionsList();
  this.bfsMazeSolver = new BFSMazeSolver(board, unit);
}

SingleMovePathFinder.prototype.clearAndUpdate = function() {

}

SingleMovePathFinder.prototype.clear = function() {

}

SingleMovePathFinder.prototype.setupSingleMovePositionSets = function() {

}

SingleMovePathFinder.prototype.setupRoute = function(endPos, validMovePositionsHash) {

}
