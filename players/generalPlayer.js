function GeneralPlayer(board, display, unitType, opposingUnitType) {
  this.board = board;
  this.display = display;
  this.unitType = unitType;
  this.opposingUnitType = opposingUnitType;
  this.units = this.listOfOwnUnits();
}

GeneralPlayer.prototype.postUnitActionCheck = function(unit) {
  console.log('post unit action check carried out');
  if (unit.current_hp === 0) {
    for(const unitIndex in this.display.units) {
      let units = this.display.units;
      if (units[unitIndex] === unit) {
        delete units[unitIndex];
      }
    }
  }
}

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

export default GeneralPlayer;
