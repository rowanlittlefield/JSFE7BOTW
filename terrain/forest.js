function Forest(board, position) {
  Terrain.call(this, board, position);
}

Forest.prototype = Object.create(Terrain.prototype);
Forest.prototype.constructor = Forest;

Forest.prototype.defenseBonus = function() {
  return 1;
}

Forest.prototype.avoidBonus = function() {
  return 20;
}

Forest.prototype.healBonus = function() {
  return 0;
}

Forest.prototype.moveCost = function() {
  return 2;
}
