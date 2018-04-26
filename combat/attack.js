function Attack(attacker, defender, attackerCurrentHP, defenderInitialHP) {
  this.attacker = attacker;
  this.defender = defender;

  this.attackerIsPlayerUnit = attacker instanceof(PlayerUnit);

  this.attackerCurrentHP = attackerCurrentHP;
  this.defenderInitialHP = defenderInitialHP;
  this.hit = this.rollHit();
  this.isCrit = this.rollCrit();
  this.damage = this.damageDealt();
  this.defenderPostAttackHP = this.postAttackDefHP();
// debugger;
  this.attackerCS = this.isCrit ? this.attacker.critAnimation : this.attacker.combatAnimation;
  this.defenderCS = this.defender.combatAnimation;
}

Attack.prototype.rollHit = function() {
  return randomNumberFromOneTo(100) <= this.attacker.accuracy(this.defender);
}

Attack.prototype.rollCrit = function() {
  if (!this.hit) {
    return false;
  }

  return randomNumberFromOneTo(100) <=
  this.attacker.criticalChance(this.defender);
}

Attack.prototype.damageDealt = function() {
  if (!this.hit) {
    return 0;
  } else {
    let damage = this.attacker.damage(this.defender);
    return this.isCrit ? damage * 3 : damage;
  }
}

Attack.prototype.postAttackDefHP = function() {
  if (this.defenderInitialHP - this.damage > 0) {
    return this.defenderInitialHP - this.damage;
  } else {
    return 0;
  }
}

Attack.prototype.render = function(aCoordinates, dCoordinates, sF) {
  this.defenderCS.renderStationaryFrame(dCoordinates[0], 7, 52);
  this.attackerCS.renderFromCoordinates(aCoordinates[0], 7, 52);
}
