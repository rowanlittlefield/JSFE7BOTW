function CombatInformationWindow(unit, opponent) {
  this.unit = unit;
  this.opponent = opponent;
}

CombatInformationWindow.prototype.render = function(pos, sF) {
  let x = (pos[0] * sF) + (sF * 2);
  let y = (pos[1] * sF) - (sF * 1.5);
  let width = 150;
  let height = 135;
  let centerX = x + (width / 2);

  //c.fillStyle = 'rgba(0, 0, 0, 1)';
  //c.fillRect(x, y, width, height);

  c.fillStyle = "rgba(0, 255, 255, 1)";
  c.fillRect(x, y, width, 35);
  c.fillRect(x, y + 35, 50, 65);

  c.fillStyle = "rgba(204, 204, 0, 1)";
  c.fillRect(x + 50, y + 35, 50, 65);

  c.fillStyle = "rgba(255, 0, 0, 1)";
  c.fillRect(x + 100, y + 35, 50, 65);
  c.fillRect(x, y + 100, width, 35);

  this.renderText(this.unit.name, 'center', centerX, y + 15);
  this.renderText(this.unit.inventory.stats['name'], 'center', centerX, y + 30);
  this.renderStatRow(this.unit.current_hp, this.opponent.current_hp, 'HP', centerX, y + 50, width);
  this.renderStatRow(this.unit.damage(this.opponent),
  this.opponent.damage(this.unit), 'MT', centerX, y + 65, width);

  this.renderStatRow(this.unit.accuracy(this.opponent),
  this.opponent.accuracy(this.unit), 'HT', centerX, y + 80, width);

  this.renderStatRow(this.unit.criticalChance(this.opponent),
  this.opponent.criticalChance(this.unit), 'CT', centerX, y + 95, width);

  this.renderText(this.opponent.inventory.stats['name'], 'center', centerX, y + 115);
  this.renderText(this.opponent.name, 'center', centerX, y + 130);
}

CombatInformationWindow.prototype.renderStatRow = function(unitStat, oppStat, statName, centerX, y, width) {
  this.renderText(`${unitStat}`, 'left', centerX - (width/ 2), y);
  this.renderText(`${statName}`, 'center', centerX, y);
  this.renderText(`${oppStat}`, 'right', centerX + (width/ 2), y);
}

CombatInformationWindow.prototype.renderText = function(text, alignment, centerX, y) {
  c.font = "15px Arial";
  c.textAlign = alignment;
  c.fillStyle = 'rgba(255, 255, 225, 1)';
  c.fillText(text, centerX, y);
}
