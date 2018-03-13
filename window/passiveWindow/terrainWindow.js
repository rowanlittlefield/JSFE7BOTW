function TerrainWindow(space) {
  PassiveWindow.call(this, space.position[0], space.position[1], 2, 2, 4, 4);
  this.color = "rgba(0, 255, 255, 0.7)";
}

TerrainWindow.prototype = Object.create(PassiveWindow.prototype);
TerrainWindow.prototype.constructor = TerrainWindow;

TerrainWindow.prototype.render = function(sF) {
  preScaledHighlight(this.x, this.y, this.dx, this.dy, this.color);
}
