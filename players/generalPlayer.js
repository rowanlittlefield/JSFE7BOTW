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
    c.clearRect(unit.position[0] * 52, unit.position[1] * 52, 52, 52);
    unit.board.grid[unit.position[0]][unit.position[1]].render(unit.position[0], unit.position[1], 52);
  }
}
