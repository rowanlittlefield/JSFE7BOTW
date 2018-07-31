import InteractiveWindow from './interactiveWindow';
import { c } from '../../createContext';
import { renderText, distance, highlight } from '../../miscellaneousFunctions/MiscellaneousFunctions';

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
  let pos = this.options[this.cursorPos];
  let coord = this.setDimensions(pos[0], pos[1], 2, 1.5, 150, 135, 52);
  this.x = coord[0];
  this.y = coord[1];
  this.centerX = this.x + (this.dx / 2);
}

CombatInformationWindow.prototype.render = function(displayWindow) {
  const sF = displayWindow.sF;
  let pos = this.options[this.cursorPos];
  const eastX = (displayWindow.x + (displayWindow.width / 2) -  sF * 7.22);
  const westX = (displayWindow.x + (displayWindow.width / 2) +  (sF * 7.22) - this.dx);
  const x = displayWindow.eastOrWest(this.unit.position) === 'east' ? (westX) : (eastX);
  let topX = (x) - displayWindow.x;
  // let topY = (displayWindow.y + (displayWindow.height / 2) - (sF * 5.5));
  let topY = (displayWindow.height / 2) - (sF * 4.75);
  const centerX = topX + (this.dx/2);

  let opponent = this.unit.board.grid[pos[0]][pos[1]].unit;

  c.fillStyle = "rgba(0, 255, 255, 1)";
  c.fillRect(topX, topY, this.dx, 35);
  c.fillRect(topX, topY + 35, 50, 65);

  c.fillStyle = "rgba(204, 204, 0, 1)";
  c.fillRect(topX + 50, topY + 35, 50, 65);

  c.fillStyle = "rgba(255, 0, 0, 1)";
  c.fillRect(topX + 100, topY + 35, 50, 65);
  c.fillRect(topX, topY + 100, this.dx, 35);

  renderText(this.unit.name, 'center', centerX, topY + 15);
  renderText(this.unit.equippedWeapon.stats['name'], 'center', centerX, topY + 30);
  this.renderStatRow(this.unit.current_hp, opponent.current_hp, 'HP', centerX, topY + 50, this.dx);

  if (opponent.equippedWeapon.stats['range'].includes(distance(opponent.position, this.unit.position))) {
    this.renderStatRow(this.unit.damage(opponent),
    opponent.damage(this.unit), 'MT', centerX, topY + 65, this.dx);
    this.renderStatRow(this.unit.accuracy(opponent),
    opponent.accuracy(this.unit), 'HT', centerX, topY + 80, this.dx);
    this.renderStatRow(this.unit.criticalChance(opponent),
    opponent.criticalChance(this.unit), 'CT', centerX, topY + 95, this.dx);

  } else {
    this.renderStatRow(this.unit.damage(opponent),
    '--', 'MT', centerX, topY + 65, this.dx);
    this.renderStatRow(this.unit.accuracy(opponent),
    '--', 'HT', centerX, topY + 80, this.dx);
    this.renderStatRow(this.unit.criticalChance(opponent),
    '--', 'CT', centerX, topY + 95, this.dx);
    renderText(opponent.equippedWeapon.stats['name'], 'center', centerX, topY + 115);
    renderText(opponent.name, 'center', centerX, topY + 130);
  }
  renderText(opponent.equippedWeapon.stats['name'], 'center', centerX, topY + 115);
  renderText(opponent.name, 'center', centerX, topY + 130);

  if (this.unit.isRepeatedAttack(opponent)) {
    renderText('x2', 'right', topX + this.dx, topY + 30);
  }
  if (opponent.isRepeatedAttack(this.unit)) {
    renderText('x2', 'right', topX + this.dx, topY + 115);
  }
  const oppPosGalileo = [opponent.position[0] - displayWindow.x/sF, opponent.position[1] - displayWindow.y/sF]
  highlight(oppPosGalileo, 'rgba(255, 0, 255, 0.2)', sF); //blue
}

CombatInformationWindow.prototype.renderStatRow = function(unitStat, oppStat, statName, centerX, y, width) {
  renderText(`${unitStat}`, 'left', centerX - (width/ 2), y);
  renderText(`${statName}`, 'center', centerX, y);
  renderText(`${oppStat}`, 'right', centerX + (width/ 2), y);
}

export default CombatInformationWindow;
