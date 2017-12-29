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

  //need new render cursor method in board render method

  /*
  if(row === this.cursor.cursorPos[0] &&  col === this.cursor.cursorPos[1]) {
    c.fillStyle = "rgba(255, 255, 0, 0.5)";
    c.fill();
  }
  */
}

Space.prototype.renderSpaceSprite = function(row, col, sF) {
  if (this.sprite != null) {
    this.sprite.render(row, col, sF);
  } else if (this.terrain != null) {
    this.terrain.render(row, col, sF);
  }
}

Space.prototype.renderUnit = function(row, col, sF) {
  if(this.unit != null) {
    this.unit.mapSprite.render(row * sF +(sF * 0.1),
    col * sF + (sF * 0.01), 0.8 * sF, 1 * sF);

    if(this.unit.actionTaken) {
      c.fillStyle = "rgba(128, 128, 128, 0.2)";
      c.fill();
    }
  }
}
