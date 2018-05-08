function PUAttack(attacker, defender, attackerCurrentHP, defenderInitialHP) {
  Attack.call(
    this, attacker, defender, attackerCurrentHP, defenderInitialHP
  );

  let scaledHalfInnerWidth = (innerWidth / 2) / 52
  let enemyWidth = 70 / 52
  let hitCoordinates = this.enemyCoordinates
  this.hitAnimation = new NormalDamageAnimation([hitCoordinates[0] + 1.7, hitCoordinates[1] + 2.8]);
}

PUAttack.prototype = Object.create(Attack.prototype);
PUAttack.prototype.constructor = PUAttack;

PUAttack.prototype.render = function(enemyCoordinates, sF) {
  this.renderFrame(this.playerCoordinates, enemyCoordinates, sF);
}
