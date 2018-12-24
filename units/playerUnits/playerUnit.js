import Unit from '../unit';
import PathFinder from '@/pathfinding/path_finder';

function PlayerUnit(stats, board, inventory, name, mapSprite,
forwardWalkSprite, backwardWalkSprite, rightWalkSprite, leftWalkSprite,
 postActionMapSprite, hpWindowSprite, combatAnimation, critAnimation,
  dodgeAnimation, receiveHitAnimation) {
  Unit.call(this, stats, board, inventory, name, mapSprite,
  forwardWalkSprite, backwardWalkSprite, rightWalkSprite, leftWalkSprite,
  postActionMapSprite, hpWindowSprite, combatAnimation, critAnimation,
  dodgeAnimation, receiveHitAnimation);
  this.prevPos = null;
  this.windowOptions = null;
  this.fightOptions = null;

  this.pathFinder =  new PathFinder(board, this);
}

PlayerUnit.prototype = Object.create(Unit.prototype);
PlayerUnit.prototype.constructor = PlayerUnit;

PlayerUnit.prototype.setMoveForecast = function() {
  this.inTransit = true;
  this.prevPos = [this.position[0], this.position[1]];

  this.pathFinder.setupSingleMovePositionSets(this.position)
}

PlayerUnit.prototype.nullifyOptions = function(display) {
  this.prevPos = null;
  this.windowOptions = null;
  this.fightOptions = null;
  this.inTransit = false;

  this.pathFinder.clearAndUpdate(this.position);
}

PlayerUnit.prototype.renderMoveSpaces = function(sF, x, y, width, height) {
  this.pathFinder.renderSingleMovePositionSets(sF, x, y, width, height);
}

export default PlayerUnit;
