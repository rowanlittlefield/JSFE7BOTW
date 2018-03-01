// play select unit

Player.prototype.playSelectUnit = function(button) {
  if (button === 'A') {
    this.identifyAndSelectUnit();
  } else {
    this.cursor.moveCursorPosition(button);
    this.updateUnitMapWindow();
  }
}

// helper methods
Player.prototype.identifyAndSelectUnit = function() {
  let spaceOccupant = this.board.space(this.cursorPos()).unit;
  if(spaceOccupant != null && spaceOccupant instanceof(PlayerUnit) &&
  spaceOccupant.actionTaken === false && this.selectedUnit() === null) {
    this.cursor.selectUnit(spaceOccupant);
    this.display.window = null;
    this.phaseStage.nextStage('player unit moving');
  }
}

Player.prototype.updateUnitMapWindow = function() {
  let unit = this.board.space(this.cursorPos()).unit;
  if (unit != null) {
    this.display.window = new UnitMapWindow(unit);
  } else {
    this.display.window = null;
  }
}

//play player unit moving
Player.prototype.playPlayerUnitMoving = function(button) {
  if (button === 'A') {
    if (this.selectedUnit().validMoveSpaces()[this.cursorPos()]) {
      this.moveSelectedUnit();
    }
  } else if (button === 'B') {
    this.undoSelection();
  } else {
      this.cursor.moveCursorPosition(button);
      this.updateSelectedUnitRouteSpaces();
  }
}

Player.prototype.undoSelection = function() {
  this.deselectUnit();
  this.phaseStage.nextStage('select unit');
}

Player.prototype.moveSelectedUnit = function() {
  this.setMovingAnimation();
  this.cursor.moveSelectedUnit();
  this.phaseStage.nextStage('unit moving animation');
}

Player.prototype.setMovingAnimation = function() {
  this.selectedUnit().moving = true;
  let siftedRoute = this.selectedUnit().findAnOptimalRoute(this.cursorPos());
  this.selectedUnit().movingAnimation = new MovingAnimation(
    this.selectedUnit(),
    siftedRoute,
    8,
    this.phaseStage,
    this.display);
}

Player.prototype.updateSelectedUnitRouteSpaces = function() {
  if (this.selectedUnit().moveSpaces[this.cursorPos()] === true) {
    this.selectedUnit().routeSpaces =
    this.selectedUnit().findAnOptimalRoute(this.cursorPos());
  } else {
    this.selectedUnit().routeSpaces = [this.selectedUnit().position];
  }
}

//play post movement options

Player.prototype.playPostMovementOptions = function(button) {
  if (button === 'A') {
    this.postMovementDecision();
  } else if(button === 'B') {
    this.undoMove();
  } else {
    this.cursor.scrollWindowCursor(
      button, this.display.window.options.length);
  }
}

Player.prototype.undoMove = function() {
  let prevPos = this.selectedUnit().prevPos;
  this.selectedUnit().move(prevPos);
  this.selectedUnit().setMoveForecast();
  this.updateSelectedUnitRouteSpaces();
  this.display.window = null;
  this.cursor.selectUnit(this.selectedUnit());
  this.phaseStage.nextStage('player unit moving');
}

Player.prototype.postMovementDecision = function() {
  let option = this.display.window.options[this.cursor.windowCursorPos];
  if (option === 'Wait') {
    this.endUnitTurn();
  } else if (option === 'Fight') {
    this.fightPreparations();
  }
}

Player.prototype.endUnitTurn = function() {
  this.cursor.windowCursorPos = 0;
  this.selectedUnit().actionTaken = true;
  this.updateUnitMapWindow();
  this.deselectUnit();

  this.phaseStage.nextStage('select unit');
}

Player.prototype.fightPreparations = function() {
  this.cursor.windowCursorPos = 0;
  let fightOptions = this.cursor.selectedUnit.isOppInRange();
  this.display.window = new CombatInformationWindow(this.cursor.selectedUnit, fightOptions);
  this.phaseStage.nextStage('select unit to fight');
}

// play select unit to fight

Player.prototype.playSelectUnitToFight = function(button) {
  if (button === 'A') {
    this.initiateFight();
  } else if(button === 'B') {
    this.returnToPostMovementOptions();
  } else {
    this.cursor.scrollWindowCursor(button, this.display.window.options.length);
    this.display.window.updateCoordinates(this.cursor.windowCursorPos);
  }
}

Player.prototype.returnToPostMovementOptions = function() {
  this.display.window.clearRendering(52, this.board);
  this.phaseStage.nextStage('post movement options');
  this.display.window = new UnitPostMovePhaseWindow(this.selectedUnit());
}

Player.prototype.initiateFight = function() {
  let pos = this.display.window.options[this.cursor.windowCursorPos];
// debugger;
  let newCombat = new Combat(this.selectedUnit(), this.board.space(pos).unit);
  this.display.combatAnimation = new CombatAnimation(newCombat, this.phaseStage);

  // newCombat.initiateFight();

  // this.selectedUnit().fight(this.board.space(pos).unit);
  this.cursor.selectedUnit.actionTaken = true;
  this.deselectUnit()
  this.windowCursorPos = 0;
  this.updateUnitMapWindow();

  this.phaseStage.nextStage('select unit');
}

//next play method followed by sub-methods


// lower level methods
Player.prototype.selectedUnit = function() {
  return this.cursor.selectedUnit;
}

Player.prototype.cursorPos = function() {
  return this.cursor.cursorPos;
}

Player.prototype.deselectUnit = function() {
  this.selectedUnit().nullifyOptions(this.display);
  this.cursor.deselectUnit();
}
