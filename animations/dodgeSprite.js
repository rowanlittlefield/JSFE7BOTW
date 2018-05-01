function DodgeSprite(context, spriteQueue, positionAdjustment, restFrame) {
  this.context = context;
  this.queueIndex = 0;
  this.spriteQueue = spriteQueue;
  this.positionAdjustment = positionAdjustment;
  this.restFrame = restFrame;
  this.restTicks = 15;
  // this.restTicks = 1;
  this.restTickCount = 0;
}

DodgeSprite.prototype.update = function() {
  let sprite = this.spriteQueue[this.queueIndex];
  if (this.queueIndex === this.restFrame[0] && sprite.frameIndex === this.restFrame[1]) {
    this.restTickCount += 1;
    if (this.restTickCount >= this.restTicks) {
      this.restTickCount = 0;
      sprite.update();
    }
  } else {
    if (sprite.frameIndex === sprite.numberOfFrames - 1 &&
      sprite.tickCount === sprite.ticksPerFrame) {
        this.updateQueueIndexAndSprite();
      }
  }
}

DodgeSprite.prototype.updateQueueIndexAndSprite = function() {
  let sprite = this.spriteQueue[this.queueIndex].update();
  this.queueIndex = (this.queueIndex + 1) % this.spriteQueue.length;
}

DodgeSprite.prototype.render = function(row, col, sF) {
  let sprite = this.spriteQueue[this.queueIndex];
debugger;
  if (sprite.frameIndex === this.restFrame[0] && sprite.frameIndex === this.restFrame[1]) {
    debugger;
    this.spriteQueue[this.queueIndex].renderStationaryFrame(row, col, sF);
  } else {
    debugger;
    this.spriteQueue[this.queueIndex].render(row, col, sF);
    this.update();
  }
}

DodgeSprite.prototype.renderFromCoordinates = function(x, y, sF) {
  let deltaX = 0;
  let deltaY = 0;
  let queueI = this.queueIndex;
  let spriteI = this.spriteQueue[this.queueIndex].frameIndex;
  if (this.positionAdjustment[[queueI,spriteI]]) {
    deltaX = this.positionAdjustment[[queueI,spriteI]][0];
    deltaY = this.positionAdjustment[[queueI,spriteI]][1];
  }

  // this.spriteQueue[this.queueIndex].renderFromCoordinatesSpecial(x, y, sF);
  // this.update();
  // debugger;
  let sprite = this.spriteQueue[this.queueIndex];
  if (this.queueIndex === this.restFrame[0] && sprite.frameIndex === this.restFrame[1]) {
    this.spriteQueue[this.queueIndex].renderStationaryFrame(x + deltaX, y + deltaY, sF);
    this.update();
  } else {
    this.spriteQueue[this.queueIndex].renderFromCoordinatesSpecial(x + deltaX, y + deltaY, sF);
    // this.spriteQueue[this.queueIndex].render(row, col, sF);
    this.update();
  }

}

DodgeSprite.prototype.renderCurrentFrame = function(x, y, sF) {
  let deltaX = 0;
  let deltaY = 0;
  let queueI = this.queueIndex;
  let spriteI = this.spriteQueue[this.queueIndex].frameIndex;
  if (this.positionAdjustment[[queueI,spriteI]]) {
    deltaX = this.positionAdjustment[[queueI,spriteI]][0];
    deltaY = this.positionAdjustment[[queueI,spriteI]][1];
  }

  this.spriteQueue[this.queueIndex].renderCurrentFrame(x + deltaX, y + deltaY, sF);
}


DodgeSprite.prototype.renderStationaryFrame = function(x, y, sF) {
  this.spriteQueue[this.queueIndex].renderStationaryFrame(x, y, sF);
}
