function GlobalDisplay(board, cursor, phaseStage, sF) {
  this.board = board;
  this.cursor = cursor;
  this.phaseStage = phaseStage;
  this.window = new NullWindow();
  this.combatAnimation = null;

  this.sF = sF;
  this.x = 5*sF;
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
    this.renderUnits(this.sF, this.x, this.y, this.width, this.height);
    this.renderWindows(sF);
    if(this.phaseStage.stage === 'player unit moving') this.renderMoveSpaces(sF);
    this.renderCursor(this.sF, this.x, this.y, this.height, this.width);
  }
}

GlobalDisplay.prototype.renderUnits = function(sF, x, y, width, height) {

  for(const unitIndex in this.units) {
    if (this.units[unitIndex].current_hp > 0 && !(this.cursor.selectedUnit &&
      this.cursor.selectedUnit === this.units[unitIndex])) {
      this.units[unitIndex].render(sF, x, y, width, height);
    }
  }

  if(this.cursor.selectedUnit) this.cursor.selectedUnit.render(this.sF, this.x, this.y, this.width, this.height);
}

GlobalDisplay.prototype.renderWindows = function(sF) {
  this.window.render(sF);
}

GlobalDisplay.prototype.renderMoveSpaces = function(sF) {
  // debugger;
  this.cursor.selectedUnit.renderMoveSpaces(this.sF, this.x, this.y, this.width, this.height);
}

GlobalDisplay.prototype.renderCursor = function(sF, x, y, width, height) {
  this.cursor.renderBoardCursor(sF, x, y, width, height);
}

GlobalDisplay.prototype.renderCombatAnimation = function(sF) {
  this.combatAnimation.render(sF);
  if (this.combatAnimation.nonCombatFrames >= 150) {
    this.combatAnimation = null;
  }
}
