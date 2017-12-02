function Player(board, display) {
  this.board = board;
  this.display = display;
  this.unitType = PlayerUnit;
  this.opposingUnitType = EnemyUnit;
  this.units = this.listOfOwnUnits();
}
