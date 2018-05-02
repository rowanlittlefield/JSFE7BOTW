function SpriteSequence(context, spriteQueue, positionAdjustment) {
  this.context = context;
  this.queueIndex = 0;
  this.spriteQueue = spriteQueue;
  this.positionAdjustment = positionAdjustment;
}

SpriteSequence.prototype.updateQueueIndexAndSprite = function() {
  let sprite = this.currentSprite().update();
  this.queueIndex = (this.queueIndex + 1) % this.spriteQueue.length;
}

SpriteSequence.prototype.renderCurrentFrame = function(x, y, sF) {
  let deltaX = 0;
  let deltaY = 0;
  let queueI = this.queueIndex;
  let spriteI = this.currentSprite().frameIndex;
  if (this.positionAdjustment[[queueI,spriteI]]) {
    deltaX = this.positionAdjustment[[queueI,spriteI]][0];
    deltaY = this.positionAdjustment[[queueI,spriteI]][1];
  }

  this.currentSprite().renderCurrentFrame(x + deltaX, y + deltaY, sF);
}

SpriteSequence.prototype.renderStationaryFrame = function(x, y, sF) {
  this.currentSprite().renderStationaryFrame(x, y, sF);
}

SpriteSequence.prototype.renderFromCoordinates = function(x, y, sF) {
  let deltaX = 0;
  let deltaY = 0;
  let queueI = this.queueIndex;
  let spriteI = this.currentSprite().frameIndex;
  if (this.positionAdjustment[[queueI,spriteI]]) {
    deltaX = this.positionAdjustment[[queueI,spriteI]][0];
    deltaY = this.positionAdjustment[[queueI,spriteI]][1];
  }

  let sprite = this.currentSprite();
  this.renderDecision(x, y, deltaX, deltaY, sprite, sF);
  this.update();
}

SpriteSequence.prototype.renderDecision = function(x, y, deltaX, deltaY, sprite, sF) {
  this.currentSprite().renderFromCoordinatesSpecial(x + deltaX, y + deltaY, sF);
}

//private methods

SpriteSequence.prototype.currentSprite = function() {
  return this.spriteQueue[this.queueIndex];
}
