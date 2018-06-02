function DisplayWindow(sF, x, y, height, width) {
  this.sF = sF;
  this.x = 5*sF;
  this.y = 0*sF;
  this.height = 15*sF;
  this.width = 10*sF;
}

DisplayWindow.prototype.moveWindow = function(dx, dy) {
  this.x += dx;
  this.y += dy;
}
