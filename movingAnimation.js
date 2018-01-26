function MovingAnimation(unit, route, ticksPerFrame) {
  this.unit = unit;
  this.route = route;
  this.differentials = this.calculateRouteDifferentials();
  this.difIndex = 0;
  this.tick = 0;
  this.ticksPerTranslation = ticksPerFrame;
  this.x = this.unit.position[0];
  this.y = this.unit.position[1];
}

MovingAnimation.prototype.calculateRouteDifferentials = function() {
  // debugger;
  let routeDifferentials = [];

  for(let i = 1; i < this.route.length; i++) {
    routeDifferentials.push([this.route[i][0] - this.route[i - 1][0], this.route[i][1] - this.route[i - 1][1]]);
  }

  return routeDifferentials;
}

MovingAnimation.prototype.render = function(sF) {
  // debugger;

  if (this.differentials[this.difIndex][0] === 0 && this.differentials[this.difIndex][1] === -1) {
    this.unit.backwardWalkSprite.render(this.x, this.y, sF);
  } else if(this.differentials[this.difIndex][0] === 1 && this.differentials[this.difIndex][1] === 0) {
    this.unit.sideWalkSprite.render(this.x, this.y, sF);
  } else {
    this.unit.forwardWalkSprite.render(this.x, this.y, sF);
  }

  //update
  if (this.tick >= this.ticksPerTranslation || this.differentials.length === 0) {
    if (this.difIndex == this.differentials.length - 1 || this.differentials.length === 0) {
      this.unit.moving = false;
    } else {
      this.tick = 0;
      this.difIndex += 1;
    }
  } else {
    this.tick += 1;
    let checkOne = this.differentials[this.difIndex][0];
    let checkTwo = (this.tick * 1.0 / this.ticksPerTranslation);
    this.x += ((this.differentials[this.difIndex][0] * (1 / this.ticksPerTranslation)));
    this.y += ((this.differentials[this.difIndex][1] * (1 / this.ticksPerTranslation)));

  }
}
