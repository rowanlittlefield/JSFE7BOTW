import CombatAnimationBackgroundWindow from '@/game_window/combat_animation_background_window';
import BattlePlatformSprite from './battlePlatformSprite';

function CombatAnimation(combat, phaseStage, battlePlatformSprite) {
  this.combat = combat;
  this.combatQueueIndex = combat.queue.length - 1;

  this.phaseStage = phaseStage;
  this.nonCombatFrames = 0;

  this.backgroundWindow = new CombatAnimationBackgroundWindow(
    combat.pu, combat.eu
  );

  // this.battlePlatformSprite = new BattlePlatformSprite();
  this.battlePlatformSprite = battlePlatformSprite
}

CombatAnimation.prototype.render = function() {
  this.battlePlatformSprite.render(7.3, 8.4, 45);
  if(this.nonCombatFrames === 100) this.renderCombat();
  if ((this.nonCombatFrames < 100) ||
  (this.nonCombatFrames >= 101 && this.nonCombatFrames < 150)) {
    this.renderAtEase();
  }
  this.renderBackgroundElements();
  if(this.nonCombatFrames >= 150) this.endAnimation();
}

CombatAnimation.prototype.renderCombat = function() {
  if(this.combatQueueIndex >= 0) {
    this.combat.render(this.combatQueueIndex, 52);
    if (this.modifyHPCondition()) this.modifyHP();
    this.updateQueueIndex();
  } else  {
    this.nonCombatFrames += 1;
  }
}

CombatAnimation.prototype.modifyHPCondition = function() {
  let actAttackerCS = this.currentAttack().attackerCS;
  let currentFrame = [actAttackerCS.queueIndex, actAttackerCS.currentSprite().frameIndex];
  let hitAnimation = this.currentAttack().hitAnimation;
  return (currentFrame[0] === actAttackerCS.damageFrame[0] &&
    currentFrame[1] === actAttackerCS.damageFrame[1] &&
    !this.currentAttack().playedHitAnimation && hitAnimation.tickCount === 0 &&
    hitAnimation.frameIndex === 0);
}

CombatAnimation.prototype.updateQueueIndex = function() {
  let aCS = this.currentAttack().attackerCS;
  if(aCS.queueIndex === 0 && aCS.spriteQueue[0].frameIndex === 0 &&
    aCS.spriteQueue[0].tickCount === 0) {
      this.combatQueueIndex -= 1;
    }
}

CombatAnimation.prototype.renderAtEase = function() {
  this.combat.renderAtEase();
  this.nonCombatFrames += 1;
}

CombatAnimation.prototype.renderBackgroundElements = function() {
  this.backgroundWindow.render();
}

//private methods

CombatAnimation.prototype.endAnimation = function() {
  if(this.phaseStage.stage != "Enemy Phase") {
    this.phaseStage.nextStage('select unit');
  }
}

CombatAnimation.prototype.modifyHP = function() {
  this.backgroundWindow.modifyHP(this.currentAttack().defender, this.currentAttack().defenderPostAttackHP)
}

CombatAnimation.prototype.currentAttack = function() {
  return this.combat.queue[this.combatQueueIndex];
}

export default CombatAnimation;
