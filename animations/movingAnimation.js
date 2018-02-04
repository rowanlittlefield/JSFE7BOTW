function MovingAnimation(unit, route, ticksPerTranslation, phaseStage, display) {
  this.unit = unit;
  this.differentials = this.calculateRouteDifferentials(route);
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

MovingAnimation.prototype.render = function(sF) {
  this.selectSprite().render(this.x, this.y, sF);
  this.update();
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
  this.unit.moving = false;
  this.phaseStage.nextStage('post movement options');
  this.display.window = new UnitPostMovePhaseWindow(this.unit);
}