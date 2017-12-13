GeneralPlayer.prototype.listOfOwnUnits = function() {
  return this.listOfUnits(this.unitType);
}

GeneralPlayer.prototype.listOfUnits = function(type) {
  let units = new Map();

  for(let idx = 0; idx < this.board.grid.length; idx++) {
    for(let idx2 = 0; idx2 < this.board.grid[idx].length; idx2++) {
      if (this.board.grid[idx][idx2][0] instanceof(type)) {
        units.set(this.board.grid[idx][idx2][0], true);
      }
    }
  }

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
