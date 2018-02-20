function PlayerUnit(stats, board, inventory, name, mapSprite,
forwardWalkSprite, backwardWalkSprite, sideWalkSprite, hpWindowSprite) {
  Unit.call(this, stats, board, inventory, name, mapSprite,
  forwardWalkSprite, backwardWalkSprite, sideWalkSprite, hpWindowSprite);
  this.moveSpaces = null;
  this.attackSpaces = null;
  this.prevPos = null;
  this.windowOptions = null;
  this.fightOptions = null;
}

PlayerUnit.prototype = Object.create(Unit.prototype);
PlayerUnit.prototype.constructor = PlayerUnit;

PlayerUnit.prototype.setMoveForecast = function() {
  // this.moveSpaces = new MovementSpaces(this);
  this.moveSpaces = this.possibleSpacesCanMoveThrough();
  this.attackSpaces = this.possibleAttackSpaces();
  this.routeSpaces = [this.position];
  this.inTransit = true;
  this.prevPos = [this.position[0], this.position[1]];
}

PlayerUnit.prototype.nullifyOptions = function(display ) {
  this.clearMoveSpaceRendering(52, display);
  this.clearSpacesAroundUnit(52);
  this.moveSpaces = null;
  this.attackSpaces = null;
  this.prevPos = null;
  this.windowOptions = null;
  this.fightOptions = null;
  this.inTransit = false;
}

PlayerUnit.prototype.clearSpacesAroundUnit = function(sF) {
  // debugger;
  let pos = this.position;
  let positionsToClear = [];
  for(let i = -1; i < 2; i ++) {
    for(let j = -1; j < 2; j ++) {
      if (pos[0] + i >= 0 && pos[0] + i < this.board.grid.length &&
        pos[1] + j >= 0 && pos[1] + j < this.board.grid[0].length) {
          positionsToClear.push([pos[0] + i, pos[1] + j]);
      }
    }
  }
  for(let i = 0; i < positionsToClear.length; i ++) {
    let thePos = positionsToClear[i];
    if (!this.board.grid[thePos[0]][thePos[1]].unit) {
      c.clearRect(thePos[0] * sF, thePos[1] * sF, sF, sF);
      this.board.grid[thePos[0]][thePos[1]].render(thePos[0], thePos[1], sF);
    }
  }
}

PlayerUnit.prototype.clearMoveSpaceRendering = function(sF, display) {

  for(const space in this.moveSpaces) {
    let pos = stringToPos(space);
    c.clearRect(pos[0] * sF, pos[1] * sF, sF, sF);
    display.renderSpace(pos[0], pos[1], sF);
  }
  for(const space in this.attackSpaces) {
    let pos = stringToPos(space);
    c.clearRect(pos[0] * sF, pos[1] * sF, sF, sF);
    display.renderSpace(pos[0], pos[1], sF);
  }
}

PlayerUnit.prototype.renderMoveSpaces = function(sF) {
  for(const space in this.moveSpaces) {
    let pos = stringToPos(space);
    if(!this.board.grid[pos[0]][pos[1]].unit) {
      c.clearRect(pos[0] * sF, pos[1] * sF, sF, sF);
      this.board.grid[pos[0]][pos[1]].render(pos[0], pos[1], sF);
    }
    highlight(stringToPos(space), 'rgba(0, 0, 255, 0.2)', sF); //blue
  }

  for(const space in this.attackSpaces) {
    let pos = stringToPos(space);
    if(!this.board.grid[pos[0]][pos[1]].unit) {
      c.clearRect(pos[0] * sF, pos[1] * sF, sF, sF);
      this.board.grid[pos[0]][pos[1]].render(pos[0], pos[1], sF);
    }
    highlight(stringToPos(space), 'rgba(255, 0, 0, 0.2)', sF); //blue
  }

  for(let i = 0; i < this.routeSpaces.length; i++) {
    highlight(this.routeSpaces[i], 'rgba(123, 104, 238, 0.4)', sF);
  }
}
