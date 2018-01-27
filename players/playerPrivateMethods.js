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
  } else {
      this.cursor.moveCursorPosition(button);
      this.updateSelectedUnitRouteSpaces();
  }
}

Player.prototype.moveSelectedUnit = function() {
  let selectedUnit = this.selectedUnit();
  if (!equivalentPositions(this.cursorPos(), selectedUnit.position)) {
    this.setMovingAnimation();
  }
  this.cursor.moveSelectedUnit();
  this.phaseStage.nextStage('post movement options');
  this.display.window = new UnitPostMovePhaseWindow(selectedUnit);
}

Player.prototype.setMovingAnimation = function() {
  this.selectedUnit().moving = true;
  let siftedRoute = this.selectedUnit().findAnOptimalRoute(this.cursorPos());
  this.selectedUnit().movingAnimation = new MovingAnimation(this.selectedUnit(), siftedRoute, 8);
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
  } else {
    this.cursor.scrollWindowCursor(
      button, this.display.window.options.length);
  }
}

Player.prototype.postMovementDecision = function() {
  let option = this.display.window.options[this.cursor.windowCursorPos];
  if (option === 'End') {
    this.endUnitTurn();
  } else if (option === 'Fight') {
    this.fightPreparations();
  }
}

Player.prototype.endUnitTurn = function() {
  this.cursor.windowCursorPos = 0;
  this.selectedUnit().actionTaken = true;
  this.updateUnitMapWindow();
  this.cursor.deselectUnit();

  this.phaseStage.nextStage('select unit');
}

Player.prototype.fightPreparations = function() {
  this.cursor.windowCursorPos = 0;
  let fightOptions = this.cursor.selectedUnit.isOppInRange();
  this.display.window = new CombatInformationWindow(this.cursor.selectedUnit, fightOptions);
  this.phaseStage.nextStage('select unit to fight');
}

//next play method followed by sub-methods


// lower level methods
Player.prototype.selectedUnit = function() {
  return this.cursor.selectedUnit;
}

Player.prototype.cursorPos = function() {
  return this.cursor.cursorPos;
}
