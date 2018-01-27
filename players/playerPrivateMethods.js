//first play methods followed by sub-methods
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
  //
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

//next play method followed by sub-methods

// lower level methods
Player.prototype.selectedUnit = function() {
  return this.cursor.selectedUnit;
}

Player.prototype.cursorPos = function() {
  return this.cursor.cursorPos;
}
