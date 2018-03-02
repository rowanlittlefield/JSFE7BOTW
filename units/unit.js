function Unit(stats, board, inventory, name, mapSprite,
  forwardWalkSprite, backwardWalkSprite, sideWalkSprite, hpWindowSprite,
  combatAnimation) {
  if (!stats) stats = this.defaultStats();
  this.stats = stats;
  this.board = board;
  this.current_hp = this.stats['hp'];
  this.inventory = inventory;
  this.equippedWeapon = inventory.autoEquipWeapon();
  this.name = name;
  this.mapSprite = mapSprite;
  this.forwardWalkSprite = forwardWalkSprite;
  this.backwardWalkSprite = backwardWalkSprite;
  this.sideWalkSprite = sideWalkSprite;
  this.hpWindowSprite = hpWindowSprite;
  this.combatAnimation = combatAnimation;
  this.position = null;
  this.actionTaken = false;
}

Unit.prototype.render = function(row, col, sF) {
  if (this.moving) {
    this.movingAnimation.render(sF);
    this.mapSprite.update();
  } else if (this.inTransit) {
    this.forwardWalkSprite.render(row, col, sF);
    this.mapSprite.update();
  } else {
      this.mapSprite.render(row, col, sF);
    if(this.actionTaken) {
      c.fillStyle = "rgba(128, 128, 128, 0.2)";
      c.fill();
    }
  }
}
