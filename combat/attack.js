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

  this.attackerCS = this.isCrit ? this.attacker.critAnimation : this.attacker.combatAnimation;
  this.defenderCS = this.defender.combatAnimation;

  this.playedHitAnimation = false;
  let scaledHalfInnerWidth = (innerWidth / 2) / 52
  let enemyWidth = 70 / 52
  let playerCoordinates = [scaledHalfInnerWidth + 1.5, 7];
  let enemyCoordinates = [scaledHalfInnerWidth - 1.5 - enemyWidth, 7];
  this.playerCoordinates = playerCoordinates;
  this.enemyCoordinates = enemyCoordinates;
  let hitCoordinates = this.attackerIsPlayerUnit ? enemyCoordinates : playerCoordinates
  this.hitAnimation = new NormalDamageAnimation([hitCoordinates[0] + 1.7, hitCoordinates[1] + 2.8]);
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
  // this.defenderCS.renderStationaryFrame(dCoordinates[0], 7, 52);
  if (this.attackerCS.queueIndex === this.attackerCS.damageFrame[0] &&
    this.attackerCS.spriteQueue[this.attackerCS.queueIndex].frameIndex === this.attackerCS.damageFrame[1] &&
    !this.playedHitAnimation) {
    this.attackerCS.renderCurrentFrame(aCoordinates[0], 7, 52);
  } else {
    this.defenderCS.renderStationaryFrame(dCoordinates[0], 7, 52);
    this.attackerCS.renderFromCoordinates(aCoordinates[0], 7, 52);
  }
}

Attack.prototype.renderHit = function() {
  if (this.hit) {
    this.renderHitAnimation();
  } else {
    this.renderDodge();
  }
}

Attack.prototype.renderDodge = function() {
  this.defender.dodgeAnimation.renderFromCoordinates(this.playerCoordinates[0], 7, 52);

  if (this.defender.dodgeAnimation.queueIndex === 0 &&
    this.defender.dodgeAnimation.spriteQueue[this.defender.dodgeAnimation.queueIndex].frameIndex === 0 &&
    this.defender.dodgeAnimation.spriteQueue[this.defender.dodgeAnimation.queueIndex].tickCount === 0) {
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
