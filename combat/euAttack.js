function EUAttack(attacker, defender, attackerCurrentHP, defenderInitialHP) {
  Attack.call(
    this, attacker, defender, attackerCurrentHP, defenderInitialHP
  );

  let scaledHalfInnerWidth = (innerWidth / 2) / 52
  let enemyWidth = 70 / 52
  let hitCoordinates = this.playerCoordinates;
  this.hitAnimation = new NormalDamageAnimation([hitCoordinates[0] + 1.7, hitCoordinates[1] + 2.8]);
}

EUAttack.prototype = Object.create(Attack.prototype);
EUAttack.prototype.constructor = EUAttack;

EUAttack.prototype.render = function(enemyCoordinates, sF) {
  this.renderFrame(enemyCoordinates, this.playerCoordinates, sF);
}
