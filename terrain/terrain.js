function Terrain(board, position) {
  this.board = board;
  this.position = position;
}

Terrain.prototype.setTerrain = function(pos) {
  if (this.board.grid[pos[0]][pos[1]].unit == null &&
    this.board.grid[pos[0]][pos[1]].terrain == null) {
    this.position = pos;
    this.board.grid[pos[0]][pos[1]].terrain = this;
  } else {
    throw 'Space already occupied';
  }
}

Terrain.prototype.render = function() {
}
