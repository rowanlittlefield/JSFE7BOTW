function CombatInformationWindow(unit, opponent) {
  this.unit = unit;
  this.opponent = opponent;
}

CombatInformationWindow.prototype.render = function() {
  this.renderUnitName(this.unit, 0, 0);
  this.renderWeaponName(this.unit, 0, 15);
  this.renderStatRow(this.unit.current_hp, this.opponent.current_hp, 'HP', 0, 30);
  this.renderStatRow(this.unit.damage(this.opponent),
  this.unit.damage(this.opponent), 'MT', 0, 45);

  this.renderStatRow(this.unit.accuracy(this.opponent),
  this.opponent.accuracy(this.unit), 'HT', 0, 60);

  this.renderStatRow(this.unit.criticalChance(this.opponent),
this.opponent.criticalChance(this.unit), 'CT', 0, 75);

  this.renderWeaponName(this.opponent, 0, 90);
  this.renderUnitName(this.opponent, 0, 105);
}

CombatInformationWindow.prototype.renderUnitName = function(unit, x, y) {
  c.font = "10px Arial";
  c.fillStyle = 'rgba(255, 255, 225, 1)';
  c.fillText(`${unit.name}`, x, y);
}

CombatInformationWindow.prototype.renderWeaponName = function(unit, x, y) {
  c.font = "10px Arial";
  c.fillStyle = 'rgba(255, 255, 225, 1)';
  c.fillText(`${unit.inventory.stats['name']}`, x, y);
}

CombatInformationWindow.prototype.renderStatRow = function(unitStat, oppStat, statName, x, y) {
  c.font = "10px Arial";
  c.fillStyle = 'rgba(255, 255, 225, 1)';
  c.fillText(`${unitStat} ${statName} ${oppStat}`, x, y);
}
