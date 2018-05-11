function CombatSprite(context, spriteQueue, positionAdjustment, damageFrame) {
  SpriteSequence.call(this, context, spriteQueue, positionAdjustment);

  this.damageFrame = damageFrame;
}

CombatSprite.prototype = Object.create(SpriteSequence.prototype);
CombatSprite.prototype.constructor = CombatSprite;

CombatSprite.prototype.update = function() {
  let sprite = this.currentSprite();
  if (sprite.frameIndex === sprite.numberOfFrames - 1 &&
    sprite.tickCount === sprite.ticksPerFrame) {
    this.updateQueueIndexAndSprite();
  }
}

CombatSprite.prototype.render = function(row, col, sF) {
  this.currentSprite().render(row, col, sF);
  this.update();
}

CombatSprite.prototype.onDamageFrame = function() {
  return (this.queueIndex === this.damageFrame[0] &&
  this.currentSprite().frameIndex === this.damageFrame[1]);
}
