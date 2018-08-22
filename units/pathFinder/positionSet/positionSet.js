import { galileoHighlightSpaces } from '../../../miscellaneousFunctions/MiscellaneousFunctions';

function PositionSet(board, unit, color) {
  this.board = board;
  this.unitPosition = unit.position;
  this.color = color ? color : 'rgba(0, 0, 0, 1)';
  this.positions = {};
}

PositionSet.prototype.clear = function() {
  this.positions = {};
}

PositionSet.prototype.update = function(unitPosition) {
  this.unitPosition = unitPosition;
}

PositionSet.prototype._adjacentPositionsList = function(pos) {
  const dimensions = this.board.dimensions;
  const spaces = [];

  if(pos[0] + 1 <= dimensions[0] - 1) spaces.push([pos[0] + 1, pos[1]]);
  if(pos[0] - 1 >= 0) spaces.push([pos[0] - 1, pos[1]]);
  if(pos[1] + 1 <= dimensions[1] - 1) spaces.push([pos[0], pos[1] + 1]);
  if(pos[1] - 1 >= 0) spaces.push([pos[0], pos[1] - 1]);

  return spaces;
}

PositionSet.prototype.render = function(sF, x, y, width, height) {
  galileoHighlightSpaces(sF, x, y, width, height, this.positions, this.color);
}

export default PositionSet;
