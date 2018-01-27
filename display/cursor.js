function Cursor(board) {
  this.board = board;
  this.cursorPos = [0, 0];
  this.windowCursorPos = 0;
  this.selectedUnit = null;
}
//NECESSARY METHODS
Cursor.prototype.moveCursorPosition = function(button) {
  if(button == "left" && this.cursorPos[0] > 0) {
    this.cursorPos[0] -= 1;
  } else if(button == "right" && this.cursorPos[0] < this.board.dimensions[0] - 1) {
    this.cursorPos[0] += 1;
  } else if(button == "up" && this.cursorPos[1] > 0) {
    this.cursorPos[1] -= 1;
  } else if(button == "down" && this.cursorPos[1] < this.board.dimensions[1] - 1) {
    this.cursorPos[1] += 1;
  }
}

Cursor.prototype.scrollWindowCursor = function(button, windowLength) {
  if (button == "down" && this.windowCursorPos < windowLength - 1) {
    this.windowCursorPos += 1;
  } else if(button == "up" && this.windowCursorPos > 0) {
    this.windowCursorPos -= 1;
  }
}

Cursor.prototype.renderBoardCursor = function(sF) {
  highlight(this.cursorPos, 'rgba(255, 255, 0, 0.5)', sF); //yellow
}
//METHODS THAT ARE HIGHLY LIKELY TO BE NECESSARY BUT WILL HOPEFULLY BE
//REFACTORED IF NOT REMOVED

Cursor.prototype.selectUnit = function(unit) {
  this.selectedUnit = unit;
  this.selectedUnit.setMoveForecast();
}

Cursor.prototype.deselectUnit = function() {
  this.selectedUnit.nullifyOptions();
  this.selectedUnit = null;
}

//METHODS THAT WILL POTENTIALLY BE REMOVED

Cursor.prototype.moveSelectedUnit = function() {
  this.selectedUnit.prevPos = [this.selectedUnit.position[0], this.selectedUnit.position[1]];
  this.selectedUnit.move([this.cursorPos[0], this.cursorPos[1]]);

// this.selectedUnit.windowOptions = this.selectedUnit.postMoveWindowOptions();
}
