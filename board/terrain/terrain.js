function Terrain(board, position) {
  this.board = board;
  // this.position = this.setTerrain(position);
  this.setTerrain(position);
}

Terrain.prototype.setTerrain = function(pos) {
  if (this.board.setTerrainAtPosition(this, pos)) {
    this.position = pos;
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

export default Terrain;
