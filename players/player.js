function Player(board, display, phaseStage) {
  this.board = board;
  this.display = display;
  this.cursor = this.display.cursor
  this.phaseStage = phaseStage;
  this.unitType = PlayerUnit;
  this.opposingUnitType = EnemyUnit;
  this.units = this.listOfOwnUnits();
}

Player.prototype = Object.create(GeneralPlayer.prototype);
Player.prototype.constructor = Player;

Player.prototype.receiveControllerInput = function(button) {
  if (this.phaseStage.stage === 'select unit') {
    this.playSelectUnit(button);
  } else if (this.phaseStage.stage === 'player unit moving') {
    this.playPlayerUnitMoving(button);
  } else if (this.phaseStage.stage === 'post movement options') {
    this.playPostMovementOptions(button);
  } else if (this.phaseStage.stage === 'select unit to fight') {
    this.playSelectUnitToFight(button);
  }
}

Player.prototype.playPostMovementOptions = function(button) {
  if (button === 'A') {
    this.postMovementDecision();
  } else {
    this.cursor.scrollWindowCursor(button, this.display.window.options.length);
  }
}

Player.prototype.postMovementDecision = function() {
  let option = this.display.window.options[this.cursor.windowCursorPos];
  if (option === 'End') {
    this.cursor.windowCursorPos = 0;
    this.cursor.selectedUnit.actionTaken = true;
    this.display.window = null;
    this.cursor.deselectUnit();

      this.phaseStage.nextStage('select unit');
  } else if (option === 'Fight') {
    this.cursor.windowCursorPos = 0;
    let fightOptions = this.cursor.selectedUnit.isOppInRange();
    this.phaseStage.nextStage('select unit to fight');

    this.display.window = new CombatInformationWindow(this.cursor.selectedUnit, fightOptions);
  }
}

Player.prototype.playSelectUnitToFight = function(button) {
  if (button === 'A') {
    let pos = this.display.window.options[this.cursor.windowCursorPos];
    this.cursor.selectedUnit.fight(this.board.grid[pos[0]][pos[1]].unit);
    this.windowCursorPos = 0;
    this.cursor.selectedUnit.actionTaken = true;
    this.cursor.deselectUnit();
    this.display.window = null;

    this.phaseStage.nextStage('select unit');
  } else {
    this.cursor.scrollWindowCursor(button, this.display.windowLength);
  }
}

Player.prototype.isPhaseOver = function() {
  phaseOver = true;
  this.units.forEach(function(item, key, map) {
    if(key.actionTaken === false) {
      phaseOver = false;
    }
  });

  return phaseOver;
}
