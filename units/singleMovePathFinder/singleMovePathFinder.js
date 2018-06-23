function SingleMovePathFinder(board, unit) {
  this.board = board;
  this.moveStat = unit.stats.move;
  this.isPlayerUnit = unit instanceof PlayerUnit;

  this.moveThroughPositions = new MoveThroughPositions(board, this.isPlayerUnit, unit);
  this.validMovePositions = new validMovePositions(board, unit);
  // this.attackPositions = new AttackPositions();
  // this.routePositions = new RoutePositions();
}

SingleMovePathFinder.prototype.clearAndUpdate = function() {
  
}

SingleMovePathFinder.prototype.clear = function() {

}
