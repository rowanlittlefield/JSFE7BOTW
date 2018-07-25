function PUAttack(attacker, defender, attackerCurrentHP, defenderInitialHP) {
  Attack.call(
    this, attacker, defender, attackerCurrentHP, defenderInitialHP
  );
  if (this.isCrit) {
    this.hitAnimation = new NormalCriticalDamageAnimation([this.enemyCoordinates[0] + 0.7, this.enemyCoordinates[1]]);
  } else {
    this.hitAnimation = new NormalDamageAnimation([this.enemyCoordinates[0] + 1.7, this.enemyCoordinates[1] + 2.8]);
  }
}

PUAttack.prototype = Object.create(Attack.prototype);
PUAttack.prototype.constructor = PUAttack;

PUAttack.prototype.render = function(enemyCoordinates, sF) {
  this.renderFrame(this.playerCoordinates, enemyCoordinates, sF);
}
