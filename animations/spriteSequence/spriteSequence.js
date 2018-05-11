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
  let dP = this.getPositionAdj();
  this.currentSprite().renderCurrentFrame(x + dP[0], y + dP[1], sF);
}

SpriteSequence.prototype.renderStationaryFrame = function(x, y, sF) {
  this.currentSprite().renderStationaryFrame(x, y, sF);
}

SpriteSequence.prototype.renderFromCoordinates = function(x, y, sF) {
  let dP = this.getPositionAdj();
  this.renderDecision(x, y, dP, sF);
  this.update();
}

SpriteSequence.prototype.renderDecision = function(x, y, dP, sF) {
  this.currentSprite().renderFromCoordinatesSpecial(x + dP[0], y + dP[1], sF);
}

//private methods

SpriteSequence.prototype.currentSprite = function() {
  return this.spriteQueue[this.queueIndex];
}

SpriteSequence.prototype.getPositionAdj = function() {
  let spriteI = this.currentSprite().frameIndex;
  if (this.positionAdjustment[[this.queueIndex,spriteI]]) {
    return this.positionAdjustment[[this.queueIndex,spriteI]];
  } else {
    return [0, 0];
  }
}

SpriteSequence.prototype.renderedAnimation = function() {
  return (this.queueIndex === 0 && this.currentSprite().isFirstFrame());
}
