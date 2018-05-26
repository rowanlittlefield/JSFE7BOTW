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

  this.movementSpace = null;
}

PlayerUnit.prototype = Object.create(Unit.prototype);
PlayerUnit.prototype.constructor = PlayerUnit;

PlayerUnit.prototype.setMoveForecast = function() {
  // this.moveSpaces = this.possibleSpacesCanMoveThrough();
  // this.attackSpaces = this.possibleAttackSpaces();
  this.routeSpaces = [this.position];
  this.inTransit = true;
  this.prevPos = [this.position[0], this.position[1]];

  this.movementSpace = new MovementSpace(this.board, this.position);
  this.movementSpace.setupSpace(this.stats['move']);
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
  this.movementSpace.render(sF);

  // for(let i = 0; i < this.routeSpaces.length; i++) {
  //   highlight(this.routeSpaces[i], 'rgba(123, 104, 238, 0.4)', sF);
  // }
}
