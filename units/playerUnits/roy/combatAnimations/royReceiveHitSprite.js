function RoyReceiveHitAnimation() {
  const sprite0 = new Sprite(c, 70, 43, 70, 43, 'units/playerUnits/roy/combatAnimations/spriteSheets/royReceiveHitSprite.png', 2, 1);
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

RoyReceiveHitAnimation.prototype = Object.create(SpriteSequence.prototype);
RoyReceiveHitAnimation.prototype.constructor = RoyReceiveHitAnimation;

RoyReceiveHitAnimation.prototype.render = function(row, col, sF) {
  this.currentSprite().render(row, col, sF);
  this.update();
}

RoyReceiveHitAnimation.prototype.update = function() {
  const sprite = this.currentSprite();
  if (sprite.frameIndex === sprite.numberOfFrames - 1 &&
    sprite.tickCount === sprite.ticksPerFrame) {
    this.updateQueueIndexAndSprite();
  }
}
