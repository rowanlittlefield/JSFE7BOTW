function SpriteSequence(context, spriteQueue, positionAdjustment) {
  this.context = context;
  this.queueIndex = 0;
  this.spriteQueue = spriteQueue;
  this.positionAdjustment = positionAdjustment;
}

SpriteSequence.prototype.updateQueueIndexAndSprite = function() {
  let sprite = this.spriteQueue[this.queueIndex].update();
  this.queueIndex = (this.queueIndex + 1) % this.spriteQueue.length;
}

SpriteSequence.prototype.renderCurrentFrame = function(x, y, sF) {
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

SpriteSequence.prototype.renderStationaryFrame = function(x, y, sF) {
  this.spriteQueue[this.queueIndex].renderStationaryFrame(x, y, sF);
}
