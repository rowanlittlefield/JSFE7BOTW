function UnitPostMovePhaseWindow(unit) {
  this.unit = unit;
  let options = unit.postMoveWindowOptions();
  InteractiveWindow.call(this, unit.position[0], unit.position[1], 2,
    unit.position[1], 2, (options.length * 0.5) + 0.2, options);
  this.color = "rgba(65, 105, 225, 1)";
}

UnitPostMovePhaseWindow.prototype = Object.create(InteractiveWindow.prototype);
UnitPostMovePhaseWindow.prototype.constructor = UnitPostMovePhaseWindow;

UnitPostMovePhaseWindow.prototype.setDimensions = function(rx, ry, hd, vd, dx, dy, sF) {
  return [(rx + hd) * sF, ry * sF, dx * sF, dy * sF];
}

UnitPostMovePhaseWindow.prototype.render = function(sF, windowCursorPos) {
  preScaledHighlight(this.x, this.y, this.dx, this.dy, this.color);

  for(let i = 0; i < this.options.length; i++) {
    renderTextWithFont("20px Arial", 'left', 'rgba(255, 255, 225, 1)',
    `${this.options[i]}`, this.x, this.y + ((1 + i) * sF * 0.5));

    if (windowCursorPos === i) {
      c.fillStyle = "rgba(255, 223, 0, 0.5)";
      c.fillRect(this.x, this.y + ((0.1) + (i * 0.5)) * sF , this.dx, sF * 0.5);
    }
  }
}
