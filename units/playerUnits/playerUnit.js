function PlayerUnit(stats, board, inventory, name, mapSprite,
forwardWalkSprite, backwardWalkSprite, rightWalkSprite, leftWalkSprite,
 hpWindowSprite, combatAnimation, critAnimation, dodgeAnimation) {
  Unit.call(this, stats, board, inventory, name, mapSprite,
  forwardWalkSprite, backwardWalkSprite, rightWalkSprite, leftWalkSprite,
   hpWindowSprite, combatAnimation, critAnimation, dodgeAnimation);
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


  // this.movementSpace.render(sF, x, y, width, height);

  // for(let i = 0; i < this.routeSpaces.length; i++) {
  //   highlight(this.routeSpaces[i], 'rgba(123, 104, 238, 0.4)', sF);
  // }
}
