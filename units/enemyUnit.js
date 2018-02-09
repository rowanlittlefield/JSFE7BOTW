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

EnemyUnit.prototype.playUnitTurn = function(phaseStage, display) {
  let moveSelection = this.moveSelection();
  let siftedRoute = this.findAnOptimalRoute(moveSelection);
  let movementAnimation = new MovingAnimation(
    this,
    siftedRoute,
    8,
    phaseStage,
    display
  );
  this.movingAnimation = movementAnimation;
  this.moving = true;

  this.move(this.moveSelection());
  this.attackPlayerUnitInRange();
}

EnemyUnit.prototype.waitForAnimationCompletion = function() {

}
