function DodgeSprite(context, spriteQueue, positionAdjustment, restFrame) {
  SpriteSequence.call(this, context, spriteQueue, positionAdjustment);

  this.restFrame = restFrame;
  this.restTicks = 15;
  this.restTickCount = 0;
}

DodgeSprite.prototype = Object.create(SpriteSequence.prototype);
DodgeSprite.prototype.constructor = DodgeSprite;

DodgeSprite.prototype.update = function() {
  let sprite = this.currentSprite();
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

DodgeSprite.prototype.renderDecision = function(x, y, deltaX, deltaY, sprite, sF) {
  if (this.queueIndex === this.restFrame[0] && sprite.frameIndex === this.restFrame[1]) {
    this.currentSprite().renderStationaryFrame(x + deltaX, y + deltaY, sF);
  } else {
    this.currentSprite().renderFromCoordinatesSpecial(x + deltaX, y + deltaY, sF);
  }
}
