function Chapter(board, objective) {
  this.board = board;
  this.controller = new Controller(this);
  this.display = new Display(this.board, new Cursor(board));
  this.cursor = this.display.cursor;

  this.player = new Player(this.board, this.display);
  this.enemyPlayer = new EnemyPlayer(this.board, this.display);
  this.players = {'0': this.player, '1': this.enemyPlayer};
  this.currentPlayer = this.players[0]

  this.phase = 0;
  this.phaseStage = 'select unit';
  this.objective = objective;
  this.numberOfTurns = 0;
}

Chapter.prototype.gameOver = function() {
  return false;
}

Chapter.prototype.receiveInput = function(button) {
  if (this.phaseStage === 'select unit') {
    this.playSelectUnit(button);
  } else if (this.phaseStage === 'player unit moving') {
    this.playPlayerUnitMoving(button);
  } else if (this.phaseStage === 'post movement options') {
    this.playPostMovementOptions(button);
  } else if (this.phaseStage === 'select unit to fight') {
    this.playSelectUnitToFight(button);
  }
}

Chapter.prototype.playSelectUnit = function(button) {
  if (button === 'A') {
    this.cursor.identifySpaceOccupant();
    if(this.cursor.selectedUnit != null) {
      this.phaseStage = 'player unit moving';
      this.display.phaseStage = 'player unit moving';
    }
  } else {
    this.cursor.moveCursorPosition(button);
    if (this.board.grid[this.cursor.cursorPos[0]][this.cursor.cursorPos[1]].unit != null) {
      let unit = this.board.grid[this.cursor.cursorPos[0]][this.cursor.cursorPos[1]].unit;
      this.display.window = new UnitMapWindow(unit);
    } else {
      this.display.window = null;
    }

  }
}

Chapter.prototype.playPlayerUnitMoving = function(button) {
  if (button === 'A') {

    if (this.cursor.selectedUnit.validMoveSpaces()[[this.cursor.cursorPos[0], this.cursor.cursorPos[1]]]) {
      this.cursor.moveSelectedUnit();
      this.phaseStage = 'post movement options';
      this.display.phaseStage = 'post movement options';
      let unit = this.board.grid[this.cursor.cursorPos[0]][this.cursor.cursorPos[1]].unit;
      this.display.window = new UnitPostMovePhaseWindow(unit);
    }
  } else {
    this.cursor.moveCursorPosition(button);
  }
}

Chapter.prototype.playPostMovementOptions = function(button) {
  if (button === 'A') {
    this.postMovementDecision();
  } else {
    this.cursor.scrollWindowCursor(button, this.display.window.options.length);
  }
}

Chapter.prototype.postMovementDecision = function() {
  let option = this.display.window.options[this.cursor.windowCursorPos];
  if (option === 'End') {
    this.cursor.windowCursorPos = 0;
    this.cursor.selectedUnit.actionTaken = true;
    this.display.window = null;
    this.cursor.deselectUnit();

    if(newChapter.isPhaseOver()) {
      newChapter.changePhase();
    }
      this.phaseStage = 'select unit';
      this.display.phaseStage = 'select unit';
  } else if (option === 'Fight') {
    this.cursor.windowCursorPos = 0;
    let fightOptions = this.cursor.selectedUnit.isOppInRange();
    this.phaseStage = 'select unit to fight';
    this.display.phaseStage = 'select unit to fight';

    this.display.window = new CombatInformationWindow(this.cursor.selectedUnit, fightOptions);
  }
}

Chapter.prototype.playSelectUnitToFight = function(button) {
  if (button === 'A') {
    let pos = this.display.window.options[this.cursor.windowCursorPos];
    this.cursor.selectedUnit.fight(this.board.grid[pos[0]][pos[1]].unit);
    this.windowCursorPos = 0;
    this.cursor.selectedUnit.actionTaken = true;
    this.cursor.deselectUnit();
    this.display.window = null;

    if(newChapter.isPhaseOver()) {
      newChapter.changePhase();
    }
      this.phaseStage = 'select unit';
      this.display.phaseStage = 'select unit';
  } else {
    this.cursor.scrollWindowCursor(button, this.display.windowLength);
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
