function Chapter(board, objective) {
  this.board = board;
  this.display = new Display(this.board, new Cursor([0,0], this.board));
  this.objective = objective;
  this.number_of_turns = 0;
  this.player = new Player(this.board, this.display);
  this.enemyPlayer = new EnemyPlayer(this.board, this.display);
  this.phase = 'Player Phase';
}

Chapter.prototype.gameOver = function() {
  
}
