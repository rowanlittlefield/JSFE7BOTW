function Terrain(board, position, sprite) {
  this.board = board;
  this.position = position;
  this.sprite = sprite;
}

Terrain.prototype.setTerrain = function(pos) {
  if (this.board.grid[pos[0]][pos[1]][0] == null && this.board.grid[pos[0]][pos[1]][1] == null) {
    this.position = pos;
    this.board.grid[pos[0]][pos[1]][1] = this;
  } else {
    throw 'Space already occupied';
  }
}

Terrain.prototype.render = function() {
}
