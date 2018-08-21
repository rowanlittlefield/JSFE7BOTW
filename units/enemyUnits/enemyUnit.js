import Unit from '../unit';
import PathFinder from '../pathFinder/pathFinder';

function EnemyUnit(stats, board, inventory, name, mapSprite,
  forwardWalkSprite,backwardWalkSprite, rightWalkSprite, leftWalkSprite,
  postActionMapSprite, hpWindowSprite, combatAnimation, critAnimation,
  dodgeAnimation, receiveHitAnimation, behavior) {
  Unit.call(this, stats, board, inventory, name, mapSprite,
    forwardWalkSprite, backwardWalkSprite, rightWalkSprite,
    leftWalkSprite, postActionMapSprite, hpWindowSprite,
    combatAnimation, critAnimation, dodgeAnimation, receiveHitAnimation);
  this.behavior = behavior;
  this.pathFinder =  new PathFinder(board, this);
}

EnemyUnit.prototype = Object.create(Unit.prototype);
EnemyUnit.prototype.constructor = EnemyUnit;

EnemyUnit.prototype.waitForAnimationCompletion = function() {

}

export default EnemyUnit;
