function CombatAnimation(combat, phaseStage) {
  this.combat = combat;
  this.combatQueueIndex = combat.queue.length - 1;

  this.phaseStage = phaseStage;
  this.nonCombatFrames = 0;

  this.backgroundWindow = new CombatAnimationBackgroundWindow(
    combat.pu, combat.eu
  );
}

CombatAnimation.prototype.render = function(sF) {
  this.renderBackgroundElements();

  if(this.nonCombatFrames === 100) this.renderCombat();

  if ((this.nonCombatFrames < 100) ||
  (this.nonCombatFrames >= 101 && this.nonCombatFrames < 150)) {
    this.renderAtEase();
  }

  if(this.nonCombatFrames >= 150) this.endAnimation();
}

CombatAnimation.prototype.renderCombat = function() {
  if(this.combatQueueIndex >= 0) {
    this.combat.render(this.combatQueueIndex, 52);
    this.renderAttack();
  } else  {
    this.nonCombatFrames += 1;
  }
}

CombatAnimation.prototype.renderAttack = function() {
  let actAttackerCS = this.currentAttack().attackerCS;

  let currentFrame = [actAttackerCS.queueIndex, actAttackerCS.currentSprite().frameIndex];

  if (currentFrame[0] === actAttackerCS.damageFrame[0] &&
    currentFrame[1] === actAttackerCS.damageFrame[1] &&
    !this.currentAttack().playedHitAnimation) {
      if (this.currentAttack().hitAnimation.tickCount === 0 &&
      this.currentAttack().hitAnimation.frameIndex === 0 &&
        !this.playedHitAnimation) {
        this.modifyHP();
      }
  }

  if(actAttackerCS.queueIndex === 0 &&
    actAttackerCS.spriteQueue[0].frameIndex === 0 &&
    actAttackerCS.spriteQueue[0].tickCount === 0) {
      this.combatQueueIndex -= 1;
    }

}

CombatAnimation.prototype.renderAtEase = function() {
  this.combat.renderAtEase();
  this.nonCombatFrames += 1;
}

//background element rendering

CombatAnimation.prototype.renderBackgroundElements = function() {
  this.backgroundWindow.render();
}

//private methods

CombatAnimation.prototype.endAnimation = function() {
  this.phaseStage.nextStage('select unit');
}

CombatAnimation.prototype.modifyHP = function() {
  this.backgroundWindow.modifyHP(this.currentAttack().defender, this.currentAttack().defenderPostAttackHP)
}

CombatAnimation.prototype.currentAttack = function() {
  return this.combat.queue[this.combatQueueIndex];
}
