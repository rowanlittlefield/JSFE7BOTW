function DisplayWindow(sF, x, y, width, height) {
  this.sF = sF;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

DisplayWindow.prototype.moveWindow = function(dx, dy) {
  this.x += dx;
  this.y += dy;
}
