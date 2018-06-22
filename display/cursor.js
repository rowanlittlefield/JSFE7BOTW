function Cursor(board, displayWindow) {
  this.board = board;
  this.displayWindow = displayWindow
  this.cursorPos = [18, 3];
  this.selectedUnit = null;
}
//NECESSARY METHODS

Cursor.prototype.moveCursorPosition = function(button) {
  this.manipulateCursor(
    button, "left", this.cursorPos[0] > 0, 0, -1
  );
  this.manipulateCursor(
    button, "right", this.cursorPos[0] < this.board.dimensions[0] - 1, 0, 1
  );
  this.manipulateCursor(
    button, "up", this.cursorPos[1] > 0, 1, -1
  );
  this.manipulateCursor(
    button, "down", this.cursorPos[1] < this.board.dimensions[1] - 1, 1, 1
  );

  this.updateDisplayWindowScreen(button);
}


Cursor.prototype.renderBoardCursor = function(displayWindow) {
  let sF = displayWindow.sF;
  let topX = displayWindow.x/sF;
  let topY = displayWindow.y/sF;
  let highlightPos = [this.cursorPos[0] - topX, this.cursorPos[1] - topY];

  highlight(highlightPos, 'rgba(255, 255, 0, 0.5)', displayWindow.sF);
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

Cursor.prototype.manipulateCursor = function(button, direction, constraint, index, alteration) {
  if (button == direction && constraint) {
    this.prevPos = [this.cursorPos[0], this.cursorPos[1]];
    this.cursorPos[index] = this.cursorPos[index] + alteration;
  }
}

Cursor.prototype.updateDisplayWindowScreen = function(button) {
  const sF = this.displayWindow.sF
  if (button == 'left' && this.cursorPos[0] < (this.displayWindow.x/sF) + 4 &&
  this.displayWindow.x > 0) {
    this.displayWindow.x -= 0.5*sF;
    this.displayWindow.movementDirection = 'left';
  } else if (button == 'right' && this.cursorPos[0] > ((this.displayWindow.x/sF) + (this.displayWindow.width/sF)) - 4 &&
  ((this.displayWindow.x/sF) + (this.displayWindow.width/sF)) < this.board.dimensions[0]) {
    this.displayWindow.x += 0.5*sF;
    this.displayWindow.movementDirection = 'right';
  } else if (button == 'up' && this.cursorPos[1] < (this.displayWindow.y/sF) + 4 &&
  this.displayWindow.y > 0) {
    this.displayWindow.y -= 0.5*sF;
    this.displayWindow.movementDirection = 'up';
  } else if (button == 'down' && this.cursorPos[1] > ((this.displayWindow.y/sF) + (this.displayWindow.height/sF)) - 4 &&
  ((this.displayWindow.y/sF) + (this.displayWindow.height/sF)) < this.board.dimensions[1]) {
    this.displayWindow.y += 0.5*sF;
    this.displayWindow.movementDirection = 'down';

  }
}
