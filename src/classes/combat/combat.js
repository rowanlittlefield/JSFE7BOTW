import PlayerUnit from '@/unit/player_unit';
import PUAttack from '@/attack/pu_attack';
import EUAttack from '@/attack/eu_attack';

export default function Combat(initiator, recipient) {
  this.initiator = initiator;
  this.recipient = recipient;
  this.initiatorInRange = recipient.isInRange(initiator);
  this.queue = this.developCombatSequence();
  this.expAllotment = null;

  let check = this.initiator instanceof(PlayerUnit);
  this.pu = check ? this.initiator : this.recipient;
  this.eu = !check ? this.initiator : this.recipient;
  this.playerCS = this.pu.combatAnimation;
  this.playerCS = (check ? this.initiator : this.recipient).combatAnimation
  this.enemyCS = this.eu.combatAnimation;
  // this.enemyWidth = this.enemyCS.currentSprite().renderWidth / 52;
  // this.scaledHalfInnerWidth = (innerWidth / 2) / 52;
  // let enemyWidth = this.enemyCS.currentSprite().renderWidth / 52;
  //
  // this.playerCoordinates = [this.scaledHalfInnerWidth + 1.5, 7];
  // this.enemyCoordinates = [this.scaledHalfInnerWidth - 1.5 - enemyWidth, 7];
  let sF = 45;

  this.enemyWidth = this.enemyCS.currentSprite().renderWidth / 45;

  let x = 5*sF;
  let y = 0*sF;
  let height = 15*sF;
  let width = 10*sF;


  this.scaledHalfInnerWidth = ((x + width) / 2) / sF;
  let enemyWidth = this.enemyCS.currentSprite().renderWidth / sF;

  this.playerCoordinates = [this.scaledHalfInnerWidth + 1.5, 7];
  this.enemyCoordinates = [this.scaledHalfInnerWidth - 1.5 - enemyWidth, 7];

}

Combat.prototype.playerUnit = function() {
  this.initiator instanceof(PlayerUnit) ? this.initiator : this.recipient;
}

Combat.prototype.developCombatSequence = function() {
  let queue = [];

  queue.unshift(this.developAttack(this.initiator, this.recipient,
     this.initiator.current_hp, this.recipient.current_hp));

  if (this.attackContinue(queue) && this.initiatorInRange) {
    queue.unshift(this.developAttack(this.recipient, this.initiator,
    queue[0].defenderPostAttackHP, queue[0].attackerCurrentHP));
  }

  if (this.attackContinue(queue) && this.isRepeatAttack()) {
    if (this.initiator.isRepeatedAttack(this.recipient)) {
      queue.unshift(this.developAttack(this.initiator, this.recipient,
      queue[0].defenderPostAttackHP, queue[0].attackerCurrentHP));
    } else if(this.initiatorInRange){
      queue.unshift(this.developAttack(this.recipient, this.initiator,
      queue[0].attackerCurrentHP, queue[0].defenderPostAttackHP));
    }
  }

  return queue;
}

Combat.prototype.developAttack = function(attacker, defender, attackerHP, defenderHP) {
  if (attacker instanceof(PlayerUnit)) {
    return new PUAttack(attacker, defender, attackerHP, defenderHP);
  } else {
    return new EUAttack(attacker, defender, attackerHP, defenderHP);
  }
}

Combat.prototype.attackContinue = function(queue) {
  return queue[0].defenderPostAttackHP > 0;
}

Combat.prototype.isRepeatAttack = function() {
  return this.initiator.isRepeatedAttack(this.recipient) ||
  this.recipient.isRepeatedAttack(this.initiator);
}

Combat.prototype.unitDeath = function() {
  if (this.initiator.current_hp === 0) {
    this.initiator.board.unitDeath(this.initiator);
  }
  if(this.recipient.current_hp === 0) {
    this.recipient.board.unitDeath(this.recipient);
  }
}

Combat.prototype.setFinalHP = function() {
  this.queue[0].attacker.current_hp = this.queue[0].attackerCurrentHP;
  this.queue[0].defender.current_hp = this.queue[0].defenderPostAttackHP;
}

Combat.prototype.initiateFight = function() {
  this.setFinalHP();
  this.unitDeath();
}

//render methods

Combat.prototype.render = function(combatQueueIndex, sF) {
  let enemyWidth = this.enemyCS.currentSprite().renderWidth / 45;
  let enemyCoordinates = [this.scaledHalfInnerWidth - 1.5 - enemyWidth, 7];
  this.queue[combatQueueIndex].render(enemyCoordinates, sF);
}

Combat.prototype.renderAtEase = function(scaledHalfInnerWidth) {
  this.playerCS.renderStationaryFrame(this.playerCoordinates[0], 6, 45);
  this.enemyCS.renderStationaryFrame(this.enemyCoordinates[0], 6, 45);
}

// export default Combat;
