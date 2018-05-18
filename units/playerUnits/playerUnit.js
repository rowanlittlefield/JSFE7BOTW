function PlayerUnit(stats, board, inventory, name, mapSprite,
forwardWalkSprite, backwardWalkSprite, rightWalkSprite, leftWalkSprite,
 hpWindowSprite, combatAnimation, critAnimation, dodgeAnimation) {
  Unit.call(this, stats, board, inventory, name, mapSprite,
  forwardWalkSprite, backwardWalkSprite, rightWalkSprite, leftWalkSprite,
   hpWindowSprite, combatAnimation, critAnimation, dodgeAnimation);
  this.moveSpaces = null;
  this.attackSpaces = null;
  this.prevPos = null;
  this.windowOptions = null;
  this.fightOptions = null;

  this.moveSpace = null;
}

PlayerUnit.prototype = Object.create(Unit.prototype);
PlayerUnit.prototype.constructor = PlayerUnit;

PlayerUnit.prototype.setMoveForecast = function() {
  // this.moveSpaces = this.possibleSpacesCanMoveThrough();
  // this.attackSpaces = this.possibleAttackSpaces();
  this.routeSpaces = [this.position];
  this.inTransit = true;
  this.prevPos = [this.position[0], this.position[1]];

  this.moveSpace = new MovementSpace(this.board, this.position);
  this.moveSpace.setupSpace(this.stats['move']);
}

PlayerUnit.prototype.nullifyOptions = function(display ) {
  this.moveSpaces = null;
  this.attackSpaces = null;
  this.prevPos = null;
  this.windowOptions = null;
  this.fightOptions = null;
  this.inTransit = false;
}

PlayerUnit.prototype.renderMoveSpaces = function(sF) {
  // highlightSpaces(this.moveSpaces, this.board,
  //    'rgba(0, 0, 255, 0.3)', sF);
  this.moveSpace.render(sF);

  // highlightSpaces(this.attackSpaces, this.board,
  //   'rgba(255, 0, 0, 0.2)', sF);

  for(let i = 0; i < this.routeSpaces.length; i++) {
    highlight(this.routeSpaces[i], 'rgba(123, 104, 238, 0.4)', sF);
  }
}
