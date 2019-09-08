import Attack from './attack';
import NormalDamageAnimation from '@/animation/hit_animation/normal_damage_animation';
import NormalCriticalDamageAnimation from '@/animation/hit_animation/normal_critical_damage_animation';
import RoyCriticalHitAnimation from '@/animation/hit_animation/roy_critical_hit_animation';
import Roy from '@/unit/roy';


function PUAttack(attacker, defender, attackerCurrentHP, defenderInitialHP) {
  Attack.call(
    this, attacker, defender, attackerCurrentHP, defenderInitialHP
  );
  if (this.isCrit) {
    if (attacker instanceof Roy) {
      this.hitAnimation = new RoyCriticalHitAnimation([this.enemyCoordinates[0], this.enemyCoordinates[1]]);
    } else {
      this.hitAnimation = new NormalCriticalDamageAnimation([this.enemyCoordinates[0] + 0.7, this.enemyCoordinates[1]]);
    }
  } else {
      this.hitAnimation = new NormalDamageAnimation([this.enemyCoordinates[0] + 1.7, this.enemyCoordinates[1] + 2.8]);
  }
}

PUAttack.prototype = Object.create(Attack.prototype);
PUAttack.prototype.constructor = PUAttack;

PUAttack.prototype.render = function(enemyCoordinates, sF) {
  this.renderFrame(this.playerCoordinates, enemyCoordinates, sF);
}

export default PUAttack;
