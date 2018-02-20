function MovementSpaces(unit) {
  this.areRendered = false;
  this.movementPos = unit.possibleSpacesCanMoveThrough();
  this.attackSpaces = unit.possibleAttackSpaces();
  this.routeSpaces = [unit.position];
}
