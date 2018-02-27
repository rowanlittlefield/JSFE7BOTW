function Unit(stats, board, inventory, name, mapSprite,
  forwardWalkSprite, backwardWalkSprite, sideWalkSprite, hpWindowSprite) {
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
  this.position = null;
  this.actionTaken = false;
}
