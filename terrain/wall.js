function Wall(board, position) {
  this.board = board;
  this.position = this.setTerrain(position);
  this.sprite = null;
}

Wall.prototype = Object.create(Terrain.prototype);
Wall.prototype.constructor = Wall;

Wall.prototype.render = function(row, col, sF) {
  c.fillStyle = 'rgba(0, 0, 0, 1)';
  c.fillRect(row * sF, col * sF, sF, sF);
}
