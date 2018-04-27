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
  this.combatIndex = 0;

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
  if (this.combatIndex < 100) {
    this.renderAtEase(playerCoordinates, enemyCoordinates);
  }

  if(this.combatIndex === 100) {
    this.renderAttack(playerCoordinates, enemyCoordinates, this.enemyHP);
  }

  if(this.combatIndex === 101 && this.combat.queue.length > 1) {
    this.renderAttack(playerCoordinates, enemyCoordinates, this.enemyHP);
  } else if(this.combatIndex === 101) {
    this.renderAtEase(playerCoordinates, enemyCoordinates);
  }

  if (this.combatIndex === 102 && this.combat.queue.length > 2) {
    this.renderAttack(playerCoordinates, enemyCoordinates, this.enemyHP);
  } else if(this.combatIndex === 102) {
    this.renderAtEase(playerCoordinates, enemyCoordinates);
  }

  if(this.combatIndex >= 103 && this.combatIndex < 150) {
    this.renderAtEase(playerCoordinates, enemyCoordinates);
  }

  if(this.combatIndex >= 150) {
    this.endAnimation();
  }
}

CombatAnimation.prototype.renderAttack = function(playerCoordinates, enemyCoordinates, defenderHP) {
  let aCoordinates = this.currentAttack().attackerIsPlayerUnit ? playerCoordinates : enemyCoordinates;
  let dCoordinates = this.currentAttack().attackerIsPlayerUnit ? enemyCoordinates : playerCoordinates;


  this.currentAttack().render(aCoordinates, dCoordinates);
  let actAttackerCS = this.currentAttack().attackerCS;

  let currentFrame = [actAttackerCS.queueIndex, actAttackerCS.spriteQueue[actAttackerCS.queueIndex].frameIndex];

  if (currentFrame[0] === actAttackerCS.damageFrame[0] &&
    currentFrame[1] === actAttackerCS.damageFrame[1]) {
      this.modifyHP();
  }

  if(actAttackerCS.queueIndex === 0 &&
    actAttackerCS.spriteQueue[0].frameIndex === 0 &&
    actAttackerCS.spriteQueue[0].tickCount === 0) {
      this.combatQueueIndex -= 1;
      this.combatIndex += 1;
    }

}

CombatAnimation.prototype.renderAtEase = function(playerCoordinates, enemyCoordinates) {
  this.playerCombatSprite.renderStationaryFrame(playerCoordinates[0], 7, 52);
  this.enemyCombatSprite.renderStationaryFrame(enemyCoordinates[0], 7, 52);
  this.combatIndex += 1;
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
