function Combat(initiator, recipient) {
  this.initiator = initiator;
  this.recipient = recipient;
  this.initiatorInRange = recipient.isInRange(initiator);
  this.queue = this.developCombatSequence();
  this.expAllotment = null;
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
