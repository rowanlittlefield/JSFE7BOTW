function Display(board, cursor) {
  this.board = board;
  this.cursor = cursor;
}

Display.prototype.render = function(sF) {
  if((this.cursor.selectedUnit === null || this.cursor.selectedUnitPrevPos != null) && this.cursor.fightOptions === null) {
    this.renderBoard(sF);
  } else if(this.cursor.selectedUnit != null && this.cursor.selectedUnitPrevPos === null) {
    this.possibleMovesRender(this.cursor.selectedUnit, this.cursor.moveSpaces, this.cursor.attackSpaces, sF);
  } else if(this.cursor.fightOptions != null) {

    this.selectAttackRender(sF);
  }
  if(this.board.grid[this.cursor.cursorPos[0]][this.cursor.cursorPos[1]].unit != null &&
    this.cursor.selectedUnit === null && this.cursor.selectedUnitPrevPos === null) {
      let unit = this.board.grid[this.cursor.cursorPos[0]][this.cursor.cursorPos[1]].unit;
      newUnitMapWindow = new UnitMapWindow(unit);
      newUnitMapWindow.render(sF);
    }
  if (this.cursor.selectedUnit != null && this.cursor.selectedUnitPrevPos != null &&
    this.cursor.fightOptions === null) {
      let unit = this.board.grid[this.cursor.cursorPos[0]][this.cursor.cursorPos[1]].unit;
      newUnitPostMovePhaseWindow = new UnitPostMovePhaseWindow(unit, this.cursor.windowCursorPos);
      newUnitPostMovePhaseWindow.render(sF);
  }
}

Display.prototype.renderBoard = function(sF) {
  this.boardIterator(this.renderSpace.bind(this), sF);
}

Display.prototype.renderSpace = function(row, col, sF) {
  this.board.space([row, col]).render(row, col, sF);

  if(row === this.cursor.cursorPos[0] &&  col === this.cursor.cursorPos[1]) {
    c.fillStyle = "rgba(255, 255, 0, 0.5)";
    c.fill();
  }
}

Display.prototype.possibleMovesRender = function(selectedUnit, moveSpaces, attackSpaces, sF) {
  this.boardIterator(this.moveSelectionRender.bind(this), sF);
}

Display.prototype.moveSelectionRender = function(row, col, sF) {
  if(this.cursor.moveSpaces[[row, col]]) {
    this.possibleMoveSpaceRender(row, col, sF);
  } if (this.cursor.attackSpaces[[row, col]]) {
    this.possibleAttackSpaceRender(row, col, sF);
  } else {
    this.renderSpace(row, col, sF);
  }
}

Display.prototype.possibleMoveSpaceRender = function(row, col, sF) {
  this.renderSpace(row, col, sF);
  c.fillStyle = "rgba(0, 0, 255, 0.2)";
  c.fillRect(row * sF, col * sF, sF, sF);
}

Display.prototype.possibleAttackSpaceRender = function(row, col, sF) {
  this.renderSpace(row, col, sF);
  c.fillStyle = "rgba(255, 0, 0, 0.2)";
  c.fillRect(row * sF, col * sF, sF, sF);
}

Display.prototype.boardIterator = function(callBack, sF) {
  for(let row = 0; row < this.board.grid.length; row++){
    for(let col = 0; col < this.board.grid[row].length; col++){
      callBack(row, col, sF);
    }
  }
}

Display.prototype.selectAttackRender = function(sF) {
  this.boardIterator(this.attackSelectionRender.bind(this), sF);
  let oppPos = [this.cursor.fightOptions[this.cursor.windowCursorPos][0], this.cursor.fightOptions[this.cursor.windowCursorPos][1]];
  let ciw = new CombatInformationWindow(this.cursor.selectedUnit, this.board.grid[oppPos[0]][oppPos[1]].unit);
  ciw.render(this.cursor.fightOptions[this.cursor.windowCursorPos], sF);
}

Display.prototype.attackSelectionRender = function(row, col, sF) {
  if (this.cursor.fightOptions[this.cursor.windowCursorPos][0] === row &&
    this.cursor.fightOptions[this.cursor.windowCursorPos][1] === col) {
      this.renderSpace(row, col, sF);
      c.fillStyle = "rgba(255, 0, 255, 0.2)";
      c.fillRect(row * sF, col * sF, sF, sF);
  } else if (includePosition(this.cursor.fightOptions, [row, col])) {
    this.possibleAttackSpaceRender(row, col, sF);
  } else {
    this.renderSpace(row, col, sF);
  }
}
