function Forest(board, position) {
  Terrain.call(this, board, position, 1, 20, 0, 20);
}

Forest.prototype = Object.create(Terrain.prototype);
Forest.prototype.constructor = Forest;
