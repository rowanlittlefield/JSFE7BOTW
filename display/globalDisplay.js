function GlobalDisplay(board, cursor, phaseStage, sF) {
  this.board = board;
  this.cursor = cursor;
  this.phaseStage = phaseStage;
  this.window = new NullWindow();
  this.combatAnimation = null;

  this.sF = sF;
  this.x = 5*sF;
  this.y = 0*sF;
  this.width = 15*sF;
  this.height = 10*sF;

  this.displayWindow = new DisplayWindow(sF, this.x, this.y, this.width, this.height);
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
    this.x,
    this.y,
    this.height,
    this.width
   );
  this.renderBoard();
  this.renderObjects(this.sF);
}

GlobalDisplay.prototype.renderBoard = function() {
  this.board.render(this.displayWindow);
}

GlobalDisplay.prototype.setupUnitHash = function(sF) {
  this.units = this.board.setUpUnitHash();
}

GlobalDisplay.prototype.renderObjects = function(sF) {
  if (this.combatAnimation) {
    this.renderCombatAnimation();
  } else {
    this.renderUnits();
    this.renderWindows(sF);
    if(this.phaseStage.stage === 'player unit moving') this.renderMoveSpaces(sF);
    this.renderCursor();
  }
}

GlobalDisplay.prototype.renderUnits = function() {

  for(const unitIndex in this.units) {
    if (this.units[unitIndex].current_hp > 0 && !(this.cursor.selectedUnit &&
      this.cursor.selectedUnit === this.units[unitIndex])) {
      this.units[unitIndex].render(this.displayWindow);
    }
  }

  if(this.cursor.selectedUnit) this.cursor.selectedUnit.render(this.displayWindow);
}

GlobalDisplay.prototype.renderWindows = function(sF) {
  this.window.render(sF);
}

GlobalDisplay.prototype.renderMoveSpaces = function(sF) {
  this.cursor.selectedUnit.renderMoveSpaces(this.sF, this.x, this.y, this.width, this.height);
}

GlobalDisplay.prototype.renderCursor = function() {
  this.cursor.renderBoardCursor(this.displayWindow);
}

GlobalDisplay.prototype.renderCombatAnimation = function() {
  this.combatAnimation.render();
  if (this.combatAnimation.nonCombatFrames >= 150) {
    this.combatAnimation = null;
  }
}
