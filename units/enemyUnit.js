function EnemyUnit(stats, board, inventory, name, mapSprite,
  forwardWalkSprite,backwardWalkSprite, sideWalkSprite, hpWindowSprite,
  behavior) {
  Unit.call(this, stats, board, inventory, name, mapSprite,
    forwardWalkSprite, backwardWalkSprite, sideWalkSprite,
    hpWindowSprite);
  this.behavior = behavior;
}

EnemyUnit.prototype = Object.create(Unit.prototype);
EnemyUnit.prototype.constructor = EnemyUnit;

EnemyUnit.prototype.playUnitTurn = function() {
  this.move(this.moveSelection());
  this.attackPlayerUnitInRange();
}
