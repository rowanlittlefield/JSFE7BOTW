function UnitMapWindow(unit) {
  // debugger;
  PassiveWindow.call(this, unit.position[0], unit.position[1], 2, 1.5, 6, 2);
  this.unit = unit;
  this.name = unit.name;
  this.current_hp = unit.current_hp;
  this.hp = unit.stats['hp'];
  this.color = unit instanceof(PlayerUnit) ? "rgba(0, 255, 255, 0.7)" : "rgba(255, 0, 0, 0.7)";
}

UnitMapWindow.prototype = Object.create(PassiveWindow.prototype);
UnitMapWindow.prototype.constructor = UnitMapWindow;

UnitMapWindow.prototype.render = function(sF) {
  preScaledHighlight(this.x, this.y, this.dx, this.dy, this.color);

  this.unit.hpWindowSprite.renderFromCoordinates(
    this.x, this.y, 2 * sF, 2 * sF
  );

  renderTextWithFont('20px Arial', 'left', 'rgba(0,0,0,1)',
    this.name, this.x + (2 * sF), this.y + 0.5 *sF);
  c.fillText(`HP: ${this.current_hp} / ${this.hp}`,
    this.x + (2 * sF), this.y + 1 * sF);

  preScaledHighlight(this.x + (2 * sF), (1.2 * sF) + this.y, 3.5 * sF,
   0.5 * sF, "rgba(0, 0, 0, 0.9)");

  preScaledHighlight(this.x + (2 * sF), this.y + (1.3 * sF),
  3.5 * sF *(this.current_hp / this.hp), 0.3 * sF,
   "rgba(255, 223, 0, 1)");
}
