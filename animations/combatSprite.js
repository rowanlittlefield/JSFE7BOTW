function CombatSprite(context, spriteQueue, positionAdjustment, damageFrame) {
  SpriteSequence.call(this, context, spriteQueue, positionAdjustment);

  this.damageFrame = damageFrame;
}

CombatSprite.prototype = Object.create(SpriteSequence.prototype);
CombatSprite.prototype.constructor = CombatSprite;

CombatSprite.prototype.update = function() {
  let sprite = this.spriteQueue[this.queueIndex];
  if (sprite.frameIndex === sprite.numberOfFrames - 1 &&
    sprite.tickCount === sprite.ticksPerFrame) {
    this.updateQueueIndexAndSprite();
  }
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
