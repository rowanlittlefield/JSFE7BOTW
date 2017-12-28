function UnitPostMovePhaseWindow(unit, windowCursorPos) {
  this.unit = unit;
  this.windowCursorPos = windowCursorPos;
  this.options = unit.postMoveWindowOptions();
}

UnitPostMovePhaseWindow.prototype.render = function(sF) {
  let unitPosition = this.unit.position;
  let windowx = (unitPosition[0] * sF) + (2 * sF);
  let windowy = (unitPosition[1] * sF);

  c.fillStyle = "rgba(65, 105, 225, 1)";
  c.fillRect(windowx, windowy, sF * 2, sF * this.options.length * 0.5 + (sF*0.2));

  for(let i = 0; i < this.options.length; i++) {
    c.font = "20px Arial";
    c.fillStyle = 'rgba(255, 255, 225, 1)';
    c.fillText(`${this.options[i]}`, windowx, windowy + sF * 0.5 + sF * i * 0.5);

    if (this.windowCursorPos === i) {
      c.fillStyle = "rgba(255, 223, 0, 0.5)";
      c.fillRect(windowx, windowy + (sF * 0.1) + (i * sF * 0.5) , sF * 2, sF * 0.5);
    }
  }
}
