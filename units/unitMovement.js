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
    let space = adjSpaces[i];

    if((this.board.grid[space[0]][space[1]][0] === null ||
      this.board.grid[space[0]][space[1]][0] instanceof(PlayerUnit) === this instanceof(PlayerUnit)) &&
      this.board.grid[space[0]][space[1]][1] === null) {
      moveableAdjSpaces.push(space);
    }
  }

  return moveableAdjSpaces;
}

Unit.prototype.possibleSpacesCanMoveThrough = function() {
  let spaces = {};
  spaces[this.position] = true;
  let moves = this.stats['move'];

  for(let j = 0; j < moves; j++) {
    let keys = Object.keys(spaces);

    for(let idx3 = 0; idx3 < keys.length; idx3++) {
      let arrayString = keys[idx3];
      let splitString = arrayString.split(',');
      let adSpaces = this.adjacentSpacesCanMoveThrough([parseInt(splitString[0]), parseInt(splitString[1])]);
      for(let idx4 = 0; idx4 < adSpaces.length; idx4++) {
        spaces[adSpaces[idx4]] = true;
      }
    }

  }
  return spaces;
}

Unit.prototype.validMoveSpaces = function() {
  let validMoveSpaces = {};
  let possibleSpaces = this.possibleSpacesCanMoveThrough();

  for(const pos in possibleSpaces) {
    let position = pos.split(',');

    if (this.isValidMove([parseInt(position[0]), parseInt(position[1])])) {
      validMoveSpaces[[parseInt(position[0]), parseInt(position[1])]] = true;
    }
  }

  return validMoveSpaces;
}

Unit.prototype.isValidMove = function(endPos) {
  var one = this.board.grid[endPos[0]][endPos[1]] != null;
  var two = !this.possibleSpacesCanMoveThrough()[endPos];

  if (endPos[0] === this.position[0] && endPos[1] === this.position[1]) {
    return true;
  } else if ((this.board.grid[endPos[0]][endPos[1]][0] != null) ||
    !this.possibleSpacesCanMoveThrough()[endPos]) {
    return false;
  }

  return true;
}

Unit.prototype.adjacentSpacesCanAttackThrough = function(space, moveSpaces) {
  //
  let adjSpaces = this.adjacentSpaceList(space);
  let attackableAdjSpaces = [];

  for (let i = 0; i < adjSpaces.length; i++) {
    let space = adjSpaces[i];
    if(moveSpaces[space] != true && (this.board.grid[space[0]][space[1]][0] === null ||
      this.board.grid[space[0]][space[1]][0] instanceof(PlayerUnit) != this instanceof(PlayerUnit))) {
      attackableAdjSpaces.push(space);
    }
  }

  return attackableAdjSpaces;
}

Unit.prototype.possibleAttackSpaces = function() {
  //debugger;
  let moveSpaces = this.validMoveSpaces();
  let range = this.inventory.stats['range'];
  let maxRange = Math.max.apply(null, range);
  let listOfAttackSpaces = {};

  for(let idx = 0; idx < maxRange; idx ++) {
    if(idx === 0) {

      for(let space in moveSpaces) {
        let splitSpace = space.split(',');
        let spaceArray = [parseInt(splitSpace[0]), parseInt(splitSpace[1])];
        let adjAttackSpaces = this.adjacentSpacesCanAttackThrough(spaceArray, moveSpaces);
        for(let idx2 = 0; idx2 < adjAttackSpaces.length; idx2 ++) {
          listOfAttackSpaces[adjAttackSpaces[idx2]] = true;
        }
      }

    } else {

      for(let space in listOfAttackSpaces) {
        let splitSpace = space.split(',');
        let spaceArray = [parseInt(splitSpace[0]), parseInt(splitSpace[1])];
        let adjAttackSpaces = this.adjacentSpacesCanAttackThrough(spaceArray, moveSpaces);
        for(let idx2 = 0; idx2 < adjAttackSpaces.length; idx2 ++) {
          listOfAttackSpaces[adjAttackSpaces[idx2]] = true;
        }
      }

    }

  }
//debugger;
  for(let space in listOfAttackSpaces) {
    if(this.isCorrectDistance(space, moveSpaces, range)) {
      delete listOfAttackSpaces[space];
    }
  }
  return listOfAttackSpaces;
}

Unit.prototype.isCorrectDistance = function(key, moveSpaces, weaponRange){
  let keyArrayString = key.split(',');
  let keyArray = [parseInt(keyArrayString[0]), parseInt(keyArrayString[1])]
  for(let mSpace in moveSpaces) {

    let mSpaceArrayString = key.split(',');
    let mSpaceArray = [parseInt(mSpaceArrayString[0]), parseInt(mSpaceArrayString[1])]
    if(weaponRange.includes(distance(keyArray, mSpaceArray))) {
      return true;
    }
  }

  return false;
}

Unit.prototype.move = function(pos) {
  this.board.grid[this.position[0]][this.position[1]][0] = null;
  this.board.grid[pos[0]][pos[1]][0] = this;
  this.position = pos;
}
