function EnemyPlayer(board, display, phaseStage) {
  this.board = board;
  this.display = display;
  this.phaseStage = phaseStage;
  this.unitType = EnemyUnit;
  this.opposingUnitType = PlayerUnit;
  this.units = this.listOfOwnUnits();
}

EnemyPlayer.prototype = Object.create(GeneralPlayer.prototype);
EnemyPlayer.prototype.constructor = EnemyPlayer;

EnemyPlayer.prototype.playPhase = function() {
  let listOfUnits = this.units;
  let unitQueue = [];

  listOfUnits.forEach(function(value, key, map) {
    unitQueue.push(key);
  });
  this.display.aiPhase = unitQueue;
  this.display.enemyPlayer = this;
  // let that = this;
  // let start = new Date;
  // listOfUnits.forEach(function(item, key, map) {
  //   key.playUnitTurn(that.phaseStage, that.display);
  //   that.postUnitActionCheck(key);
  //
  //   //make sure to incorporate board unit death and units death in a post
  //   //unit action check
  // });
  // let endPoint = new Date;
  // console.log(endPoint - start);
}
