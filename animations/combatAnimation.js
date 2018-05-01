function CombatAnimation(combat, phaseStage) {
  this.combat = combat;
  this.combatQueueIndex = combat.queue.length - 1;

  let check = combat.initiator instanceof(PlayerUnit);
  this.playerUnit = check ? combat.initiator : combat.recipient;
  this.enemyUnit = !check ? combat.initiator : combat.recipient;

  this.playerHP = this.playerUnit.current_hp;
  this.enemyHP = this.enemyUnit.current_hp;
  this.playerCombatSprite = this.playerUnit.combatAnimation;
  this.enemyCombatSprite = this.enemyUnit.combatAnimation;
  this.phaseStage = phaseStage;
  this.nonCombatFrames = 0;

  let halfWidth = innerWidth / 2;

  this.backgroundWindow = new CombatAnimationBackgroundWindow(
    halfWidth, this.playerUnit, this.enemyUnit
  );
}

CombatAnimation.prototype.render = function(sF) {
  let halfWidth = innerWidth / 2;

  this.renderBackgroundElements(halfWidth);

  let scaledHalfInnerWidth = halfWidth / 52
  let enemyWidth = this.enemyCombatSprite.spriteQueue[this.enemyCombatSprite.queueIndex].renderWidth / 52
  let playerCoordinates = [scaledHalfInnerWidth + 1.5, 7];
  let enemyCoordinates = [scaledHalfInnerWidth - 1.5 - enemyWidth, 7];
    // combat rendering
  if (this.nonCombatFrames < 100) {
    this.renderAtEase(playerCoordinates, enemyCoordinates);
  }

  if(this.nonCombatFrames === 100) {
    this.renderCombat(playerCoordinates, enemyCoordinates);
  }

  if(this.nonCombatFrames >= 101 && this.nonCombatFrames < 150) {
    this.renderAtEase(playerCoordinates, enemyCoordinates);
  }

  if(this.nonCombatFrames >= 150) {
    this.endAnimation();
  }
}

CombatAnimation.prototype.renderCombat = function(playerCoordinates, enemyCoordinates) {
  if(this.combatQueueIndex >= 0) {
    this.renderAttack(playerCoordinates, enemyCoordinates);
  } else  {
    this.nonCombatFrames += 1;
  }
}

CombatAnimation.prototype.renderAttack = function(playerCoordinates, enemyCoordinates) {
  let aCoordinates = this.currentAttack().attackerIsPlayerUnit ? playerCoordinates : enemyCoordinates;
  let dCoordinates = this.currentAttack().attackerIsPlayerUnit ? enemyCoordinates : playerCoordinates;

  this.currentAttack().render(aCoordinates, dCoordinates);
  let actAttackerCS = this.currentAttack().attackerCS;

  let currentFrame = [actAttackerCS.queueIndex, actAttackerCS.spriteQueue[actAttackerCS.queueIndex].frameIndex];

  if (currentFrame[0] === actAttackerCS.damageFrame[0] &&
    currentFrame[1] === actAttackerCS.damageFrame[1] &&
    !this.currentAttack().playedHitAnimation) {
      this.renderHitAnimation(currentFrame);
  }

  if(actAttackerCS.queueIndex === 0 &&
    actAttackerCS.spriteQueue[0].frameIndex === 0 &&
    actAttackerCS.spriteQueue[0].tickCount === 0) {
      this.combatQueueIndex -= 1;
    }

}

CombatAnimation.prototype.renderHitAnimation = function(currentFrame) {
  if (this.currentAttack().hitAnimation.tickCount === 0 &&
  this.currentAttack().hitAnimation.frameIndex === 0 &&
    !this.playedHitAnimation) {
    this.modifyHP();
  }
  this.currentAttack().renderHit();
}

CombatAnimation.prototype.renderAtEase = function(playerCoordinates, enemyCoordinates) {
  this.playerCombatSprite.renderStationaryFrame(playerCoordinates[0], 7, 52);
  this.enemyCombatSprite.renderStationaryFrame(enemyCoordinates[0], 7, 52);
  this.nonCombatFrames += 1;
}

//background element rendering

CombatAnimation.prototype.renderBackgroundElements = function(halfWidth) {
  this.backgroundWindow.render();
}

//private methods

CombatAnimation.prototype.endAnimation = function() {
  this.phaseStage.nextStage('select unit');
}

CombatAnimation.prototype.modifyHP = function() {
  if (this.currentAttack().defender === this.playerUnit) {
    this.backgroundWindow.playerHP = this.currentAttack().defenderPostAttackHP;
  } else {
    this.backgroundWindow.enemyHP = this.currentAttack().defenderPostAttackHP;
  }
}

CombatAnimation.prototype.currentAttack = function() {
  return this.combat.queue[this.combatQueueIndex];
}
