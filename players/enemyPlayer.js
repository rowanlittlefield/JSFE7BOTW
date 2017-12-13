function EnemyPlayer(board, display) {
  this.board = board;
  this.display = display;
  this.unitType = EnemyUnit;
  this.opposingUnitType = PlayerUnit;
  this.units = this.listOfOwnUnits();
}

EnemyPlayer.prototype = Object.create(GeneralPlayer.prototype);
EnemyPlayer.prototype.constructor = EnemyPlayer;

EnemyPlayer.prototype.playPhase = function() {
  listOfUnits = this.units;
  let that = this;

  listOfUnits.forEach(function(item, key, map) {
    key.playUnitTurn();
    that.postUnitActionCheck(key);

    //make sure to incorporate board unit death and units death in a post
    //unit action check
  });
}
