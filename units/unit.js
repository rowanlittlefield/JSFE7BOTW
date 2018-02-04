function Unit(stats, board, inventory, name) {
  this.stats = stats;
  this.board = board;
  this.current_hp = this.stats['hp'];
  this.inventory = inventory;
  this.name = name;
  // this.sprite = sprite;
  this.position = null;
  this.actionTaken = false;
}
