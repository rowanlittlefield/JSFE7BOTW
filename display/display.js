function Display(board, cursor, phaseStage) {
  this.board = board;
  this.cursor = cursor;
  this.phaseStage = phaseStage;
  this.window = new NullWindow();
  this.combatAnimation = null;

  this.aiPhase = false;
  this.aiPlayer = null;
  this.unitIndex = 0;
  this.units = {};
}

Display.prototype.render = function(sF) {
  if (isEmpty(this.units)) this.setupUnitHash(sF);
  this.renderBoard(sF);
  if (!this.combatAnimation) {
    this.renderObjects(sF);
  } else {
    this.combatAnimation.render(sF);
    if (this.combatAnimation.combatIndex >= 150) {
      this.combatAnimation = null;
    }
  }

  // // this.phaseStage.render(sF);
  if(this.aiPhase && !this.combatAnimation) this.aiPlayer.phaseFrameUpdate();
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
  this.units = this.board.setUpUnitHash();
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

Display.prototype.renderWindows = function(sF) {
  this.window.render(sF, this.cursor.windowCursorPos);
}

//

Display.prototype.renderMoveSpaces = function(sF) {
  this.cursor.selectedUnit.renderMoveSpaces(sF);
}

Display.prototype.renderCursor = function(sF) {
  this.cursor.renderBoardCursor(sF, true);
}
