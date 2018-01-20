function Space(position) {
  this.position = position;
  this.unit = null;
  this.terrain = null;
  this.sprite = null;
}

Space.prototype.render = function(row, col, sF) {
  renderSquare(row, col, sF);
  this.renderSpaceSprite(row, col, sF);
  this.renderUnit(row, col, sF);
}

Space.prototype.renderSpaceSprite = function(row, col, sF) {
  if (this.sprite != null) {
    this.sprite.render(row, col, sF);
  } else if (this.terrain != null) {
    this.terrain.render(row, col, sF);
  }
}

Space.prototype.renderUnit = function(row, col, sF) {
  if (this.unit != null && this.unit.moving === true) {
    // debugger;
    this.unit.movingAnimation.render(sF);
  } else if (this.unit != null && this.unit.inTransit === true) {
    this.unit.forwardWalkSprite.render(row * sF +(sF * 0.1),
    col * sF + (sF * 0.01), 0.8 * sF, 1 * sF);
  } else if(this.unit != null) {
    this.unit.mapSprite.render(row * sF +(sF * 0.1),
    col * sF + (sF * 0.01), 0.8 * sF, 1 * sF);

    if(this.unit.actionTaken) {
      c.fillStyle = "rgba(128, 128, 128, 0.2)";
      c.fill();
    }
  }
}
