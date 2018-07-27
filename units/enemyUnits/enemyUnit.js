function EnemyUnit(stats, board, inventory, name, mapSprite,
  forwardWalkSprite,backwardWalkSprite, rightWalkSprite, leftWalkSprite,
   hpWindowSprite, combatAnimation, critAnimation, dodgeAnimation, receiveHitAnimation, behavior) {
  Unit.call(this, stats, board, inventory, name, mapSprite,
    forwardWalkSprite, backwardWalkSprite, rightWalkSprite,
    leftWalkSprite, hpWindowSprite, combatAnimation, critAnimation,
    dodgeAnimation, receiveHitAnimation);
  this.behavior = behavior;
  this.singleMovePathFinder =  new SingleMovePathFinder(board, this);
}

EnemyUnit.prototype = Object.create(Unit.prototype);
EnemyUnit.prototype.constructor = EnemyUnit;

EnemyUnit.prototype.waitForAnimationCompletion = function() {

}
