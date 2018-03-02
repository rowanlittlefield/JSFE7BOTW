function CombatSprite(context, spriteQueue, positionAdjustment, damageFrame) {
  this.context = context;
  this.queueIndex = 0;
  this.spriteQueue = spriteQueue;
  this.positionAdjustment = positionAdjustment;
  this.damageFrame = damageFrame;
}

CombatSprite.prototype.update = function() {
  let sprite = this.spriteQueue[this.queueIndex];
  if (sprite.frameIndex === sprite.numberOfFrames - 1 &&
    sprite.tickCount === sprite.ticksPerFrame) {
    this.updateQueueIndexAndSprite();
  }
}

CombatSprite.prototype.updateQueueIndexAndSprite = function() {
  let sprite = this.spriteQueue[this.queueIndex].update();
  this.queueIndex = (this.queueIndex + 1) % this.spriteQueue.length;
}

CombatSprite.prototype.render = function(row, col, sF) {
  this.spriteQueue[this.queueIndex].render(row, col, sF);
  this.update();
}

CombatSprite.prototype.renderFromCoordinates = function(x, y, sF) {
  let deltaX = 0;
  let deltaY = 0;
  let queueI = this.queueIndex;
  let spriteI = this.spriteQueue[this.queueIndex].frameIndex;
  if (this.positionAdjustment[[queueI,spriteI]]) {
    deltaX = this.positionAdjustment[[queueI,spriteI]][0];
    deltaY = this.positionAdjustment[[queueI,spriteI]][1];
  }

  this.spriteQueue[this.queueIndex].renderFromCoordinatesSpecial(x + deltaX, y + deltaY, sF);
  this.update();
}

CombatSprite.prototype.renderStationaryFrame = function(x, y, sF) {
  this.spriteQueue[this.queueIndex].renderStationaryFrame(x, y, sF);
}
