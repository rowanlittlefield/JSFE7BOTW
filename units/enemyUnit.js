function EnemyUnit(stats, board, inventory, name, mapSprite, behavior) {
this.stats = stats;
this.board = board;
this.inventory = inventory;
this.name = name;
this.mapSprite = mapSprite;
this.behavior = behavior;
}

EnemyUnit.prototype = Object.create(Unit.prototype);
EnemyUnit.prototype.constructor = EnemyUnit;

EnemyUnit.prototype.playUnitTurn = function() {
  this.move(this.moveSelection());
  this.attackPlayerUnitInRange();
}
