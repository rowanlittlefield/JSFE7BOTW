function Terrain(board, position, name) {
  this.board = board;
  this.position = this.setTerrain(position);
}

Terrain.prototype.setTerrain = function(pos) {
  if (this.board.grid[pos[0]][pos[1]].terrain == null) {
    this.position = pos;
    this.board.grid[pos[0]][pos[1]].terrain = this;
  } else {
    throw 'Space already occupied';
  }
}

Terrain.prototype.render = function() {
}

Terrain.prototype.terrainName = function() {
  return "Terrain";
}

Terrain.prototype.defenseBonus = function() {
  return 0;
}

Terrain.prototype.avoidBonus = function() {
  return 0;
}

Terrain.prototype.healBonus = function() {
  return 0;
}

Terrain.prototype.moveCost = function() {
  return 1;
}
