function AttackPositions(board, unit) {
  this.board = board;
  this.isPlayerUnit = unit instanceof PlayerUnit;
  this.attackRanges = unit.equippedWeapon.stats['range'];

  this.positions = {};
}

//
AttackPositions.prototype.findPositions = function(validMovePositionsHash) {
  const maxRange = Math.max.apply(null, this.attackRanges);

  for(let idx = 0; idx < maxRange; idx++) {
    const seedSpaceFlag = idx === 0;
    this.iterateAttackSpace(validMovePositionsHash, seedSpaceFlag);
  }

  for(const position in this.positions) {
    if(this.unit.isCorrectDistance(position, validMovePositionsHash, this.attackRanges)) {
      delete this.positions[position];
    }
  }

  return this.positions;
}

AttackPositions.prototype.iterateAttackSpace = function(validMovePositionsHash, seedSpaceFlag) {
  const seedSpace = (seedSpaceFlag ? validMovePositionsHash : this.positions);
  for(const positionString in seedSpace) {
    const position = stringToPos(positionString);
    const adjAttackPositions = this.adjacentAttackablePositions(position, validMovePositionsHash);
    for(let idx = 0; idx < adjAttackPositions.length; idx++) {
      this.positions[adjAttackPositions[idx]] = true;
    }
  }
}


//

AttackPositions.prototype.adjacentAttackablePositions = function(position, validMovePositionsHash) {
  const adjPositions = this.adjacentPositionsList(position);
  const attackableAdjPositions = [];

  for (let i = 0; i < adjPositions.length; i++) {
    const pos = adjPositions[i];
    const unitAtPos = this.board.space(pos).unit;
    if(validMovePositionsHash[pos] === undefined &&
       (unitAtPos === null ||
      unitAtPos instanceof(PlayerUnit) != this.isPlayerUnit)) {
      attackableAdjPositions.push(pos);
    }
  }

  return attackableAdjPositions;
}


AttackPositions.prototype.adjacentPositionsList = function(pos) {
  const dimensions = this.board.dimensions;
  const spaces = [];

  if(pos[0] + 1 <= dimensions[0] - 1) spaces.push([pos[0] + 1, pos[1]]);
  if(pos[0] - 1 >= 0) spaces.push([pos[0] - 1, pos[1]]);
  if(pos[1] + 1 <= dimensions[1] - 1) spaces.push([pos[0], pos[1] + 1]);
  if(pos[1] - 1 >= 0) spaces.push([pos[0], pos[1] - 1]);

  return spaces;
}


AttackSpace.prototype.render = function(sF, x, y, width, height) {
// Test to verify is working
// galileoHighlightSpaces(sF, x, y, width, height, this.positions, 'rgba(255, 0, 0, 0.2)');
}
