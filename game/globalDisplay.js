function GlobalDisplay(board, cursor, phaseStage) {
  this.board = board;
  this.cursor = cursor;
  this.phaseStage = phaseStage;
  this.window = new NullWindow();
  this.combatAnimation = null;
}

GlobalDisplay.prototype.render = function(sF) {
  c.fillRect(0, 0, 100, 100);
  this.window.render(sF);
}

Display.prototype.renderWindows = function(sF) {
  this.window.render(sF);
}

GlobalDisplay.prototype.chapterSetup = function() {
  
}
