function CombatAnimation(combat, phaseStage) {
  // debugger;
  this.combat = combat;
  this.combatQueueIndex = combat.queue.length - 1;

  let check = combat.initiator instanceof(PlayerUnit);
  this.playerUnit = check ? combat.initiator : combat.recipient;
  this.enemyUnit = !check ? combat.initiator : combat.recipient;
  this.playerHP = this.playerUnit.current_hp;
  this.enemyHP = this.enemyUnit.current_hp;
  this.playerCombatSprite = fightSprite;
  this.enemyCombatSprite = baddieSprite;
  this.phaseStage = phaseStage;
  this.combatIndex = 0;
}

CombatAnimation.prototype.render = function(sF) {
  let halfWidth = innerWidth / 2;

  this.renderNameWindows(halfWidth);
  this.renderWeaponWindows(halfWidth);
  this.renderStatWindows(halfWidth);
  this.renderCentralDelineator(halfWidth);
  this.renderWeaponNames(halfWidth);
  this.renderHPWindows(halfWidth);

  let scaledHalfInnerWidth = halfWidth / 52
  let enemyWidth = this.enemyCombatSprite.spriteQueue[this.enemyCombatSprite.queueIndex].renderWidth / 52
    // combat rendering
  if (this.combatIndex < 100) {
    this.renderAtEase(scaledHalfInnerWidth, enemyWidth);
  }

  if(this.combatIndex === 100) {
    this.initialAttack(scaledHalfInnerWidth, enemyWidth);
  }

  if(this.combatIndex === 101 && this.combat.queue.length > 1) {
    this.counterAttack(scaledHalfInnerWidth, enemyWidth);
  } else if(this.combatIndex === 101) {
    this.renderAtEase(scaledHalfInnerWidth, enemyWidth);
  }

  if (this.combatIndex === 102 && this.combat.queue.length > 2) {
    this.repeatAttack(scaledHalfInnerWidth, enemyWidth);
  } else if(this.combatIndex === 102) {
    this.renderAtEase(scaledHalfInnerWidth, enemyWidth);
  }

  if(this.combatIndex >= 103 && this.combatIndex < 150) {
    this.renderAtEase(scaledHalfInnerWidth, enemyWidth);
  }

  if(this.combatIndex >= 150) {
    this.endAnimation();
  }
}

CombatAnimation.prototype.initialAttack = function(scaledHalfInnerWidth, enemyWidth) {
  if (this.combat.initiator === this.playerUnit) {
    this.playerAttack(scaledHalfInnerWidth, enemyWidth);
  } else {
    this.enemyAttack(scaledHalfInnerWidth, enemyWidth);
  }
}

CombatAnimation.prototype.counterAttack = function(scaledHalfInnerWidth, enemyWidth) {
  if(this.combat.recipient === this.playerUnit) {
    this.playerAttack(scaledHalfInnerWidth, enemyWidth);
  } else {
    this.enemyAttack(scaledHalfInnerWidth, enemyWidth);
  }
}

CombatAnimation.prototype.repeatAttack = function(scaledHalfInnerWidth, enemyWidth) {
  if (this.combat.queue[0].attacker === this.playerUnit) {
    this.playerAttack(scaledHalfInnerWidth, enemyWidth);
  } else {
    this.enemyAttack(scaledHalfInnerWidth, enemyWidth);
  }
}

CombatAnimation.prototype.playerAttack = function(scaledHalfInnerWidth, enemyWidth) {
  this.enemyCombatSprite.renderStationaryFrame(scaledHalfInnerWidth - 1.5 - enemyWidth, 7, 52);
  this.playerCombatSprite.renderFromCoordinates(scaledHalfInnerWidth + 1.5, 7, 52);

  let currentFrame = [this.playerCombatSprite.queueIndex, this.playerCombatSprite.spriteQueue[this.playerCombatSprite.queueIndex].frameIndex];

  if (currentFrame[0] === this.playerCombatSprite.damageFrame[0] &&
    currentFrame[1] === this.playerCombatSprite.damageFrame[1]) {
      this.enemyHP = this.combat.queue[this.combatQueueIndex].defenderPostAttackHP;
  }

  if(this.playerCombatSprite.queueIndex === 0 &&
    this.playerCombatSprite.spriteQueue[0].frameIndex === 0 &&
    this.playerCombatSprite.spriteQueue[0].tickCount === 0) {
      this.combatQueueIndex -= 1;
      this.combatIndex += 1;
    }
}

