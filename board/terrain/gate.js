import Terrain from './terrain';

function Gate(board, position) {
  Terrain.call(this, board, position);
}

Gate.prototype = Object.create(Terrain.prototype);
Gate.prototype.constructor = Gate;

Gate.prototype.terrainName = function() {
  return "Gate";
}

Gate.prototype.defenseBonus = function() {
  return 3;
}

Gate.prototype.avoidBonus = function() {
  return 20;
}

Gate.prototype.healBonus = function() {
  return 10;
}

Gate.prototype.moveCost = function(constructorName) {
  return 1;
}

export default Gate;
