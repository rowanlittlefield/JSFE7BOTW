function Cursor(board) {
  this.board = board;
  this.cursorPos = [0, 0];
  this.window_cursor_pos = 0;
  this.selectedUnit = null;
  this.moveSpaces = null;
  this.attackSpaces = null;
}

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {

  if(key.keyCode == "65" && newChapter.cursor.cursorPos[0] > 0) {
    newChapter.cursor.cursorPos[0] -= 1;
  }
  else if(key.keyCode == "68" && newChapter.cursor.cursorPos[0] < newBoard.dimensions[0] - 1) {
    newChapter.cursor.cursorPos[0] += 1;
  }
  else if(key.keyCode == "87" && newChapter.cursor.cursorPos[1] > 0){
    newChapter.cursor.cursorPos[1] -= 1;
  }
  else if(key.keyCode == "83" && newChapter.cursor.cursorPos[1] < newBoard.dimensions[1] - 1){
    newChapter.cursor.cursorPos[1] += 1;
  }
  else if(key.keyCode == "13") {
    newChapter.cursor.enterKeyAction();
  }
}

Cursor.prototype.enterKeyAction = function() {
  let spaceOccupant = this.board.grid[this.cursorPos[0]][this.cursorPos[1]][0]
  if(spaceOccupant != null && spaceOccupant instanceof(PlayerUnit) &&
  spaceOccupant.actionTaken === false && this.selectedUnit === null) {
    this.selectUnit(spaceOccupant);
  } else if(this.selectedUnit != null &&
    this.selectedUnit.validMoveSpaces()[[this.cursorPos[0], this.cursorPos[1]]]) {
    this.selectedUnit.move([this.cursorPos[0], this.cursorPos[1]]);
    this.selectedUnit.actionTaken = true;
    this.deselectUnit();
    if(newChapter.isPhaseOver()) {
      newChapter.changePhase();
    }
  }
}

Cursor.prototype.selectUnit = function(unit) {
  this.selectedUnit = unit;
  this.moveSpaces = this.selectedUnit.possibleSpacesCanMoveThrough();
  this.attackSpaces = this.selectedUnit.possibleAttackSpaces();
}

Cursor.prototype.deselectUnit = function() {
  this.selectedUnit = null;
  this.moveSpaces = null;
  this.attackSpaces = null;
}
