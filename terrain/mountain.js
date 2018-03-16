function Mountain(board, position) {
  Terrain.call(this, board, position);
}

Mountain.prototype = Object.create(Terrain.prototype);
Mountain.prototype.constructor = Mountain;

Mountain.prototype.terrainName = function() {
  return "Mountain";
}

Mountain.prototype.defenseBonus = function() {
  return 1;
}

Mountain.prototype.avoidBonus = function() {
  return 30;
}

Mountain.prototype.healBonus = function() {
  return 0;
}

Mountain.prototype.moveCost = function(constructorName) {
  if (constructorName === 'Brigand') {
    return 3;
  } else {
    return 4;
  }
}
