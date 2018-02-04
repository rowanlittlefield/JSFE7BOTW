function GameWindow(unit) {
  this.unit = unit;
  let position = this.setCoordinates();
  this.x = position[0];
  this.y = position[1];
}

GameWindow.prototype.setCoordinates = function() {
  return [this.unit.position[0], this.unit.position[1]];
}

GameWindow.prototype.render = function(sF) {

}
