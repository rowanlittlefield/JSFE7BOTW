Unit.prototype.moveSelection = function() {

   if(this.behavior === 'idle') {
     return this.position;
    } else if(this.behavior === 'TWBS') {
     return this.possibleAttackSetupSpace();
    }

}

Unit.prototype.attackPlayerUnitInRange = function() {
  let playerUnitPositionsInRange = [];

  this.board.boardIterator(function(row, col){
    if (this.board.grid[row][col][0] instanceof(PlayerUnit) &&
        this.inventory.stats['range'].includes(distance(this.position, [row, col]))) {
      playerUnitPositionsInRange.push([row, col]);
    }
  }.bind(this));

  if (playerUnitPositionsInRange.length > 0) {
    let attackIndex = Math.floor(Math.random() * playerUnitPositionsInRange.length);
    let pos = playerUnitPositionsInRange[attackIndex];
    this.fight(this.board.grid[pos[0]][pos[1]][0]);
  }

}

Unit.prototype.possibleAttackSetupSpace = function() {
  let weaponRange = this.inventory.stats['range'];

  let playerUnitPositions = [];

  this.board.boardIterator(function(row, col){
    if (this.board.grid[row][col][0] instanceof(PlayerUnit)) {
      playerUnitPositions.push([row, col]);
    }
  }.bind(this));


  let validSpaces = this.validMoveSpaces();
  let setupSpaces = [];

  for(let i = 0; i < playerUnitPositions.length; i++) {
    for(const space in validSpaces) {
      splitSpace = space.split(',');
      spaceArr = [parseInt(splitSpace[0]), parseInt(splitSpace[1])];
      if(weaponRange.includes(distance(playerUnitPositions[i], spaceArr))) {
        setupSpaces.push(spaceArr);
      }
    }
  }
  if (setupSpaces.length === 0) {
    return this.position;
  }

  let moveSpaceIndex = Math.floor(Math.random() * setupSpaces.length);
  let pos = setupSpaces[moveSpaceIndex];
  return pos;
}

// Possibly non-AI methods that may need to be sorted into their own
// methods later

Unit.prototype.isOppInRange = function() {
  let ranges = this.inventory.stats['range'];
  let oppUnitPositions = [];
  let oppUnitsPosInRange = [];

  this.board.boardIterator(function(row, col){
    if (this.board.grid[row][col][0] &&
      this.board.grid[row][col][0] instanceof(EnemyUnit)) {
      oppUnitPositions.push([row, col]);
    }
  }.bind(this));

  for(let i = 0; i < oppUnitPositions.length; i++) {
    if (ranges.includes(distance(oppUnitPositions[i], this.position))) {
      oppUnitsPosInRange.push(oppUnitPositions[i]);
    }
  }

  return oppUnitsPosInRange;
}

Unit.prototype.postMoveWindowOptions = function() {
  options = [];
  if (this.isOppInRange().length > 0) {
    options.push('Fight');
  }
  options.push('End');

  return options;
}
