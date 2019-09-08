import Terrain from '@/terrain/terrain';

function Village(board, position) {
  Terrain.call(this, board, position);
}

Village.prototype = Object.create(Terrain.prototype);
Village.prototype.constructor = Village;

Village.prototype.terrainName = function() {
  return "Village";
}

Village.prototype.defenseBonus = function() {
  return 0;
}

Village.prototype.avoidBonus = function() {
  return 10;
}

Village.prototype.healBonus = function() {
  return 0;
}

Village.prototype.moveCost = function() {
  return 1;
}

export default Village;
