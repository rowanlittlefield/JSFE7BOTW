function AttackSequence(attacker, defender, attModHP, defModHP) {
  this.attacker = attacker;
  this.defender = defender;
  this.attModHP = attModHP;
  this.initialHP = defModHP;
  this.setUpAttack();
}

AttackSequence.prototype.setUpAttack = function() {
  this.hit = this.rollHit();
  if (this.hit) {
    if (this.hit) this.isCrit = this.rollCrit();
    this.damage = this.isCrit ? this.damageDealt()*3 : this.damageDealt();
    this.newDefHP = this.postAttackDefHP();
  }
}

AttackSequence.prototype.rollHit = function() {
  let bob = this.attacker;
  bob.hitRate()
  // bob.accuracy
  bob.accuracy(this.defender);
  return randomNumberFromOneTo(100) <= this.attacker.accuracy(this.defender);
}

AttackSequence.prototype.rollCrit = function() {
  return randomNumberFromOneTo(100) <=
  this.attacker.criticalChance(this.defender);
}

AttackSequence.prototype.damageDealt = function() {
  return this.attacker.damage(this.defender);
}

AttackSequence.prototype.postAttackDefHP = function() {
  if (this.initialHP - this.damage > 0) {
    return this.initialHP - this.damage;
  } else {
    return 0;
  }
}
