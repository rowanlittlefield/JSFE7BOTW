function TerrainWindow(space) {
  let terrain = space.terrain;
  PassiveWindow.call(this, space.position[0], space.position[1], 2, 2, 2, 2);
  this.name = terrain.terrainName();
  this.defenseBonus = terrain.defenseBonus();
  this.avoidBonus = terrain.avoidBonus();
  this.color = "rgba(0, 255, 255, 0.7)";
}

TerrainWindow.prototype = Object.create(PassiveWindow.prototype);
TerrainWindow.prototype.constructor = TerrainWindow;

TerrainWindow.prototype.render = function(sF) {
  preScaledHighlight(this.x, this.y, this.dx, this.dy, this.color);
  renderTextWithFont("20px Arial", 'center', 'rgba(255, 255, 225, 1)',
  this.name, this.x + (this.dx / 2), this.y + (0.5 * sF));
  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 225, 1)',
  'DEF', this.x, this.y + (1 * sF));
  renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 225, 1)',
  this.defenseBonus, this.x + (this.dx), this.y + (1 * sF));
  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 225, 1)',
  'AVO', this.x, this.y + (1.5 * sF));
  renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 225, 1)',
  this.avoidBonus, this.x + (this.dx), this.y + (1.5 * sF));
}
