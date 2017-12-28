function Board(dimensions){
  this.dimensions = dimensions;
    new_grid = new Array(dimensions[0]);

    for(var rows = 0; rows < dimensions[0]; rows ++){
      new_grid[rows] = new Array(dimensions[1])
      for(var cols = 0; cols < dimensions[1]; cols ++){
        new_grid[rows][cols] = new Array(2);
        new_grid[rows][cols][0] = null;
        new_grid[rows][cols][1] = null;
      }
    }

  this.grid = new_grid;
}

//

Board.prototype.placeUnit = function(unit, pos) {
  unit.position = pos;
  this.grid[pos[0]][pos[1]][0] = unit;
}

Board.prototype.inBounds = function(pos) {
  return !(pos[0] < 0 || pos[0] > this.grid.length || pos[1] < 0 || pos[1] > this.grid[0].length);
}

function distance(pos1, pos2) {
  let dr = Math.abs(pos1[0] - pos2[0]);
  let dc = Math.abs(pos1[1] - pos2[1]);
  return (dr + dc);
}

Board.prototype.list_of_units = function(type) {
  /*
  let units = {};

  for(let i = 0; i < this.grid.length; i++) {
    for(let j = 0; j < this.grid[i].length; j++) {
      let condition = this.grid[i][j][0] instanceof(type);
      if(this.grid[i][j][0] instanceof(type)) {
        units[this.grid[i][j][0]] = true;
      }
    }
  }
debugger;
  return units;
  */
  let units = new Map();

  for(let idx = 0; idx < this.grid.length; idx++) {
    for(let idx2 = 0; idx2 < this.grid[idx].length; idx2++) {
      if (this.grid[idx][idx2][0] instanceof(type)) {
        units.set(this.grid[idx][idx2][0], true);
      }
    }
  }

  return units;
}
// NEED UNIT DEATH METHOD

Board.prototype.unitDeath = function(unit) {
  this.grid[unit.position[0]][unit.position[1]][0] = null; 
}

Board.prototype.listOfUnits = function(type) {
  let units = new Map();

  this.boardIterator(function(row, col) {
    if (this.grid[row][col][0] instanceof(type)) {
      units.set(this.grid[row][col][0], true);
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
