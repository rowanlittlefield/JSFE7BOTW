function CombatInformationWindow(unit, options) {
  InteractiveWindow.call(this, options[0][0], options[0][1], 2, 1.5, 150, 135, options);
  this.centerX = this.x + (this.dx / 2);
  this.unit = unit;
}

CombatInformationWindow.prototype = Object.create(InteractiveWindow.prototype);
CombatInformationWindow.prototype.constructor = CombatInformationWindow;

CombatInformationWindow.prototype.setDimensions = function(rx, ry, hd, vd, dx, dy, sF) {
  let x = (rx + hd + (dx / sF)) * sF <= window.innerWidth ? (rx + hd) * sF : (rx - hd - (dx/sF)) * sF;
  let y = (ry - vd) * sF >= 0 ? (ry - vd) * sF : (ry + vd) * sF;
  return [x, y, dx, dy];
}

CombatInformationWindow.prototype.updateCoordinates = function(windowCursorPos) {
  this.clearRendering(52);
  let pos = this.options[windowCursorPos];
  let coord = this.setDimensions(pos[0], pos[1], 2, 1.5, 150, 135, 52);
  this.x = coord[0];
  this.y = coord[1];
  this.centerX = this.x + (this.dx / 2);
}

CombatInformationWindow.prototype.render = function(sF, windowCursorPos) {
  let pos = this.options[windowCursorPos];
  let opponent = this.unit.board.grid[pos[0]][pos[1]].unit;

  c.fillStyle = "rgba(0, 255, 255, 1)";
  c.fillRect(this.x, this.y, this.dx, 35);
  c.fillRect(this.x, this.y + 35, 50, 65);

  c.fillStyle = "rgba(204, 204, 0, 1)";
  c.fillRect(this.x + 50, this.y + 35, 50, 65);

  c.fillStyle = "rgba(255, 0, 0, 1)";
  c.fillRect(this.x + 100, this.y + 35, 50, 65);
  c.fillRect(this.x, this.y + 100, this.dx, 35);

  renderText(this.unit.name, 'center', this.centerX, this.y + 15);
  renderText(this.unit.inventory.stats['name'], 'center', this.centerX, this.y + 30);
  this.renderStatRow(this.unit.current_hp, opponent.current_hp, 'HP', this.centerX, this.y + 50, this.dx);

  if (opponent.inventory.stats['range'].includes(distance(opponent.position, this.unit.position))) {
    this.renderStatRow(this.unit.damage(opponent),
    opponent.damage(this.unit), 'MT', this.centerX, this.y + 65, this.dx);
    this.renderStatRow(this.unit.accuracy(opponent),
    opponent.accuracy(this.unit), 'HT', this.centerX, this.y + 80, this.dx);
    this.renderStatRow(this.unit.criticalChance(opponent),
    opponent.criticalChance(this.unit), 'CT', this.centerX, this.y + 95, this.dx);

  } else {
    this.renderStatRow(this.unit.damage(opponent),
    '--', 'MT', this.centerX, this.y + 65, this.dx);
    this.renderStatRow(this.unit.accuracy(opponent),
    '--', 'HT', this.centerX, this.y + 80, this.dx);
    this.renderStatRow(this.unit.criticalChance(opponent),
    '--', 'CT', this.centerX, this.y + 95, this.dx);
    renderText(opponent.inventory.stats['name'], 'center', this.centerX, this.y + 115);
    renderText(opponent.name, 'center', this.centerX, this.y + 130);
  }
  renderText(opponent.inventory.stats['name'], 'center', this.centerX, this.y + 115);
  renderText(opponent.name, 'center', this.centerX, this.y + 130);

  if (this.unit.isRepeatedAttack(opponent)) {
    renderText('x2', 'right', this.x + this.dx, this.y + 30);
  }
  if (opponent.isRepeatedAttack(this.unit)) {
    renderText('x2', 'right', this.x + this.dx, this.y + 115);
  }

  highlight(opponent.position, 'rgba(255, 0, 255, 0.2)', sF); //blue
}

CombatInformationWindow.prototype.renderStatRow = function(unitStat, oppStat, statName, centerX, y, width) {
  renderText(`${unitStat}`, 'left', centerX - (width/ 2), y);
  renderText(`${statName}`, 'center', centerX, y);
  renderText(`${oppStat}`, 'right', centerX + (width/ 2), y);
}
