function Display(board, cursor) {
  this.board = board;
  this.cursor = cursor;
  this.window = null;
}


Display.prototype.render = function(sF) {
  this.renderBoard(sF);
  this.renderWindows(sF);
//render phase stage

  c.font = "15px Arial";
  c.fillStyle = 'rgba(0, 0, 0, 1)';
  c.fillText(`${this.cursor.phaseStage}`, 0, 400);

}

Display.prototype.renderBoard = function(sF) {
  this.boardIterator(this.renderSpace.bind(this), sF);
  this.spaceHighlighting(sF);
}

Display.prototype.spaceHighlighting = function(sF) {
 if (this.cursor.phaseStage === 'player unit moving') {
    this.renderMoveAndAttackSpaces(this.cursor.selectedUnit, sF);

  } else if (this.cursor.phaseStage === 'select unit to fight') {
    this.renderAttackSpaces(this.cursor.selectUnit, sF);
  }
  if (this.cursor.phaseStage != 'select unit to fight') {
    this.cursor.renderBoardCursor(sF);
  }
}

Display.prototype.renderMoveAndAttackSpaces = function(unit, sF) {
  let moveSpaces = unit.moveSpaces;
  let attackSpaces = unit.attackSpaces;
  let routeSpaces = unit.routeSpaces;

  for(const space in moveSpaces) {
    highlight(stringToPos(space), 'rgba(0, 0, 255, 0.2)', sF); //blue
  }
  for(const space in attackSpaces) {
    highlight(stringToPos(space), 'rgba(255, 0, 0, 0.2)', sF); //red
  }

  for(let i = 0; i < routeSpaces.length; i++) {
    highlight(routeSpaces[i], 'rgba(123, 104, 238, 0.2)', sF);
  }
}

Display.prototype.renderAttackSpaces = function(unit, sF) {
  let pos = this.cursor.selectedUnit.fightOptions[this.cursor.windowCursorPos];
  highlight(pos, "rgba(255, 0, 255, 0.2)", sF); //purple
}

Display.prototype.renderWindows = function(sF) {
  if (this.cursor.phaseStage === 'select unit' &&
  this.board.grid[this.cursor.cursorPos[0]][this.cursor.cursorPos[1]].unit != null) {
    let unit = this.board.grid[this.cursor.cursorPos[0]][this.cursor.cursorPos[1]].unit;
    newUnitMapWindow = new UnitMapWindow(unit);
    newUnitMapWindow.render(sF);
  } else if (this.cursor.phaseStage === 'select unit to fight') {
    let oppPos = [this.cursor.selectedUnit.fightOptions[this.cursor.windowCursorPos][0], this.cursor.selectedUnit.fightOptions[this.cursor.windowCursorPos][1]];
    let ciw = new CombatInformationWindow(this.cursor.selectedUnit, this.board.grid[oppPos[0]][oppPos[1]].unit);
    ciw.render(this.cursor.selectedUnit.fightOptions[this.cursor.windowCursorPos], sF);
  } else if (this.cursor.phaseStage === 'post movement options') {
    let unit = this.board.grid[this.cursor.cursorPos[0]][this.cursor.cursorPos[1]].unit;
    newUnitPostMovePhaseWindow = new UnitPostMovePhaseWindow(unit, this.cursor.windowCursorPos);
    newUnitPostMovePhaseWindow.render(sF);
  }
}

Display.prototype.renderSpace = function(row, col, sF) {
  this.board.space([row, col]).render(row, col, sF);
}



//

Display.prototype.boardIterator = function(callBack, sF) {
  for(let row = 0; row < this.board.grid.length; row++){
    for(let col = 0; col < this.board.grid[row].length; col++){
      callBack(row, col, sF);
    }
  }
}
