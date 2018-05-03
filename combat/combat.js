function Combat(initiator, recipient) {
  this.initiator = initiator;
  this.recipient = recipient;
  this.initiatorInRange = recipient.isInRange(initiator);
  this.queue = this.developCombatSequence();
  this.expAllotment = null;

  let check = this.initiator instanceof(PlayerUnit);
  this.pu = check ? this.initiator : this.recipient;
  this.eu = !check ? this.initiator : this.recipient;
  this.playerCS = this.pu.combatAnimation;
  this.enemyCS = this.eu.combatAnimation;
  this.enemyWidth = this.enemyCS.currentSprite().renderWidth / 52;
  let scaledHalfInnerWidth = (innerWidth / 2) / 52;
  this.scaledHalfInnerWidth = scaledHalfInnerWidth;
  let enemyWidth = this.enemyCS.currentSprite().renderWidth / 52;

  this.playerCoordinates = [scaledHalfInnerWidth + 1.5, 7];
  this.enemyCoordinates = [scaledHalfInnerWidth - 1.5 - enemyWidth, 7];

}

Combat.prototype.developCombatSequence = function() {
  let queue = [];

  queue.unshift(new Attack(this.initiator, this.recipient,
     this.initiator.current_hp, this.recipient.current_hp));

  if (this.attackContinue(queue) && this.initiatorInRange) {
    queue.unshift(new Attack(this.recipient, this.initiator,
    queue[0].defenderPostAttackHP, queue[0].attackerCurrentHP));
  }

  if (this.attackContinue(queue) && this.isRepeatAttack()) {
    if (this.initiator.isRepeatedAttack(this.recipient)) {
      queue.unshift(new Attack(this.initiator, this.recipient,
      queue[0].defenderPostAttackHP, queue[0].attackerCurrentHP));
    } else if(this.initiatorInRange){
      queue.unshift(new Attack(this.recipient, this.initiator,
      queue[0].attackerCurrentHP, queue[0].defenderPostAttackHP));
    }
  }

  return queue;
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

Combat.prototype.render = function(combatQueueIndex, sF) {
  let enemyWidth = this.enemyCS.currentSprite().renderWidth / 52;
  let playerCoordinates = [this.scaledHalfInnerWidth + 1.5, 7];
  let enemyCoordinates = [this.scaledHalfInnerWidth - 1.5 - enemyWidth, 7];

  let aCoordinates = this.queue[combatQueueIndex].attackerIsPlayerUnit ? playerCoordinates : enemyCoordinates;
  let dCoordinates = this.queue[combatQueueIndex].attackerIsPlayerUnit ? enemyCoordinates : playerCoordinates;

  this.queue[combatQueueIndex].render(aCoordinates, dCoordinates);
}

Combat.prototype.renderAtEase = function(scaledHalfInnerWidth) {
  this.playerCS.renderStationaryFrame(this.playerCoordinates[0], 7, 52);
  this.enemyCS.renderStationaryFrame(this.enemyCoordinates[0], 7, 52);
}
