function Cursor(board) {
  let that = this;
  this.board = board;
  this.cursorPos = [0, 0];
  this.windowCursorPos = 0;
  this.selectedUnit = null;
  this.phaseStage = 'select unit';

  this.checkKeyPress = function(key) {
      //board cursor handling
      if (that.selectedUnit === null || that.selectedUnit.prevPos === null) {
        if(key.keyCode == "13") {
          that.enterKeyAction();
        } else {
          that.moveCursorPosition(key);
          if (that.selectedUnit != null) {
            //debugger;
            let pathAndSteps = that.selectedUnit.viablePathToUnit(that.selectedUnit.position, that.cursorPos);
            let optRPositions = that.selectedUnit.optimalRoutePositions(pathAndSteps[0], pathAndSteps[1], that.selectedUnit.position, that.cursorPos);
            that.selectedUnit.routeSpaces = that.selectedUnit.siftRoute(optRPositions, that.selectedUnit.position, that.cursorPos);
          }
        }
      } else if(that.selectedUnit.prevPos != null) {
        that.postMovePhase(key);
      }
  }

window.addEventListener("keydown", this.checkKeyPress, false);
}

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
  let spaceOccupant = this.board.grid[this.cursorPos[0]][this.cursorPos[1]].unit
  if(spaceOccupant != null && spaceOccupant instanceof(PlayerUnit) &&
  spaceOccupant.actionTaken === false && this.selectedUnit === null) {
    this.selectUnit(spaceOccupant);
  } else if(this.selectedUnit != null &&
    this.selectedUnit.validMoveSpaces()[[this.cursorPos[0], this.cursorPos[1]]]) {
    this.moveSelectedUnit();
  }
}

Cursor.prototype.postMovePhase = function(key) {
  if (this.phaseStage === 'post movement options') {
    this.selectPostMoveOption(key);
  } else if(this.phaseStage === 'select unit to fight') {
    this.selectUnitToFight(key);
  }

  if(newChapter.isPhaseOver()) {
    newChapter.changePhase();
  }
}

Cursor.prototype.selectUnit = function(unit) {
  this.selectedUnit = unit;
  this.selectedUnit.setMoveForecast();
  this.phaseStage = 'player unit moving';
}

Cursor.prototype.moveSelectedUnit = function() {
  this.selectedUnit.prevPos = [this.selectedUnit.position[0], this.selectedUnit.position[1]];
  this.selectedUnit.move([this.cursorPos[0], this.cursorPos[1]]);
  this.selectedUnit.windowOptions = this.selectedUnit.postMoveWindowOptions();
  this.phaseStage = 'post movement options';
}

Cursor.prototype.selectPostMoveOption = function(key) {
  if (key.keyCode == '83' || key.keyCode == '87') {
    this.scrollWindowCursor(key, this.selectedUnit.windowOptions.length);
  } else if(key.keyCode == '13') {
  if (this.selectedUnit.windowOptions[this.windowCursorPos] === 'End') {
    this.windowCursorPos = 0;
    this.selectedUnit.actionTaken = true;
    this.deselectUnit();
  } else if (this.selectedUnit.windowOptions[this.windowCursorPos] === 'Fight') {
    this.windowCursorPos = 0;
    this.selectedUnit.fightOptions = this.selectedUnit.isOppInRange();
    this.phaseStage = 'select unit to fight';
    }
  }
}

Cursor.prototype.selectUnitToFight = function(key) {
  if (key.keyCode == '83' || key.keyCode == '87') {
    this.scrollWindowCursor(key, this.selectedUnit.fightOptions.length);
  } else if(key.keyCode == '13') {
    let pos = this.windowCursorPos;
    this.selectedUnit.fight(this.board.grid[this.selectedUnit.fightOptions[pos][0]][this.selectedUnit.fightOptions[pos][1]].unit);
    this.windowCursorPos = 0;
    this.selectedUnit.actionTaken = true;
    this.deselectUnit();
  }
}

Cursor.prototype.deselectUnit = function() {
  this.selectedUnit.nullifyOptions();
  this.selectedUnit = null;
  this.phaseStage = 'select unit';
}

Cursor.prototype.renderBoardCursor = function(sF) {
  highlight(this.cursorPos, 'rgba(255, 255, 0, 0.5)', sF); //yellow
}

Cursor.prototype.scrollWindowCursor = function(key, windowLength) {
  if (key.keyCode == '83' && this.windowCursorPos < windowLength - 1) {
    this.windowCursorPos += 1;
  } else if(key.keyCode =='87' && this.windowCursorPos > 0) {
    this.windowCursorPos -= 1;
  }
}

Cursor.prototype.removeEventListener = function() {
  window.removeEventListener("keydown", this.checkKeyPress, false);
}
