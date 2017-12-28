function Chapter(board, objective) {
  this.board = board;
  this.display = new Display(this.board, new Cursor(board));
  this.cursor = this.display.cursor;
  this.objective = objective;
  this.numberOfTurns = 0;
  this.player = new Player(this.board, this.display);
  this.enemyPlayer = new EnemyPlayer(this.board, this.display);
  this.players = {'0': this.player, '1': this.enemyPlayer};
  this.currentPlayer = this.players[0]
  this.phase = 0;
}

Chapter.prototype.gameOver = function() {
  return false;
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

  this.currentPlayer.playPhase();

  if(this.phase === 1) {
    this.phase = (this.phase + 1) % 2;
    this.currentPlayer = this.players[this.phase];
  }

  if(this.phase === 0) {
    this.numberOfTurns += 1;
  }

  console.log(this.phase);

}
