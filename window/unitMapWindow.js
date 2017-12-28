function UnitMapWindow(unit) {
  this.unit = unit;
}

UnitMapWindow.prototype.render = function(sF) {
  let windowx = window.innerWidth - (6 * sF);
  let width = (6 * sF);

  this.unit instanceof(PlayerUnit) ? c.fillStyle = "rgba(0, 255, 255, 0.7)": c.fillStyle = "rgba(255, 0, 0, 0.7)";
  c.fillRect(windowx, 0, width, 2 * sF);
  this.unit.hpWindowSprite.render(
    windowx,
    0,
    2 * sF,
    2 * sF
  );
  c.textAlign = 'left';
  c.font = "20px Arial";
  c.fillStyle = 'rgba(0,0,0,1)';
  c.fillText(`${this.unit.name}`, windowx + (2 * sF), 0.5 *sF);
  c.fillText(`HP: ${this.unit.current_hp} / ${this.unit.stats['hp']}`, windowx + (2 * sF), 1 * sF);
  c.fillStyle = "rgba(0, 0, 0, 0.9)";
  c.fillRect(windowx + (2 * sF), 1.2 * sF, 3.5 * sF, 0.5 * sF);
  c.fillStyle = "rgba(255, 223, 0, 1)";
  c.fillRect(windowx + (2 * sF), 1.3 * sF, 3.5 * sF *(this.unit.current_hp / this.unit.stats['hp']), 0.3 * sF);
}
