function Cursor(board) {
  this.board = board;
  this.cursorPos = [0, 0];
  this.windowCursorPos = 0;
  this.selectedUnit = null;
  this.prevPos = null;
}
//NECESSARY METHODS

Cursor.prototype.moveCursorPosition = function(button) {
  this.manipulateCursor(button, "left", this.cursorPos[0] > 0, 0, -1);
  this.manipulateCursor(button, "right", this.cursorPos[0] < this.board.dimensions[0] - 1, 0, 1);
  this.manipulateCursor(button, "up", this.cursorPos[1] > 0, 1, -1);
  this.manipulateCursor(button, "down", this.cursorPos[1] < this.board.dimensions[1] - 1, 1, 1);
  if(this.prevPos) this.clearRenderingOfPrevPos(52);
}

Cursor.prototype.manipulateCursor = function(button, direction, constraint, index, alteration) {
  if (button == direction && constraint) {
    this.prevPos = [this.cursorPos[0], this.cursorPos[1]];
    this.cursorPos[index] = this.cursorPos[index] + alteration;
  }
}
Cursor.prototype.scrollWindowCursor = function(button, windowLength) {
  if (button == "down" && this.windowCursorPos < windowLength - 1) {
    this.windowCursorPos += 1;
  } else if(button == "up" && this.windowCursorPos > 0) {
    this.windowCursorPos -= 1;
  }
}

Cursor.prototype.renderBoardCursor = function(sF, clearPrevPos) {
  if(!this.board.grid[this.cursorPos[0]][this.cursorPos[1]].unit) {
    clearPosition(this.cursorPos[0], this.cursorPos[1], sF);
    this.board.grid[this.cursorPos[0]][this.cursorPos[1]].render(this.cursorPos[0], this.cursorPos[1], sF);
  }
  highlight(this.cursorPos, 'rgba(255, 255, 0, 0.5)', sF);
}

Cursor.prototype.clearRenderingOfPrevPos = function(sF) {
  if(this.prevPos) {
    if(this.selectedUnit && this.selectedUnit.moveSpaces &&
      !(this.selectedUnit.moveSpaces[this.prevPos] || this.selectedUnit.attackSpaces[this.prevPos])) {
        // debugger;
      clearPosition(this.prevPos[0], this.prevPos[1], sF);
      this.board.grid[this.prevPos[0]][this.prevPos[1]].render(this.prevPos[0], this.prevPos[1], sF);
    } else if(!this.selectedUnit && !this.board.grid[this.prevPos[0]][this.prevPos[1]].unit) {
      // debugger;
      clearPosition(this.prevPos[0], this.prevPos[1], sF);
      this.board.grid[this.prevPos[0]][this.prevPos[1]].render(this.prevPos[0], this.prevPos[1], sF);
    }
    this.prevPos = null;
  }
}
//METHODS THAT ARE HIGHLY LIKELY TO BE NECESSARY BUT WILL HOPEFULLY BE
//REFACTORED IF NOT REMOVED

Cursor.prototype.selectUnit = function(unit) {
  this.selectedUnit = unit;
  this.selectedUnit.setMoveForecast();
}

Cursor.prototype.deselectUnit = function() {
  this.selectedUnit = null;
}

//METHODS THAT WILL POTENTIALLY BE REMOVED

Cursor.prototype.moveSelectedUnit = function() {
  this.selectedUnit.prevPos = [this.selectedUnit.position[0], this.selectedUnit.position[1]];
  this.selectedUnit.move([this.cursorPos[0], this.cursorPos[1]]);

}

// private cursor methods

Cursor.prototype.moveCursorInDirection = function(button, value, constraint, index, delta) {
  if(button == value && constraint) {
    this.cursorPrevPos = [this.cursorPos[0], this.cursorPos[1]];
    this.cursorPos[index] = this.cursorPos[index] + delta;
  }
}
