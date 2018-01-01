function PlayerUnit() {
  this.moveSpaces = null;
  this.attackSpaces = null;
  this.prevPos = null;
  this.windowOptions = null;
  this.fightOptions = null;
}

PlayerUnit.prototype = Object.create(Unit.prototype);
PlayerUnit.prototype.constructor = PlayerUnit;

PlayerUnit.prototype.setMoveForecast = function() {
  this.moveSpaces = this.possibleSpacesCanMoveThrough();
  this.attackSpaces = this.possibleAttackSpaces();
}

PlayerUnit.prototype.nullifyOptions = function() {
  this.moveSpaces = null;
  this.attackSpaces = null;
  this.prevPos = null;
  this.windowOptions = null;
  this.fightOptions = null;
}
