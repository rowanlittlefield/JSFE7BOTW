function Chapter(board, display, frameSource, objective, sF) {
  this.phase = 0;
  this.phaseStage = new PhaseStage();
  this.objective = objective;
  this.numberOfTurns = 0;

  this.board = board;
  this.display = display;
  this.frameSource = frameSource;
  this.sF = sF;

  this.player = new Player(this.board, this.display, this.phaseStage);
  this.enemyPlayer = new EnemyPlayer(this.board, this.display, this.phaseStage, frameSource);
  this.players = {'0': this.player, '1': this.enemyPlayer};
  this.currentPlayer = this.players[0];

}

Chapter.prototype.play = function(display) {
  display.chapterSetup(this.board, new Cursor(this.board), this.phaseStage);
  this.player.cursor = this.display.cursor;

}

Chapter.prototype.gameOver = function() {
  return false;
}

Chapter.prototype.receiveInput = function(button) {
  this.currentPlayer.receiveControllerInput(button);

  this.postPlayerActionUpdate();

}

Chapter.prototype.postPlayerActionUpdate = function() {
  if(this.isPhaseOver()) {
    this.changePhase();
  }
}

Chapter.prototype.postUnitActionCheck = function() {
  if(this.currentPlayer.isPhaseOver()) {
    this.changePhase();
  }
}

Chapter.prototype.isPhaseOver = function() {
  this.player.unitDeath();
  this.enemyPlayer.unitDeath();
  return this.currentPlayer.isPhaseOver();
}

Chapter.prototype.changePhase = function() {
  this.currentPlayer.unitDeath();
  this.currentPlayer.resetUnitsAction();
  this.phase = (this.phase + 1) % 2;
  this.currentPlayer = this.players[this.phase];
  console.log(this.phase);

  //temporary hard coded enemy phase
  this.frameSource.beginAIPhase(this.currentPlayer);
  this.currentPlayer.initiatePhase();

  if(this.phase === 1) {
    this.phase = (this.phase + 1) % 2;
    this.currentPlayer = this.players[this.phase];
  }
  this.display.window = new NullWindow();
  if(this.phase === 0) {
    this.numberOfTurns += 1;
  }

  console.log(this.phase);

}
