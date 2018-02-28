function CombatAnimation(combat) {
  // this.combat = combat;
  // let check = combat.initiator instanceof(PlayerUnit);
  // this.playerUnit = check ? combat.initiator : combat.defender;
  // this.enemyUnit = !check ? combat.initiator : combat.defender;
  this.playerCombatSprite = fightSprite;
  this.enemyCombatSprite = baddieSprite
  this.combatIndex = 0;
}

CombatAnimation.prototype.render = function() {
  if (this.combatIndex < 100) {
    this.playerCombatSprite.renderStationaryFrame(13, 7, 52);
    this.enemyCombatSprite.renderStationaryFrame(9, 7, 52);
    this.combatIndex += 1;
  }

  if(this.combatIndex === 100) {
    this.playerCombatSprite.renderFromCoordinates(13, 7, 52);
    this.enemyCombatSprite.renderStationaryFrame(9, 7, 52);

    if(this.playerCombatSprite.queueIndex === 0 &&
      this.playerCombatSprite.spriteQueue[0].frameIndex === 0 &&
      this.playerCombatSprite.spriteQueue[0].tickCount === 0) {
      this.combatIndex += 1;
    }
  }

  if(this.combatIndex === 101) {
    this.enemyCombatSprite.renderFromCoordinates(9, 7, 52);
    this.playerCombatSprite.renderStationaryFrame(13, 7, 52);

    if(this.enemyCombatSprite.queueIndex === 0 &&
      this.enemyCombatSprite.spriteQueue[0].frameIndex === 0 &&
      this.enemyCombatSprite.spriteQueue[0].tickCount === 0) {
      this.combatIndex += 1;
    }
  }

  if(this.combatIndex === 102) {
    this.playerCombatSprite.renderStationaryFrame(13, 7, 52);
    this.enemyCombatSprite.renderStationaryFrame(9, 7, 52);
  }
}
