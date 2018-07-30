import Terrain from './terrain';

function Peak(board, position) {
  Terrain.call(this, board, position);
}

Peak.prototype = Object.create(Terrain.prototype);
Peak.prototype.constructor = Peak;

Peak.prototype.terrainName = function() {
  return "Peak";
}

Peak.prototype.defenseBonus = function() {
  return 2;
}

Peak.prototype.avoidBonus = function() {
  return 40;
}

Peak.prototype.healBonus = function() {
  return 0;
}

Peak.prototype.moveCost = function(constructorName) {
  if (constructorName === 'Brigand') {
    return 4;
  } else {
    return 10;
  }
}

export default Peak;
