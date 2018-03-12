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
