import Terrain from '@/terrain/terrain';

function Fort(board, position) {
  Terrain.call(this, board, position);
}

Fort.prototype = Object.create(Terrain.prototype);
Fort.prototype.constructor = Fort;

Fort.prototype.terrainName = function() {
  return "Fort";
}

Fort.prototype.defenseBonus = function() {
  return 2;
}

Fort.prototype.avoidBonus = function() {
  return 20;
}

Fort.prototype.healBonus = function() {
  return 20;
}

Fort.prototype.moveCost = function(constructorName) {
  return 2;
}

export default Fort;
