import Terrain from '@/terrain/terrain';

function Wall(board, position) {
  Terrain.call(this, board, position);
}

Wall.prototype = Object.create(Terrain.prototype);
Wall.prototype.constructor = Wall;

Wall.prototype.terrainName = function() {
  return "Wall";
}

Wall.prototype.defenseBonus = function() {
  return "---";
}

Wall.prototype.avoidBonus = function() {
  return "---";
}

Wall.prototype.healBonus = function() {
  return 0;
}

Wall.prototype.moveCost = function() {
  return Infinity;
}

export default Wall;
