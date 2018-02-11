function CombatSequence(initiator, recipient) {
  this.initiator = initiator;
  this.recipient = recipient;
  this.initiatorInRange = recipient.isInRange(initiator);
  this.queue = this.developCombatSequence();
  this.expAllotment = null;
}

CombatSequence.prototype.developCombatSequence = function() {
  let queue = [];

  queue.unshift(new AttackSequence(this.initiator, this.recipient,
     this.initiator.current_hp, this.recipient.current_hp));

  if (this.attackContinue(queue) && this.initiatorInRange) {
    queue.unshift(new AttackSequence(this.recipient, this.initiator,
    queue[0].newDefHP, queue[0].attModHP));
  }

  if (this.attackContinue(queue) && this.isRepeatAttack()) {
    if (this.initiator.isRepeatedAttack(this.recipeint)) {
      queue.unshift(new AttackSequence(this.initiator, this.recipient,
      queue[0].newDefHP, queue[0].attModHP));
    } else if(this.initiatorInRange){
      queue.unshift(new AttackSequence(this.recipient, this.initiator,
      queue[0].attModHP, queue[0].newDefHP));
    }
  }

  return queue;
}

CombatSequence.prototype.attackContinue = function(queue) {
  return queue[0].newDefHP > 0;
}

CombatSequence.prototype.isRepeatAttack = function() {
  this.initiator.isRepeatedAttack(this.recipient) ||
  this.recipient.isRepeatedAttack(this.initiator);
}
