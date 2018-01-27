function Board(dimensions){
  this.dimensions = dimensions;
    new_grid = new Array(dimensions[0]);

    for(var rows = 0; rows < dimensions[0]; rows ++){
      new_grid[rows] = new Array(dimensions[1])
      for(var cols = 0; cols < dimensions[1]; cols ++){
        new_grid[rows][cols] = new Space([rows, cols]);
      }
    }

  this.grid = new_grid;
}

//

Board.prototype.render = function(sF) {
}

Board.prototype.space = function(pos) {
  return this.grid[pos[0]][pos[1]];
}

Board.prototype.placeUnit = function(unit, pos) {
  unit.position = pos;
  this.grid[pos[0]][pos[1]].unit = unit;
}

Board.prototype.inBounds = function(pos) {
  return !(pos[0] < 0 || pos[0] > this.grid.length || pos[1] < 0 || pos[1] > this.grid[0].length);
}

Board.prototype.list_of_units = function(type) {
  let units = new Map();

  for(let idx = 0; idx < this.grid.length; idx++) {
    for(let idx2 = 0; idx2 < this.grid[idx].length; idx2++) {
      if (this.grid[idx][idx2].unit instanceof(type)) {
        units.set(this.grid[idx][idx2].unit, true);
      }
    }
  }

  return units;
}
// NEED UNIT DEATH METHOD

Board.prototype.unitDeath = function(unit) {
  this.grid[unit.position[0]][unit.position[1]].unit = null;
}

Board.prototype.listOfUnits = function(type) {
  let units = new Map();

  this.boardIterator(function(row, col) {
    if (this.grid[row][col].unit instanceof(type)) {
      units.set(this.grid[row][col].unit, true);
    }
  }.bind(this));

  return units;
}

Board.prototype.boardIterator = function(callBack) {
  for(let row = 0; row < this.grid.length; row++){
    for(let col = 0; col < this.grid[row].length; col++){
      callBack(row, col);
    }
  }
}

Board.prototype.space = function(pos) {
  return this.grid[pos[0]][pos[1]];
}
