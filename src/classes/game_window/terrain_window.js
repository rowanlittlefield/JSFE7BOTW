import PassiveWindow from '@/game_window/passive_window';
import { preScaledHighlight, renderTextWithFont } from '~/util';

function TerrainWindow(space) {
  let terrain = space.terrain;
  PassiveWindow.call(this, space.position[0], space.position[1], 2, 2, 2, 1.4);
  this.name = terrain.terrainName();
  this.position = space.position;
  this.defenseBonus = terrain.defenseBonus();
  this.avoidBonus = terrain.avoidBonus();
  this.color = "rgba(0, 255, 255, 0.7)";
}

TerrainWindow.prototype = Object.create(PassiveWindow.prototype);
TerrainWindow.prototype.constructor = TerrainWindow;

TerrainWindow.prototype.render = function(displayWindow) {
  const sF = displayWindow.sF;
  const eastX = ((displayWindow.width / 2) -  sF * 7);
  const westX = ((displayWindow.width / 2) +  (sF * 7) - this.dx);
  const topX = displayWindow.eastOrWest(this.position) === 'east' ? (westX) : (eastX);
  const topY = (displayWindow.height / 2) + (sF * 3);


  preScaledHighlight(topX, topY, this.dx, this.dy, this.color);
  renderTextWithFont("20px Arial", 'center', 'rgba(255, 255, 225, 1)',
  this.name, topX + (this.dx / 2), topY + (0.5 * sF));
  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 225, 1)',
  'DEF', topX, topY + (1 * sF));
  renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 225, 1)',
  this.defenseBonus, topX + (this.dx), topY + (1 * sF));
  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 225, 1)',
  'AVO', topX, topY + (1.5 * sF));
  renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 225, 1)',
  this.avoidBonus, topX + (this.dx), topY + (1.5 * sF));
}

export default TerrainWindow;
