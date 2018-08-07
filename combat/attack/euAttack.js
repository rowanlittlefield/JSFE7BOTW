import Attack from './attack';
import NormalDamageAnimation from '../../animations/hitAnimations/normalDamageAnimation';

function EUAttack(attacker, defender, attackerCurrentHP, defenderInitialHP) {
  Attack.call(
    this, attacker, defender, attackerCurrentHP, defenderInitialHP
  );

  this.hitAnimation = new NormalDamageAnimation([this.playerCoordinates[0] + 1.7, this.playerCoordinates[1] + 2.8]);
}

EUAttack.prototype = Object.create(Attack.prototype);
EUAttack.prototype.constructor = EUAttack;

EUAttack.prototype.render = function(enemyCoordinates, sF) {
  this.renderFrame(enemyCoordinates, this.playerCoordinates, sF);
}

export default EUAttack;
