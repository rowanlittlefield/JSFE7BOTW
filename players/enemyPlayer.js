function EnemyPlayer(board, display, phaseStage, frameSource) {
  this.board = board;
  this.display = display;
  this.phaseStage = phaseStage;
  this.frameSource = frameSource;
  this.unitType = EnemyUnit;
  this.opposingUnitType = PlayerUnit;
  this.units = this.listOfOwnUnits();
  this.unitQueue = [];
}

EnemyPlayer.prototype = Object.create(GeneralPlayer.prototype);
EnemyPlayer.prototype.constructor = EnemyPlayer;

EnemyPlayer.prototype.initiatePhase = function() {
  this.phaseStage.nextStage('Enemy Phase');
  this.units = this.listOfOwnUnits();

  for(const unitIndex in this.units) {
    if(this.units[unitIndex].current_hp === 0){
      let units = this.units;
      delete units[unitIndex];
    }
  }
  let listOfUnits = this.units;
  listOfUnits.forEach(function(value, key, map) {
    this.unitQueue.push(key);
  }.bind(this));
}

EnemyPlayer.prototype.phaseFrameUpdate = function() {

  if (this.unitQueue[0].movingAnimation === undefined || this.unitQueue[0].movingAnimation === null) {
    this.moveSelectedUnit();
  } else if (this.unitQueue[0].movingAnimation && this.unitQueue[0].moving) {
  } else if (this.unitQueue[0].moving === false) this.finishUnitTurn();
  if (this.unitQueue.length === 0) this.endPhase();

}

// 'Private' EnemyPlayer methods

EnemyPlayer.prototype.finishUnitTurn = function() {
  let playerUnit = this.unitQueue[0].selectPlayerUnitInRange();

  if (playerUnit) {
    let newCombat = new Combat(this.unitQueue[0], playerUnit);
    this.display.combatAnimation = new CombatAnimation(newCombat, this.phaseStage);
    newCombat.initiateFight();
  }

  this.unitQueue[0].movingAnimation = null;
  this.postUnitActionCheck(this.unitQueue[0]);
  this.unitQueue.shift();
}

EnemyPlayer.prototype.endPhase = function() {
  this.phaseStage.nextStage('select unit');
  this.frameSource.endAIPhase();
}

EnemyPlayer.prototype.moveSelectedUnit = function() {
  let unit = this.unitQueue[0];
  unit.moveSelection();
  let siftedRoute = unit.movementSpace.siftRoute();

  let movementAnimation = new MovingAnimation(
    unit, siftedRoute, 8, this.phaseStage, this);
  unit.movingAnimation = movementAnimation;
  unit.moving = true;

  unit.move(unit.movementSpace.endPos);
}
