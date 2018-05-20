function AttackSpace(board, unit, moveThroughPos) {
  this.board = board;
  this.unit = unit;
  this.moveThroughSpace = moveThroughPos;
  this.attackRanges = this.unit.inventory.equippedWeapon.stats['range'];

  this.attackPos = {};
}

//TODO: adjust methods below for new class

MovementSpace.prototype.adjacentSpacesCanAttackThrough = function(space, moveSpaces) {
  let adjSpaces = this.adjacentSpaceList(space);
  let attackableAdjSpaces = [];

  for (let i = 0; i < adjSpaces.length; i++) {
    let space = adjSpaces[i];
    if(this.positions[space] === undefined && (this.board.grid[space[0]][space[1]].unit === null ||
      this.board.grid[space[0]][space[1]].unit instanceof(PlayerUnit) != this.unit instanceof(PlayerUnit))) {
      attackableAdjSpaces.push(space);
    }
  }

  return attackableAdjSpaces;
}

MovementSpace.prototype.setupPossibleAttackSpaces = function() {
  let range = this.unit.equippedWeapon.stats['range'];
  let maxRange = Math.max.apply(null, range);

  for(let idx = 0; idx < maxRange; idx ++) {
    if(idx === 0) {

      for(let space in this.validMovePositions) {
        let adjAttackSpaces = this.adjacentSpacesCanAttackThrough(stringToPos(space), this.validMovePositions);
        for(let idx2 = 0; idx2 < adjAttackSpaces.length; idx2 ++) {
          this.attackPositions[adjAttackSpaces[idx2]] = true;
        }
      }

    } else {

      for(let space in this.attackPositions) {
        let adjAttackSpaces = this.adjacentSpacesCanAttackThrough(stringToPos(space), this.validMovePositions);
        for(let idx2 = 0; idx2 < adjAttackSpaces.length; idx2 ++) {
          this.attackPositions[adjAttackSpaces[idx2]] = true;
        }
      }

    }

  }

  for(let space in this.attackPositions) {
    if(this.unit.isCorrectDistance(space, this.positions, range)) {
      delete this.attackPositions[space];
    }
  }
  return this.attackSpaces;
}

MovementSpace.prototype.adjacentSpaceList = function(pos) {
  let dimensions = this.board.dimensions;
  let spaces = [];

  if(pos[0] + 1 <= dimensions[0] - 1) spaces.push([pos[0] + 1, pos[1]]);
  if(pos[0] - 1 >= 0) spaces.push([pos[0] - 1, pos[1]]);
  if(pos[1] + 1 <= dimensions[1] - 1) spaces.push([pos[0], pos[1] + 1]);
  if(pos[1] - 1 >= 0) spaces.push([pos[0], pos[1] - 1]);

  return spaces;
}

//rendering
MovementSpace.prototype.render = function(sF) {
  highlightSpaces(this.attackPos, this.board,
    'rgba(255, 0, 0, 0.2)', sF);
}