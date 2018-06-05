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

DisplayWindow.prototype.eastOrWest = function(position) {
  const relXCoord = (position[0]*this.sF) - this.x;

  if (relXCoord > (this.x + (this.width / 2)) ) {
    return 'east';
  } else {
    return 'west';
  }
}
