function Cursor(board) {
  this.board = board;
  this.cursorPos = [0, 0];
  this.window_cursor_pos = 0;
  this.selectedUnit = null;
  this.moveSpaces = null;
  this.attackSpaces = null;
  this.selectedUnitPrevPos = null;
}

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {
  //board cursor handling
  if (newChapter.cursor.selectedUnitPrevPos === null) {
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
  } else if(newChapter.cursor.selectedUnitPrevPos != null) {
    newChapter.cursor.postMovePhase();
  }
}

Cursor.prototype.enterKeyAction = function() {
  let spaceOccupant = this.board.grid[this.cursorPos[0]][this.cursorPos[1]][0]
  if(spaceOccupant != null && spaceOccupant instanceof(PlayerUnit) &&
  spaceOccupant.actionTaken === false && this.selectedUnit === null) {
    this.selectUnit(spaceOccupant);
  } else if(this.selectedUnit != null &&
    this.selectedUnit.validMoveSpaces()[[this.cursorPos[0], this.cursorPos[1]]]) {
    this.moveSelectedUnit();
    //this.selectedUnit.actionTaken = true;
    //this.deselectUnit();
  //  if(newChapter.isPhaseOver()) {
    //  newChapter.changePhase();
    //}
  }
}

Cursor.prototype.postMovePhase = function(windowSelection) {
  newChapter.cursor.selectedUnit.actionTaken = true;
  newChapter.cursor.deselectUnit();

  if(newChapter.isPhaseOver()) {
    newChapter.changePhase();
  }
}

Cursor.prototype.selectUnit = function(unit) {
  this.selectedUnit = unit;
  this.moveSpaces = unit.possibleSpacesCanMoveThrough();
  this.attackSpaces = unit.possibleAttackSpaces();
}

Cursor.prototype.moveSelectedUnit = function() {
  this.selectedUnitPrevPos = [this.selectedUnit.position[0], this.selectedUnit.position[1]];
  this.selectedUnit.move([this.cursorPos[0], this.cursorPos[1]]);
}

Cursor.prototype.deselectUnit = function() {
  this.selectedUnit = null;
  this.moveSpaces = null;
  this.attackSpaces = null;
  this.selectedUnitPrevPos = null;
}
