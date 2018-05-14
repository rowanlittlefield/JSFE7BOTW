Unit.prototype.adjacentSpaceList = function(space) {
  let adjacentSpaces = [];
  let row = space[0];
  let col = space[1];
  if (row + 1 <= this.board.dimensions[0] - 1) {
    adjacentSpaces.push([row + 1, col]);
  }
  if(row - 1 >= 0) {
    adjacentSpaces.push([row - 1, col]);
  }
  if (col + 1 <= this.board.dimensions[1] - 1) {
    adjacentSpaces.push([row, col + 1]);
  }
  if (col - 1 >= 0) {
    adjacentSpaces.push([row, col - 1]);
  }

  return adjacentSpaces;
}

Unit.prototype.adjacentSpacesCanMoveThrough = function(space, targetSpace) {
  let adjSpaces = this.adjacentSpaceList(space);
  let moveableAdjSpaces = [];

  for (let i = 0; i < adjSpaces.length; i++) {
    let pos = adjSpaces[i];
    // let secondCondition = targetSpace != null && equivalentPositions(pos, targetSpace);
    if(((this.board.grid[pos[0]][pos[1]].unit === null ||
      this.board.grid[pos[0]][pos[1]].unit instanceof(PlayerUnit) === this instanceof(PlayerUnit)) &&
      !(this.board.grid[pos[0]][pos[1]].terrain instanceof(Wall))) ||
      (targetSpace != null && equivalentPositions(pos, targetSpace))) {
      moveableAdjSpaces.push(pos);
    }
  }

  return moveableAdjSpaces;
}

Unit.prototype.possibleSpacesCanMoveThrough = function() {
  let spaces = {};
  spaces[this.position] = true;
  let potentialSpaces = {};
  let moves = this.stats['move'];

  for(let j = 0; j < moves; j++) {
    let keys = Object.keys(spaces);
    let iterationMoves = {};

    for(let idx3 = 0; idx3 < keys.length; idx3++) {
      let pos = stringToPos(keys[idx3]);
      let adSpaces = this.adjacentSpacesCanMoveThrough(pos);
      for(let idx4 = 0; idx4 < adSpaces.length; idx4++) {
        if (this.board.space(adSpaces[idx4]).terrain === null) {
          spaces[adSpaces[idx4]] = true;
        } else if (potentialSpaces[adSpaces[idx4]] === undefined) {
          potentialSpaces[adSpaces[idx4]] = this.board.space(adSpaces[idx4]).terrain.moveCost(this.constructor.name) - 1;
        } else if (iterationMoves[adSpaces[idx4]] === undefined && potentialSpaces[adSpaces[idx4]] > 1) {
          potentialSpaces[adSpaces[idx4]] -= 1;
        } else if(iterationMoves[adSpaces[idx4]] === undefined && potentialSpaces[adSpaces[idx4]] <= 1) {
          spaces[adSpaces[idx4]] = true;
        }
        iterationMoves[adSpaces[idx4]] = true;
      }
    }

  }
  return spaces;
}

Unit.prototype.validMoveSpaces = function() {
  let validMoveSpaces = {};
  let possibleSpaces = this.possibleSpacesCanMoveThrough();

  for(const pos in possibleSpaces) {
    let position = stringToPos(pos);

    if (this.isValidMove(position)) {
      validMoveSpaces[position] = true;
    }
  }

  return validMoveSpaces;
}

Unit.prototype.isValidMove = function(endPos) {
  if (endPos[0] === this.position[0] && endPos[1] === this.position[1]) {
    return true;
  } else if ((this.board.grid[endPos[0]][endPos[1]].unit != null) ||
    !this.possibleSpacesCanMoveThrough()[endPos]) {
    return false;
  }

  return true;
}

Unit.prototype.adjacentSpacesCanAttackThrough = function(space, moveSpaces) {
  let adjSpaces = this.adjacentSpaceList(space);
  let attackableAdjSpaces = [];

  for (let i = 0; i < adjSpaces.length; i++) {
    let space = adjSpaces[i];
    if(moveSpaces[space] != true && (this.board.grid[space[0]][space[1]].unit === null ||
      this.board.grid[space[0]][space[1]].unit instanceof(PlayerUnit) != this instanceof(PlayerUnit))) {
      attackableAdjSpaces.push(space);
    }
  }

  return attackableAdjSpaces;
}

Unit.prototype.possibleAttackSpaces = function() {
  let moveSpaces = this.validMoveSpaces();
  let range = this.equippedWeapon.stats['range'];
  let maxRange = Math.max.apply(null, range);
  let listOfAttackSpaces = {};

  for(let idx = 0; idx < maxRange; idx ++) {
    if(idx === 0) {

      for(let space in moveSpaces) {
        let adjAttackSpaces = this.adjacentSpacesCanAttackThrough(stringToPos(space), moveSpaces);
        for(let idx2 = 0; idx2 < adjAttackSpaces.length; idx2 ++) {
          listOfAttackSpaces[adjAttackSpaces[idx2]] = true;
        }
      }

    } else {

      for(let space in listOfAttackSpaces) {
        let adjAttackSpaces = this.adjacentSpacesCanAttackThrough(stringToPos(space), moveSpaces);
        for(let idx2 = 0; idx2 < adjAttackSpaces.length; idx2 ++) {
          listOfAttackSpaces[adjAttackSpaces[idx2]] = true;
        }
      }

    }

  }

  for(let space in listOfAttackSpaces) {
    if(this.isCorrectDistance(space, moveSpaces, range)) {
      delete listOfAttackSpaces[space];
    }
  }
  return listOfAttackSpaces;
}

Unit.prototype.isCorrectDistance = function(key, moveSpaces, weaponRange) {
  let keyArray = stringToPos(key);
  for(let mSpace in moveSpaces) {
    let mSpaceArray = stringToPos(key);
    if(weaponRange.includes(distance(keyArray, mSpaceArray))) {
      return true;
    }
  }

  return false;
}

Unit.prototype.move = function(pos) {
  this.board.grid[this.position[0]][this.position[1]].unit = null;
  this.board.grid[pos[0]][pos[1]].unit = this;
  this.position = pos;
}
