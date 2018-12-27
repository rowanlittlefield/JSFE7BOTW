import SpriteSequence from '../../../../animations/spriteSequence/spriteSequence';
import Sprite from '../../../../animations/sprite';

function RoyReceiveHitAnimation() {
  const sprite0 = new Sprite(70, 43, 70, 43, 'src/assets/combat_spritesheets/roy/royReceiveHitSprite.png', 4, 1);
  const spriteQueue = [sprite0];
  const positionAdjustment = {};

  SpriteSequence.call(
    this,
    spriteQueue,
    positionAdjustment
  );
  this.rendered = false;
}

RoyReceiveHitAnimation.prototype = Object.create(SpriteSequence.prototype);
RoyReceiveHitAnimation.prototype.constructor = RoyReceiveHitAnimation;

RoyReceiveHitAnimation.prototype.render = function(row, col, sF) {
  const currentSprite = this.currentSprite();
  currentSprite.render(row, col, sF);
  this.update();
  if(this.queueIndex === 0 && currentSprite.frameIndex === 0 &&
    currentSprite.tickCount === 0) {
    this.rendered = true;
  }
}

RoyReceiveHitAnimation.prototype.update = function() {
  const sprite = this.currentSprite();
  if (sprite.frameIndex === sprite.numberOfFrames - 1 &&
    sprite.tickCount === sprite.ticksPerFrame) {
    this.updateQueueIndexAndSprite();
  }
}

export default RoyReceiveHitAnimation;
