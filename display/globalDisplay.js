function GlobalDisplay(board, cursor, phaseStage, sF) {
  this.board = board;
  this.cursor = cursor;
  this.phaseStage = phaseStage;
  this.window = new NullWindow();
  this.combatAnimation = null;

  this.sF = sF;
  this.x = 0*sF;
  this.y = 0*sF;
  this.height = 15*sF;
  this.width = 10*sF;
}

GlobalDisplay.prototype.chapterSetup = function(board, cursor, phaseStage) {
  this.board = board;
  this.cursor = cursor;
  this.phaseStage = phaseStage;
  this.window = new NullWindow();
  this.setupUnitHash();
}

GlobalDisplay.prototype.render = function() {
  c.clearRect(
    this.x * this.sF,
     this.y * this.sF,
     this.height,
     this.width
   );
   // debugger;
  this.renderBoard(this.sF, this.x, this.y, this.height, this.width);
  this.renderObjects(this.sF);
}

GlobalDisplay.prototype.renderBoard = function(sF, x, y, height, width) {
  this.board.render(sF, x, y, height, width);
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
  if (this.combatAnimation.nonCombatFrames >= 150) {
    this.combatAnimation = null;
  }
}
