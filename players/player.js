function Player(board, display) {
  this.board = board;
  this.display = display;
  this.unitType = PlayerUnit;
  this.opposingUnitType = EnemyUnit;
  this.units = this.listOfOwnUnits();
}

Player.prototype = Object.create(GeneralPlayer.prototype);
Player.prototype.constructor = Player;

Player.prototype.isPhaseOver = function() {
  phaseOver = true;
  this.units.forEach(function(item, key, map) {
    if(key.actionTaken === false) {
      phaseOver = false;
    }
  });

  return phaseOver;
}
