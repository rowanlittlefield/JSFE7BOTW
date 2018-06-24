// function RoutesPositions(board, unit) {
//   this.board = board;
//   this.unit = unit;
//   this.isPlayerUnit = unit instanceof PlayerUnit;
//
//
//   this.steps = unit.stats.move;
//   this.unitPosition = unit.positions;
//   this.endPos = null;
//
//   this.positions = {};
// }
//
// RoutePositions.prototype.clearAndUpdate = function() {
//
// }
//
// RoutePositions.prototype.clear = function() {
//
// }
//
// RoutePositions.prototype.findPositions(endPos, validMovePositionsHash) {
//   this.endPos = endPos;
//   const updatedViablePath = {};
//
//   for(const positionString in validMovePositionsHash) {
//     const position = stringToPos(positionString);
//     if (this.steps >= distance(position, this.unitPosition) + distance(position, endPos)) {
//       updatedViablePath[position] = validMovePositionsHash[position];
//     }
//   }
//   for(const position in updatedViablePath) {
//     if (this.isOptimalRoutePosition(position, updatedViablePath[position])) {
//       this.positions[position] = updatedViablePath[position];
//     }
//   }
//
//   return this.positions;
// }
// //
// RoutePositions.prototype.optimalRoutePosition = function(position, preSteps) {
//   const stepsToPos = this.stepsToPosition(position, this.endPos);
//   return preSteps + stepsToPos <= this.steps;
// }
//
// RoutePositions.prototype.stepsToPosition = function(start, pos) {
//   // const moveThroughPositions = new moveThroughPositions(
//   //   this.board, this.isPlayerUnit, this.unit
//   // );
//   //
//   // moveThroughPositions.viablePathToOppUnit(pos);
//   //
//   // return moveSpace.steps;
//
// }
// //
