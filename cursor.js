function Cursor(board) {
  let that = this;
  this.board = board;
  this.cursorPos = [0, 0];
  this.windowCursorPos = 0;
  this.windowOptions = null;
  this.selectedUnit = null;
  this.moveSpaces = null;
  this.attackSpaces = null;
  this.selectedUnitPrevPos = null;

  this.checkKeyPress = function(key) {
      //board cursor handling
      if (that.selectedUnitPrevPos === null) {
        if(key.keyCode == "13") {
          that.enterKeyAction();
        } else {
          that.moveCursorPosition(key);
        }
      } else if(that.selectedUnitPrevPos != null) {
        that.postMovePhase(key);
      }
  }

window.addEventListener("keydown", this.checkKeyPress, false);
}
/*
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
*/

Cursor.prototype.moveCursorPosition = function(key) {
  if(key.keyCode == "65" && this.cursorPos[0] > 0) {
    this.cursorPos[0] -= 1;
  } else if(key.keyCode == "68" && this.cursorPos[0] < this.board.dimensions[0] - 1) {
    this.cursorPos[0] += 1;
  } else if(key.keyCode == "87" && this.cursorPos[1] > 0) {
    this.cursorPos[1] -= 1;
  } else if(key.keyCode == "83" && this.cursorPos[1] < this.board.dimensions[1] - 1) {
    this.cursorPos[1] += 1;
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
    this.windowOptions = this.selectedUnit.postMoveWindowOptions();
    //this.selectedUnit.actionTaken = true;
    //this.deselectUnit();
  //  if(newChapter.isPhaseOver()) {
    //  newChapter.changePhase();
    //}
  }
}

Cursor.prototype.postMovePhase = function(key) {
  if (key.keyCode == '83' && this.windowCursorPos < this.windowOptions.length - 1) {
    this.windowCursorPos += 1;
  } else if(key.keyCode =='87' && this.windowCursorPos > 0) {
    this.windowCursorPos -= 1;
  } else if(key.keyCode == '13') {
    newChapter.cursor.selectedUnit.actionTaken = true;
    newChapter.cursor.deselectUnit();
  }
  /*
  newChapter.cursor.selectedUnit.actionTaken = true;
  newChapter.cursor.deselectUnit();
*/
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
  this.windowOptions = null;
}

Cursor.prototype.removeEventListener = function() {
  window.removeEventListener("keydown", this.checkKeyPress, false);
}
