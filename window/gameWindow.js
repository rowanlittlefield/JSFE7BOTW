// parameters
 // rx - reference x
 // ry - reference y
 // hd - horizontal displacement
 // vd - vertical displacement
 // dx - width
 // dy - height


function GameWindow(rx, ry, hd, vd, dx, dy) {
  let sF = 52;
  let attributes = this.setDimensions(rx, ry, hd, vd, dx, dy, sF);
  this.x = attributes[0];
  this.y = attributes[1];
  this.dx = attributes[2]
  this.dy = attributes[3];

}

GameWindow.prototype.setDimensions = function(sF) {
  return [this.unit.position[0], this.unit.position[1]];
}

GameWindow.prototype.render = function(sF) {
}

GameWindow.prototype.identifySpacesCoveredByWindow = function(board, sF) {
  let spaces = [];

  let r0 = Math.floor(this.x / sF);
  let rf = Math.min(Math.ceil((this.x + this.dx) / sF)  , board.grid.length);
  let c0 = Math.floor(this.y / sF);
  let cf = Math.min(Math.ceil((this.y + this.dy) / sF), board.grid[0].length);

  for(let row = r0; row < rf; row++) {
    for(let col = c0; col < cf; col++) {
      spaces.push([row, col]);
    }
  }

  return spaces;
}
