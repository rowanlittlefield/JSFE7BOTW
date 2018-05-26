function AttackSpace(board, unit, validMovePos) {
  this.board = board;
  this.unit = unit;
  this.attackRanges = this.unit.equippedWeapon.stats['range'];

  this.attackPos = {};
  this.setupPossibleAttackSpaces(validMovePos);
}

//TODO: adjust methods below for new class
AttackSpace.prototype.setupPossibleAttackSpaces = function(validMovePos) {
  let maxRange = Math.max.apply(null, this.attackRanges);

  for(let idx = 0; idx < maxRange; idx++) {
    if(idx === 0) {
      this.iterateAttackSpace(validMovePos, validMovePos);
    } else {
      this.iterateAttackSpace(validMovePos);
    }
  }

  for(let space in this.attackPos) {
    if(this.unit.isCorrectDistance(space, validMovePos, this.attackRanges)) {
      delete this.attackPos[space];
    }
  }

  // return this.attackPos;
}

AttackSpace.prototype.iterateAttackSpace = function(validMovePos, seedSpace) {
  seedSpace = (seedSpace ? seedSpace : this.attackPos);
  for(let space in seedSpace) {
    let adjAttackSpaces = this.adjacentSpacesCanAttackThrough(stringToPos(space), validMovePos);
    for(let idx2 = 0; idx2 < adjAttackSpaces.length; idx2 ++) {
      this.attackPos[adjAttackSpaces[idx2]] = true;
    }
  }
}

AttackSpace.prototype.adjacentSpacesCanAttackThrough = function(space, validMovePos) {
  let adjSpaces = this.adjacentSpaceList(space);
  let attackableAdjSpaces = [];

  for (let i = 0; i < adjSpaces.length; i++) {
    let space = adjSpaces[i];
    if(validMovePos[space] === undefined &&
       (this.board.space(space).unit === null ||
      this.board.space(space).unit instanceof(PlayerUnit) != this.unit instanceof(PlayerUnit))) {
      attackableAdjSpaces.push(space);
    }
  }

  return attackableAdjSpaces;
}

AttackSpace.prototype.adjacentSpaceList = function(pos) {
  let dimensions = this.board.dimensions;
  let spaces = [];

  if(pos[0] + 1 <= dimensions[0] - 1) spaces.push([pos[0] + 1, pos[1]]);
  if(pos[0] - 1 >= 0) spaces.push([pos[0] - 1, pos[1]]);
  if(pos[1] + 1 <= dimensions[1] - 1) spaces.push([pos[0], pos[1] + 1]);
  if(pos[1] - 1 >= 0) spaces.push([pos[0], pos[1] - 1]);

  return spaces;
}

//rendering
AttackSpace.prototype.render = function(sF) {
  highlightSpaces(this.attackPos, this.board,
    'rgba(255, 0, 0, 0.2)', sF);
}
