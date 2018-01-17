function CombatInformationWindow(unit, options) {
  this.unit = unit;
  this.options = options;
}

CombatInformationWindow.prototype.render = function(sF, windowCursorPos) {
  let pos = this.options[windowCursorPos];
  let opponent = this.unit.board.grid[pos[0]][pos[1]].unit;
  let x = (pos[0] * sF) + (sF * 2);
  let y = (pos[1] * sF) - (sF * 1.5);
  let width = 150;
  let height = 135;
  let centerX = x + (width / 2);

if ((pos[0] * sF) + (sF * 2) + width <= window.innerWidth) {
  x = (pos[0] * sF) + (sF * 2);
} else {
  x = (pos[0] * sF) - (sF * 2) - (width);
}

if ((pos[1] * sF) - (sF * 1.5) >= 0) {
  y = (pos[1] * sF) - (sF * 1.5);
} else {
  y = (pos[1] * sF) + (sF * 1.5);
}

  c.fillStyle = "rgba(0, 255, 255, 1)";
  c.fillRect(x, y, width, 35);
  c.fillRect(x, y + 35, 50, 65);

  c.fillStyle = "rgba(204, 204, 0, 1)";
  c.fillRect(x + 50, y + 35, 50, 65);

  c.fillStyle = "rgba(255, 0, 0, 1)";
  c.fillRect(x + 100, y + 35, 50, 65);
  c.fillRect(x, y + 100, width, 35);

  renderText(this.unit.name, 'center', centerX, y + 15);
  renderText(this.unit.inventory.stats['name'], 'center', centerX, y + 30);
  this.renderStatRow(this.unit.current_hp, opponent.current_hp, 'HP', centerX, y + 50, width);

  if (opponent.inventory.stats['range'].includes(distance(opponent.position, this.unit.position))) {
    this.renderStatRow(this.unit.damage(opponent),
    opponent.damage(this.unit), 'MT', centerX, y + 65, width);
    this.renderStatRow(this.unit.accuracy(opponent),
    opponent.accuracy(this.unit), 'HT', centerX, y + 80, width);
    this.renderStatRow(this.unit.criticalChance(opponent),
    opponent.criticalChance(this.unit), 'CT', centerX, y + 95, width);

  } else {
    this.renderStatRow(this.unit.damage(opponent),
    '--', 'MT', centerX, y + 65, width);
    this.renderStatRow(this.unit.accuracy(opponent),
    '--', 'HT', centerX, y + 80, width);
    this.renderStatRow(this.unit.criticalChance(opponent),
    '--', 'CT', centerX, y + 95, width);
    renderText(opponent.inventory.stats['name'], 'center', centerX, y + 115);
    renderText(opponent.name, 'center', centerX, y + 130);
  }
  renderText(opponent.inventory.stats['name'], 'center', centerX, y + 115);
  renderText(opponent.name, 'center', centerX, y + 130);

  if (this.unit.isRepeatedAttack(opponent)) {
    renderText('x2', 'right', x + width, y + 30);
  }
  if (opponent.isRepeatedAttack(this.unit)) {
    renderText('x2', 'right', x + width, y + 115);
  }
}

CombatInformationWindow.prototype.renderStatRow = function(unitStat, oppStat, statName, centerX, y, width) {
  renderText(`${unitStat}`, 'left', centerX - (width/ 2), y);
  renderText(`${statName}`, 'center', centerX, y);
  renderText(`${oppStat}`, 'right', centerX + (width/ 2), y);
}

CombatInformationWindow.prototype.setWindowCoordinates = function(x, y, width, height, pos, sF) {
  if ((pos[0] * sF) + (sF * 2) + width <= window.innerWidth) {
    x = (pos[0] * sF) + (sF * 2);
  } else {
    x = (pos[0] * sF) - (sF * 2) - (width);
  }

  if ((pos[1] * sF) - (sF * 1.5) >= 0) {
    y = (pos[1] * sF) - (sF * 1.5);
  } else {
    y = (pos[1] * sF) + (sF * 1.5);
  }
}
