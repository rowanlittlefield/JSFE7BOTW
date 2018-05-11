function Attack(attacker, defender, attackerCurrentHP, defenderInitialHP) {
  this.attacker = attacker;
  this.defender = defender;

  this.attackerCurrentHP = attackerCurrentHP;
  this.defenderInitialHP = defenderInitialHP;
  this.hit = this.rollHit();
  this.isCrit = this.rollCrit();
  this.damage = this.damageDealt();
  this.defenderPostAttackHP = this.postAttackDefHP();

  this.attackerCS = this.isCrit ? this.attacker.critAnimation : this.attacker.combatAnimation;
  this.defenderCS = this.defender.combatAnimation;
  this.dodgeAnimation = this.defender.dodgeAnimation;

  this.playedHitAnimation = false;
  let scaledHalfInnerWidth = (innerWidth / 2) / 52
  let enemyWidth = 70 / 52
  this.playerCoordinates = [scaledHalfInnerWidth + 1.5, 7];
  this.enemyCoordinates = [scaledHalfInnerWidth - 1.5 - enemyWidth, 7];
}

Attack.prototype.rollHit = function() {
  return randomNumberFromOneTo(100) <= this.attacker.accuracy(this.defender);
}

Attack.prototype.rollCrit = function() {
  if (!this.hit) return false;

  return randomNumberFromOneTo(100) <=
  this.attacker.criticalChance(this.defender);
}

Attack.prototype.damageDealt = function() {
  return (this.hit?(this.isCrit?this.critDamage():this.atkDamage()):0);
}

Attack.prototype.postAttackDefHP = function() {
  if (this.defenderInitialHP - this.damage > 0) {
    return this.defenderInitialHP - this.damage;
  } else {
    return 0;
  }
}

//rendering methods

Attack.prototype.renderFrame = function(attackerC, defenderC, sF) {
  if (this.hitAnimationCondition()) {
    this.attackerCS.renderCurrentFrame(attackerC[0], 7, 52);
    this.renderHit();
  } else {
    this.defenderCS.renderStationaryFrame(defenderC[0], 7, 52);
    this.attackerCS.renderFromCoordinates(attackerC[0], 7, 52);
  }
}

Attack.prototype.renderHit = function() {
  this.hit ? this.renderHitAnimation() : this.renderDodge();
}

Attack.prototype.renderDodge = function() {
  this.defender.dodgeAnimation.renderFromCoordinates(this.playerCoordinates[0], 7, 52);

  if (this.dodgeAnimationPlayedCondition()) {
    this.playedHitAnimation = true;
  }
}

Attack.prototype.renderHitAnimation = function() {
  this.hitAnimation.render(52);
  if (this.hitAnimation.tickCount === 0 &&
    this.hitAnimation.frameIndex === 0) {
    this.playedHitAnimation = true;
  }
}

//private methods

Attack.prototype.atkDamage = function() {
  return this.attacker.damage(this.defender);
}

Attack.prototype.critDamage = function() {
  return this.atkDamage() * 3;
}

Attack.prototype.hitAnimationCondition = function() {
  return (
    this.attackerCS.onDamageFrame() && !this.playedHitAnimation
  );
}

Attack.prototype.dodgeAnimationPlayedCondition = function() {
  return this.dodgeAnimation.renderedAnimation();
}