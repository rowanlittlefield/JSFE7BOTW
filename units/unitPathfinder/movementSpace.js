function MovementSpace(board, startPos, unit) {
  this.board = board;
  this.startPos = startPos;
  if (unit) {
    this.unit = unit
  } else if(this.board.space(startPos).unit) {
    this.unit = this.board.space(startPos).unit;
  }

  this.moveSpace = new MoveSpace(board, startPos, unit);
  this.attackSpace = null;
  this.routeSpace = null;

  this.steps = 0;
  this.setupFlag = false;
}

MovementSpace.prototype.validMovePos = function() {
  return this.moveSpace.validMovePos;
}

MovementSpace.prototype.setupSpace = function(numSteps) {
  if (numSteps instanceof Array) {
    return this.viablePathToOppUnit(numSteps);
  } else {
    this.moveSpace.setSpaceForSingleTurnMove(numSteps);
    this.attackSpace = new AttackSpace(
      this.board, this.unit, this.moveSpace.validMovePos
    );
  }
}

//private

//PathFinding

MovementSpace.prototype.viablePathToOppUnit = function(pos) {
  return this.moveSpace.viablePathToOppUnit(pos);
}

MovementSpace.prototype.findOptimalRoutePositions = function() {
  this.routeSpace = new RouteSpace(
    this.board,
    this.unit.position,
    this.unit,
    this.moveSpace.moveThroughPos,
    this.moveSpace.steps,
    this.moveSpace.endPos
  );
  this.routeSpace.findOptimalRoutePositions();
}

MovementSpace.prototype.siftRoute = function() {
  return this.routeSpace.siftRoute();
}

MovementSpace.prototype.pickOptPos = function() {
  return this.routeSpace.pickOptPos();
}

//rendering
MovementSpace.prototype.render = function(sF, x, y, width, height) {
  this.moveSpace.render(sF, x, y, width, height);
  this.attackSpace.render(sF, x, y, width, height);
  // this.routeSpace.render(sF);
}
