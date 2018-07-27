function LynReceiveHitAnimation() {
  const sprite0 = new Sprite(c, 70, 43, 70, 43, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynReceiveHitSprite.png', 2, 1);
  const spriteQueue = [sprite0];
  const positionAdjustment = {};

  SpriteSequence.call(
    this,
    c,
    spriteQueue,
    positionAdjustment
  );
  this.rendered = false;
}

LynReceiveHitAnimation.prototype = Object.create(SpriteSequence.prototype);
LynReceiveHitAnimation.prototype.constructor = LynReceiveHitAnimation;

LynReceiveHitAnimation.prototype.render = function(row, col, sF) {
  this.currentSprite().render(row, col, sF);
  this.update();
}

LynReceiveHitAnimation.prototype.update = function() {
  const sprite = this.currentSprite();
  if (sprite.frameIndex === sprite.numberOfFrames - 1 &&
    sprite.tickCount === sprite.ticksPerFrame) {
    this.updateQueueIndexAndSprite();
  }
}
