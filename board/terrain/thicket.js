import Terrain from './terrain';

function Thicket(board, position) {
  Terrain.call(this, board, position);
}

Thicket.prototype = Object.create(Terrain.prototype);
Thicket.prototype.constructor = Thicket;

Thicket.prototype.terrainName = function() {
  return "Thicket";
}

Thicket.prototype.defenseBonus = function() {
  return "---";
}

Thicket.prototype.avoidBonus = function() {
  return "---";
}

Thicket.prototype.healBonus = function() {
  return 0;
}

Thicket.prototype.moveCost = function() {
  return 20;
}

export default Thicket;
