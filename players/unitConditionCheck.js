GeneralPlayer.prototype.listOfOwnUnits = function() {
  return this.listOfUnits(this.unitType);
}

GeneralPlayer.prototype.listOfUnits = function(type) {
  let units = new Map();

  this.board.boardIterator(function(row, col) {
    if (this.board.grid[row][col].unit instanceof(type)) {
      units.set(this.board.grid[row][col].unit, true);
    }
  }.bind(this));
  return units;
}

GeneralPlayer.prototype.resetUnitsAction = function() {

  this.units.forEach(function(item, key, map) {
    key.actionTaken = false;
  });

}

GeneralPlayer.prototype.unitDeath = function() {
  this.units.forEach(function(item, key, map) {
    if(key.current_hp === 0) {
      key.position = null;
      map.delete(key);
    }
  });
}

GeneralPlayer.prototype.everyUnitMoved = function() {
  let everyActionTaken = true;
  this.units.forEach(function(item, key, map) {
    if(key.actionTaken === false) {
      everyActionTaken = false;
    }
  });

  return everyActionTaken;
}
