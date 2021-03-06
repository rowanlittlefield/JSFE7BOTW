import GeneralPlayer from  '@/player/general_player';
import PlayerUnit from '@/unit/player_unit';
import EnemyUnit from '@/unit/enemy_unit';
import { equivalentPositions } from '~/util';
import MovingAnimation from '@/animation/moving_animation/moving_animation';
import Combat from '@/combat/combat';
import CombatAnimation from '@/animation/combat_animation/combat_animation';

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
  if (this.unitQueue.length > 0) {
    if (this.unitQueue[0].movingAnimation === undefined || this.unitQueue[0].movingAnimation === null) {
      this.moveSelectedUnit();
    } else if (this.unitQueue[0].movingAnimation && this.unitQueue[0].moving) {
    } else if (this.unitQueue[0].moving === false) this.finishUnitTurn();
  }
  if (this.unitQueue.length === 0 && this.display.combatAnimation === null) {
    this.endPhase();
  }

}

// 'Private' EnemyPlayer methods

EnemyPlayer.prototype.finishUnitTurn = function() {
  let playerUnit = this.unitQueue[0].selectPlayerUnitInRange();

  if (playerUnit) {
    let newCombat = new Combat(this.unitQueue[0], playerUnit);
    // this.display.combatAnimation = new CombatAnimation(newCombat, this.phaseStage);
    this.display.setupCombatAnimation(newCombat, this.phaseStage);
    newCombat.initiateFight();
  }

  if (this.unitQueue[0].movingAnimation) {
    this.unitQueue[0].actionTaken = true;
  }

  this.unitQueue[0].movingAnimation = null;
  this.postUnitActionCheck(this.unitQueue[0]);
  this.unitQueue.shift();
}

EnemyPlayer.prototype.endPhase = function() {

  this.units = this.listOfOwnUnits();
  this.resetUnitsAction();

  this.frameSource.endAIPhase();
  this.phaseStage.nextStage('select unit');
}

EnemyPlayer.prototype.moveSelectedUnit = function() {
  const unit = this.unitQueue[0];
  const moveSelection = unit.moveSelection();

  if(equivalentPositions(moveSelection, unit.position)) {
    this.finishUnitTurn();
  } else {
    const route = unit.pathFinder.setupRoute(moveSelection);
    const movementAnimation = new MovingAnimation(
      unit, route, 8, this.phaseStage, this
    );
      unit.movingAnimation = movementAnimation;
      unit.moving = true;
      unit.move(moveSelection);
  }
}

export default EnemyPlayer;
