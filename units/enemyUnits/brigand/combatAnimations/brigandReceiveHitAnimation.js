function BrigandReceiveHitAnimation() {
  const sprites0 = new Sprite(c, 70, 39, 70, 39, 'units/enemyUnits/brigand/combatAnimations/spriteSheets/brigandReceiveHitSprite.png', 2, 1);
  const spriteQueue = [sprites0];
  const positionAdjustment = {};

  SpriteSequence.call(
    this,
    c,
    spriteQueue,
    positionAdjustment
  );

  this.rendered = false;
}

BrigandReceiveHitAnimation.prototype = Object.create(SpriteSequence.prototype);
BrigandReceiveHitAnimation.prototype.constructor = BrigandReceiveHitAnimation;

BrigandReceiveHitAnimation.prototype.render = function(row, col, sF) {
  this.currentSprite().render(row, col, sF);
  this.update();
}

BrigandReceiveHitAnimation.prototype.update = function() {
  const sprite = this.currentSprite();
  if (sprite.frameIndex === sprite.numberOfFrames - 1 &&
    sprite.tickCount === sprite.ticksPerFrame) {
    this.updateQueueIndexAndSprite();
  }
}