CombatAnimation.prototype.enemyAttack = function(scaledHalfInnerWidth, enemyWidth) {
  this.playerCombatSprite.renderStationaryFrame(scaledHalfInnerWidth + 1.5, 7, 52);
  this.enemyCombatSprite.renderFromCoordinates(scaledHalfInnerWidth - 1.5 - enemyWidth, 7, 52);

  let currentFrame = [this.enemyCombatSprite.queueIndex, this.enemyCombatSprite.spriteQueue[this.enemyCombatSprite.queueIndex].frameIndex];
  if (currentFrame[0] === this.enemyCombatSprite.damageFrame[0] &&
    currentFrame[1] === this.enemyCombatSprite.damageFrame[1]) {
      this.playerHP = this.combat.queue[this.combatQueueIndex].defenderPostAttackHP;
  }

  if(this.enemyCombatSprite.queueIndex === 0 &&
    this.enemyCombatSprite.spriteQueue[0].frameIndex === 0 &&
    this.enemyCombatSprite.spriteQueue[0].tickCount === 0) {
      this.combatQueueIndex -= 1;
    this.combatIndex += 1;
  }
}

CombatAnimation.prototype.renderAtEase = function(scaledHalfInnerWidth, enemyWidth) {
  this.playerCombatSprite.renderStationaryFrame(scaledHalfInnerWidth + 1.5, 7, 52);
  this.enemyCombatSprite.renderStationaryFrame(scaledHalfInnerWidth - 1.5 - enemyWidth, 7, 52);
  this.combatIndex += 1;
}

CombatAnimation.prototype.renderNameWindows = function(halfWidth) {
  c.fillStyle = 'rgba(0, 0, 142, 1)';
  c.fillRect(halfWidth + 250, 100, 150, 50);
  renderTextWithFont("15px Arial", 'center', 'rgba(255, 255, 255, 1)',
    `${this.playerUnit.name}`, halfWidth + 325, 130);

  c.fillStyle = 'rgba(255, 0, 0, 1)';
  c.fillRect(halfWidth - 250 - 150, 100, 150, 50);
  renderTextWithFont("15px Arial", 'center', 'rgba(255, 255, 255, 1)',
    `${this.enemyUnit.name}`, halfWidth - 325, 130);
}

CombatAnimation.prototype.renderStatWindows = function(halfWidth) {
  c.fillStyle = 'rgba(0, 0, 142, 1)';
  c.fillRect(halfWidth + 300, 450, 100, 50);
  renderTextWithFont("15px Arial", 'center', 'rgba(255, 255, 255, 1)',
    `HIT        ${this.playerUnit.accuracy(this.enemyUnit)}`, halfWidth + 350, 465);
  renderTextWithFont("15px Arial", 'center', 'rgba(255, 255, 255, 1)',
    `DMG        ${this.playerUnit.damage(this.enemyUnit)}`, halfWidth + 350, 480);
    renderTextWithFont("15px Arial", 'center', 'rgba(255, 255, 255, 1)',
      `CRT        ${this.playerUnit.criticalChance(this.enemyUnit)}`, halfWidth + 350, 495);

  c.fillStyle = 'rgba(255, 0, 0, 1)';
  c.fillRect(halfWidth - 300 - 100, 450, 100, 50);
  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255, 1)',
    `HIT        ${this.enemyUnit.accuracy(this.playerUnit)}`, halfWidth - 300 - 100, 465);
  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255, 1)',
    `DMG        ${this.enemyUnit.damage(this.playerUnit)}`, halfWidth - 300 - 100, 480);
  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255, 1)',
    `CRT        ${this.enemyUnit.criticalChance(this.playerUnit)}`, halfWidth - 300 - 100, 495);
}

CombatAnimation.prototype.renderCentralDelineator = function(halfWidth) {
  c.fillStyle = 'rgba(0, 0, 0, 1)';
  c.fillRect(halfWidth - 1, 460, 2, 130);
}

CombatAnimation.prototype.renderWeaponWindows = function(halfWidth) {
  c.fillStyle = 'rgba(255, 248, 220, 1)';
  c.fillRect(halfWidth + 1, 460, 400 - 1, 130);

  c.fillStyle = 'rgba(255, 248, 220, 1)';
  c.fillRect(halfWidth - 300 - 100, 460, 400 - 1, 130);
}

CombatAnimation.prototype.renderWeaponNames = function(halfWidth) {
  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255 1)',
   `${this.playerUnit.equippedWeapon.stats['name']}`, halfWidth + 50, 475);

   renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 255 1)',
    `${this.enemyUnit.equippedWeapon.stats['name']}`, halfWidth - 50, 475);
}

CombatAnimation.prototype.renderHPWindows = function(halfWidth, playerHP, enemyHP) {
  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255 1)',
   `${this.playerHP}`, halfWidth + 50, 550);

   renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 255 1)',
    `${this.enemyHP}`, halfWidth - 50, 550);
}

CombatAnimation.prototype.endAnimation = function() {
  this.combat.initiateFight()
  this.phaseStage.nextStage('select unit');
}
