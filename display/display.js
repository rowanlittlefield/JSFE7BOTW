function Display(board, cursor, phaseStage) {
  this.board = board;
  this.cursor = cursor;
  this.phaseStage = phaseStage;
  this.window = null;
  this.aiPhase = false;
  this.aiPlayer = null;
  this.unitIndex = 0;
  this.units = {};
}

Display.prototype.render = function(sF) {
  if (isEmpty(this.units)) this.setupUnitHash(sF);
  this.renderBoard(sF);
  this.renderObjects(sF);
  // // this.phaseStage.render(sF);
  if(this.aiPhase) this.aiPlayer.phaseFrameUpdate();
}

Display.prototype.beginAIPhase = function(aiPlayer) {
  this.aiPhase = true;
  this.aiPlayer = aiPlayer;
}

Display.prototype.endAIPhase = function() {
  this.aiPhase = false;
  this.aiPlayer = null;
}

Display.prototype.renderBoard = function(sF) {
  this.board.render(sF);
}

Display.prototype.setupUnitHash = function(sF) {
  this.boardIterator(this.addUnitToList.bind(this), sF);
}

Display.prototype.addUnitToList = function(row, col, sF) {
  if (this.board.space([row, col]).unit) {
    let unit = this.board.space([row, col]).unit;
    this.units[this.unitIndex] = unit;
    this.unitIndex += 1;
  }
}

Display.prototype.renderObjects = function(sF) {
  this.renderUnits(sF);
  this.renderWindows(sF);
  if(this.phaseStage.stage === 'player unit moving') this.renderMoveSpaces(sF);
  this.renderCursor(sF);
}

Display.prototype.renderUnits = function(sF) {
  for(const unitIndex in this.units) {
    let pos = this.units[unitIndex].position;
    if (this.units[unitIndex].current_hp > 0 &&
      !(this.cursor.selectedUnit && this.cursor.selectedUnit === this.units[unitIndex])) {
      // this.renderSpace(pos[0], pos[1], sF);
      this.units[unitIndex].render(pos[0], pos[1], sF);
    } else if(this.units[unitIndex].current_hp === 0){
      let units = this.units;
      delete units[unitIndex];
    }
  }

  if(this.cursor.selectedUnit) {
    let pos = this.cursor.selectedUnit.position
    this.cursor.selectedUnit.render(pos[0], pos[1], sF);
  }
}

Display.prototype.renderAttackSpaces = function(unit, sF) {
  let pos = this.window.options[this.cursor.windowCursorPos];
  highlight(pos, "rgba(255, 0, 255, 0.2)", sF); //purple
}

Display.prototype.renderWindows = function(sF) {
  if(this.window != null) this.window.render(sF, this.cursor.windowCursorPos);
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
Display.prototype.renderMoveSpaces = function(sF) {
  this.cursor.selectedUnit.renderMoveSpaces(sF);
}

Display.prototype.renderCursor = function(sF) {
  this.cursor.renderBoardCursor(sF, true);
}

Display.prototype.nullifyWindow = function() {

}
