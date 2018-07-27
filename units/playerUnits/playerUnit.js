function PlayerUnit(stats, board, inventory, name, mapSprite,
forwardWalkSprite, backwardWalkSprite, rightWalkSprite, leftWalkSprite,
 hpWindowSprite, combatAnimation, critAnimation, dodgeAnimation, receiveHitAnimation) {
  Unit.call(this, stats, board, inventory, name, mapSprite,
  forwardWalkSprite, backwardWalkSprite, rightWalkSprite, leftWalkSprite,
   hpWindowSprite, combatAnimation, critAnimation, dodgeAnimation, receiveHitAnimation);
  this.prevPos = null;
  this.windowOptions = null;
  this.fightOptions = null;

  this.singleMovePathFinder =  new SingleMovePathFinder(board, this);
}

PlayerUnit.prototype = Object.create(Unit.prototype);
PlayerUnit.prototype.constructor = PlayerUnit;

PlayerUnit.prototype.setMoveForecast = function() {
  this.inTransit = true;
  this.prevPos = [this.position[0], this.position[1]];

  this.singleMovePathFinder.setupSingleMovePositionSets(this.position)
}

PlayerUnit.prototype.nullifyOptions = function(display) {
  this.prevPos = null;
  this.windowOptions = null;
  this.fightOptions = null;
  this.inTransit = false;

  this.singleMovePathFinder.clearAndUpdate(this.position);
}

PlayerUnit.prototype.renderMoveSpaces = function(sF, x, y, width, height) {
  this.singleMovePathFinder.renderSingleMovePositionSets(sF, x, y, width, height);
}
