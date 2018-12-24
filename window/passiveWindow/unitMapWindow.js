import PassiveWindow from  './passiveWindow';
import PlayerUnit from '@/unit/player_unit';
import { preScaledHighlight, renderTextWithFont } from '~/util';
import { c } from '../../createContext';

function UnitMapWindow(unit) {
  PassiveWindow.call(this, unit.position[0], unit.position[1], 2, 1.5, 4.76, 1.73);
  this.unit = unit;
  this.name = unit.name;
  this.current_hp = unit.current_hp;
  this.hp = unit.stats['hp'];
  this.color = unit instanceof(PlayerUnit) ? "rgba(0, 255, 255, 0.7)" : "rgba(255, 0, 0, 0.7)";
}

UnitMapWindow.prototype = Object.create(PassiveWindow.prototype);
UnitMapWindow.prototype.constructor = UnitMapWindow;

UnitMapWindow.prototype.render = function(displayWindow) {
  const sF = displayWindow.sF;
  const northY = (displayWindow.y + (displayWindow.height / 2) -  sF * 4.75);
  const southY = (displayWindow.y + (displayWindow.height / 2) +  (sF * 4.75) - this.dy);
  const y = (displayWindow.northOrSouth(this.unit.position) === 'north' && displayWindow.eastOrWest(this.unit.position) === 'east') ? (southY) : (northY);
  let topX = (displayWindow.width / 2) -  (sF * 7.25);
  let topY = (y) - displayWindow.y;

  preScaledHighlight(topX, topY, this.dx, this.dy, this.color);

  this.unit.hpWindowSprite.renderFromCoordinates(
    topX, topY, 2 * sF, 2 * sF
  );

  renderTextWithFont('20px Arial', 'left', 'rgba(0,0,0,1)',
    this.name, topX + (2 * sF), topY + 0.5 *sF);
  c.fillText(`HP: ${this.current_hp} / ${this.hp}`,
    topX + (2 * sF), topY + 1 * sF);

  preScaledHighlight(topX + (2 * sF), (1.2 * sF) + topY, 3.5 * sF,
   0.5 * sF, "rgba(0, 0, 0, 0.9)");

  preScaledHighlight(topX + (2 * sF), topY + (1.3 * sF),
  3.5 * sF *(this.current_hp / this.hp), 0.3 * sF,
   "rgba(255, 223, 0, 1)");
}

export default UnitMapWindow;
