function MovingAnimation(unit, route, ticksPerTranslation, phaseStage, display) {
  this.unit = unit;
  this.differentials = this.calculateRouteDifferentials(route);
  this.renderSpaces = this.setRerenderSpaces(route);
  this.difIndex = 0;
  this.tick = 0;
  this.ticksPerTranslation = ticksPerTranslation;
  this.x = this.unit.position[0];
  this.y = this.unit.position[1];
  this.phaseStage = phaseStage;
  this.display = display;
}

MovingAnimation.prototype.calculateRouteDifferentials = function(route) {
  let routeDifferentials = [];

  for(let i = 1; i < route.length; i++) {
    routeDifferentials.push([route[i][0] - route[i - 1][0],
       route[i][1] - route[i - 1][1]]);
  }

  return routeDifferentials;
}

MovingAnimation.prototype.setRerenderSpaces = function(route) {
  let rerenderSpaces = {};
  for(let i = 0; i < route.length; i++) {
    let adjSpaces = this.unit.adjacentSpaceList(route[i]);
    for(let j = 0; j < adjSpaces.length; j++) {
      rerenderSpaces[adjSpaces[j]] = true;
    }
  }

  return rerenderSpaces;
}

MovingAnimation.prototype.render = function(sF) {
  this.rerenderSpacesCoveredBySprite(sF);
  this.selectSprite().render(this.x, this.y, sF);
  this.update();
}

MovingAnimation.prototype.rerenderSpacesCoveredBySprite = function(sF) {
  for(const space in this.renderSpaces) {
    let pos = stringToPos(space);
    if(!this.unit.board.grid[pos[0]][pos[1]].unit) {
      clearPosition(pos[0], pos[1], sF);
      this.unit.board.grid[pos[0]][pos[1]].render(pos[0], pos[1], sF);
    }
  }
}

MovingAnimation.prototype.selectSprite = function() {
  let directionHash = {
    '0,-1' : this.unit.backwardWalkSprite,
    '1,0' : this.unit.sideWalkSprite,
    '0,1' : this.unit.forwardWalkSprite,
    '-1,0' : this.unit.forwardWalkSprite
  };
  if(!directionHash[this.differentials[this.difIndex]]) return this.unit.forwardWalkSprite;
  return directionHash[this.differentials[this.difIndex]];
}

MovingAnimation.prototype.update = function() {
  if (this.tick >= this.ticksPerTranslation ||
    this.differentials.length === 0) {
    if (this.difIndex == this.differentials.length - 1 ||
      this.differentials.length === 0) {
        this.endAnimation();
    } else {
      this.tick = 0;
      this.difIndex += 1;
    }
  } else {
    this.tick += 1;
    this.x += (this.differentials[this.difIndex][0] *
      (1 / this.ticksPerTranslation));
    this.y += (this.differentials[this.difIndex][1] *
      (1 / this.ticksPerTranslation));
  }
}

MovingAnimation.prototype.endAnimation = function() {
  // debugger;
  this.rerenderSpacesCoveredBySprite(52);
  this.unit.moving = false;
  if (this.phaseStage.stage === 'unit moving animation') {
    this.phaseStage.nextStage('post movement options');
    this.display.window = new UnitPostMovePhaseWindow(this.unit);
  }
  // this.phaseStage.nextStage('post movement options');
  // this.display.window = new UnitPostMovePhaseWindow(this.unit);
}
