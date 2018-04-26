function CombatAnimation(combat, phaseStage) {
  this.combat = combat;
  this.combatQueueIndex = combat.queue.length - 1;

  let check = combat.initiator instanceof(PlayerUnit);
  this.playerUnit = check ? combat.initiator : combat.recipient;
  this.enemyUnit = !check ? combat.initiator : combat.recipient;

  this.initiator = combat.initiator;
  this.recipient = combat.recipient;

  this.playerHP = this.playerUnit.current_hp;
  this.enemyHP = this.enemyUnit.current_hp;
  this.playerCombatSprite = this.playerUnit.combatAnimation;
  this.enemyCombatSprite = this.enemyUnit.combatAnimation;
  this.phaseStage = phaseStage;
  this.combatIndex = 0;
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
    this.initialAttack(playerCoordinates, enemyCoordinates);
  }

  if(this.combatIndex === 101 && this.combat.queue.length > 1) {
    this.counterAttack(playerCoordinates, enemyCoordinates);
  } else if(this.combatIndex === 101) {
    this.renderAtEase(playerCoordinates, enemyCoordinates);
  }

  if (this.combatIndex === 102 && this.combat.queue.length > 2) {
    this.repeatAttack(playerCoordinates, enemyCoordinates);
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

CombatAnimation.prototype.initialAttack = function(playerCoordinates, enemyCoordinates) {
  if (this.combat.initiator === this.playerUnit) {
    this.playerAttack(playerCoordinates, enemyCoordinates);
  } else {
    this.enemyAttack(playerCoordinates, enemyCoordinates);
  }
  // this.renderAttack();
  // (aCoordinates, dCoordinates, defenderHP)
}

CombatAnimation.prototype.counterAttack = function(playerCoordinates, enemyCoordinates) {
  if(this.combat.recipient === this.playerUnit) {
    this.playerAttack(playerCoordinates, enemyCoordinates);
  } else {
    this.enemyAttack(playerCoordinates, enemyCoordinates);
  }
}

CombatAnimation.prototype.repeatAttack = function(playerCoordinates, enemyCoordinates) {
  if (this.combat.queue[0].attacker === this.playerUnit) {
    this.playerAttack(playerCoordinates, enemyCoordinates);
  } else {
    this.enemyAttack(playerCoordinates, enemyCoordinates);
  }
}

CombatAnimation.prototype.playerAttack = function(playerCoordinates, enemyCoordinates) {
  this.renderAttack(playerCoordinates, enemyCoordinates, this.enemyHP);
}

CombatAnimation.prototype.enemyAttack = function(playerCoordinates, enemyCoordinates) {
  this.renderAttack(enemyCoordinates, playerCoordinates, this.enemyHP);
}

CombatAnimation.prototype.renderAttack = function(aCoordinates, dCoordinates, defenderHP) {
  this.combat.queue[this.combatQueueIndex].render(aCoordinates, dCoordinates);
  let actAttackerCS = this.combat.queue[this.combatQueueIndex].attackerCS;

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

//backgroudn element rendering

CombatAnimation.prototype.renderBackgroundElements = function(halfWidth) {
  this.renderNameWindows(halfWidth);
  this.renderWeaponWindows(halfWidth);
  this.renderStatWindows(halfWidth);
  this.renderCentralDelineator(halfWidth);
  this.renderWeaponNames(halfWidth);
  this.renderHPWindows(halfWidth);
}

CombatAnimation.prototype.renderNameWindows = function(halfWidth) {
  this.renderNameWindow(halfWidth, 'rgba(0, 0, 142, 1)',
    this.playerUnit.name, 250, 325);

  this.renderNameWindow(halfWidth, 'rgba(255, 0, 0, 1)',
    this.enemyUnit.name, -250 - 150, -325);
}

CombatAnimation.prototype.renderNameWindow = function(halfWidth, color,
  unitName, xDisplacement, nameXCoord) {
  c.fillStyle = color;
  c.fillRect(halfWidth + xDisplacement, 100, 150, 50);
  renderTextWithFont("15px Arial", 'center', 'rgba(255, 255, 255, 1)',
    unitName, halfWidth + nameXCoord, 130);
}

CombatAnimation.prototype.renderStatWindows = function(halfWidth) {
  this.renderStatWindow(halfWidth, 'rgba(0, 0, 142, 1)', 350, this.playerUnit, this.enemyUnit);
  this.renderStatWindow(halfWidth, 'rgba(255, 0, 0, 1)', -350 - 100, this.enemyUnit, this.playerUnit);
}

CombatAnimation.prototype.renderStatWindow = function(halfWidth, color, deltaX, attacker, defender) {
  c.fillStyle = color;
  c.fillRect(halfWidth + deltaX, 450, 100, 50);
  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255, 1)',
    `HIT`, halfWidth + deltaX, 465);
  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255, 1)',
    `DMG`, halfWidth + deltaX, 480);
  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255, 1)',
    `CRT`, halfWidth + deltaX, 495);
  renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 255, 1)',
    `${attacker.accuracy(defender)}`, halfWidth + deltaX + 100, 465);
  renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 255, 1)',
    `${attacker.damage(defender)}`, halfWidth + deltaX + 100, 480);
  renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 255, 1)',
    `${attacker.criticalChance(defender)}`, halfWidth + deltaX + 100, 495);
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
  this.phaseStage.nextStage('select unit');
}

CombatAnimation.prototype.modifyHP = function() {
  if (this.combat.queue[this.combatQueueIndex].defender === this.playerUnit) {
    this.playerHP = this.combat.queue[this.combatQueueIndex].defenderPostAttackHP;
  } else {
    this.enemyHP = this.combat.queue[this.combatQueueIndex].defenderPostAttackHP;
  }
}
