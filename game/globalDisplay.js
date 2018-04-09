function GlobalDisplay(board, cursor, phaseStage) {
  this.board = board;
  this.cursor = cursor;
  this.phaseStage = phaseStage;
  this.window = new NullWindow();
  this.combatAnimation = null;
}

GlobalDisplay.prototype.chapterSetup = function(board, cursor, phaseStage) {
  this.board = board;
  this.cursor = cursor;
  this.phaseStage = phaseStage;
  this.window = new NullWindow();
  this.setupUnitHash();
}

GlobalDisplay.prototype.render = function(sF) {
  this.renderBoard(sF);
  this.renderObjects(sF);
}

GlobalDisplay.prototype.beginAIPhase = function(aiPlayer) {
  this.aiPhase = true;
  this.aiPlayer = aiPlayer;
}

GlobalDisplay.prototype.endAIPhase = function() {
  this.aiPhase = false;
  this.aiPlayer = null;
}

GlobalDisplay.prototype.renderBoard = function(sF) {
  this.board.render(sF);
}

GlobalDisplay.prototype.setupUnitHash = function(sF) {
  this.units = this.board.setUpUnitHash();
}

GlobalDisplay.prototype.renderObjects = function(sF) {
  if (this.combatAnimation) {
    this.renderCombatAnimation(sF);
  } else {
    this.renderUnits(sF);
    this.renderWindows(sF);
    if(this.phaseStage.stage === 'player unit moving') this.renderMoveSpaces(sF);
    this.renderCursor(sF);
  }
}

GlobalDisplay.prototype.renderUnits = function(sF) {

  for(const unitIndex in this.units) {
    if (this.units[unitIndex].current_hp > 0 && !(this.cursor.selectedUnit &&
      this.cursor.selectedUnit === this.units[unitIndex])) {
      this.units[unitIndex].render(sF);
    }
  }

  if(this.cursor.selectedUnit) this.cursor.selectedUnit.render(sF);
}

GlobalDisplay.prototype.renderWindows = function(sF) {
  this.window.render(sF, this.cursor.windowCursorPos);
}

GlobalDisplay.prototype.renderMoveSpaces = function(sF) {
  this.cursor.selectedUnit.renderMoveSpaces(sF);
}

GlobalDisplay.prototype.renderCursor = function(sF) {
  this.cursor.renderBoardCursor(sF, true);
}

GlobalDisplay.prototype.renderCombatAnimation = function(sF) {
  this.combatAnimation.render(sF);
  if (this.combatAnimation.combatIndex >= 150) {
    this.combatAnimation = null;
  }
}
