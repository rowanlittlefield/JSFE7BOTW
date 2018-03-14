function Wall(board, position) {
  Terrain.call(this, board, position);
}

Wall.prototype = Object.create(Terrain.prototype);
Wall.prototype.constructor = Wall;
