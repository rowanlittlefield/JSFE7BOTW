Unit.prototype.moveSelection = function() {
   if(this.behavior === 'idle') {
     console.log('stayed in same spot');
     return this.position;
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
  
  let attackIndex = Math.floor(Math.random() * playerUnitPositionsInRange.length);
  let pos = playerUnitPositionsInRange[attackIndex];
  this.fight(this.board.grid[pos[0]][pos[1]][0]);
}
