// parameters
 // rx - reference x
 // ry - reference y
 // hd - horizontal displacement
 // vd - vertical displacement
 // dx - width
 // dy - height


function GameWindow(rx, ry, hd, vd, dx, dy) {
  let sF = 52;
  let attributes = this.setDimensions(rx, ry, hd, vd, dx, dy, sF);
  this.x = attributes[0];
  this.y = attributes[1];
  this.dx = attributes[2]
  this.dy = attributes[3];

}

GameWindow.prototype.setDimensions = function(sF) {
  return [this.unit.position[0], this.unit.position[1]];
}

GameWindow.prototype.render = function(sF) {

}
