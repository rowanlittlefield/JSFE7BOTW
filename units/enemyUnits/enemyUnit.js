function EnemyUnit(stats, board, inventory, name, mapSprite,
  forwardWalkSprite,backwardWalkSprite, rightWalkSprite, leftWalkSprite,
   hpWindowSprite, combatAnimation, critAnimation, dodgeAnimation, behavior) {
  Unit.call(this, stats, board, inventory, name, mapSprite,
    forwardWalkSprite, backwardWalkSprite, rightWalkSprite,
    leftWalkSprite, hpWindowSprite, combatAnimation, critAnimation, dodgeAnimation);
  this.behavior = behavior;
  this.singleMovePathFinder =  new SingleMovePathFinder(board, this);
}

EnemyUnit.prototype = Object.create(Unit.prototype);
EnemyUnit.prototype.constructor = EnemyUnit;

EnemyUnit.prototype.playUnitTurn = function(phaseStage, display) {
  const moveSelection = this.moveSelection();

  if (equivalentPositions(moveSelection, this.position)) {
    return this.moveSelection();
  } else {
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
}

EnemyUnit.prototype.waitForAnimationCompletion = function() {

}
