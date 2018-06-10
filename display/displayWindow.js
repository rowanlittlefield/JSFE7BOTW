function DisplayWindow(sF, x, y, width, height) {
  this.sF = sF;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.movementDirection = null;
}

DisplayWindow.prototype.moveWindow = function(dx, dy) {
  this.x += dx;
  this.y += dy;
}

DisplayWindow.prototype.eastOrWest = function(position) {
  const relXCoord = (position[0]*this.sF);// - this.x;

  if (relXCoord < (this.x + (this.width / 2)) ) {
    return 'east';
  } else {
    return 'west';
  }
}

DisplayWindow.prototype.northOrSouth = function(position) {
  const relYCoord = (position[1]*this.sF);// - this.x;

  if (relYCoord < (this.y + (this.height / 2)) ) {
    return 'north';
  } else {
    return 'south';
  }
}

DisplayWindow.prototype.updatePosition = function() {
  if (this.movementDirection) {
    if (this.movementDirection == 'left') {
      this.x -= (0.5*this.sF);
    } else if (this.movementDirection == 'right') {
      this.x += (0.5*this.sF);
    } else if (this.movementDirection == 'up') {
      this.y -= (0.5*this.sF);
    } else if (this.movementDirection == 'down') {
      this.y += (0.5*this.sF);
    }
    // if (this.x % 1 === 0 && this.y % 1 === 0) {
      this.movementDirection = null;
    // }
  }
}
