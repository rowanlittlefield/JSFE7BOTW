import SpriteSequence from '../../../../animations/spriteSequence/spriteSequence';
import Sprite from '../../../../animations/sprite';

function LynReceiveHitAnimation() {
  const sprite0 = new Sprite(70, 43, 70, 43, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynReceiveHitSprite.png', 4, 1);
  const spriteQueue = [sprite0];
  const positionAdjustment = {};

  SpriteSequence.call(
    this,
    spriteQueue,
    positionAdjustment
  );
  this.rendered = false;
}

LynReceiveHitAnimation.prototype = Object.create(SpriteSequence.prototype);
LynReceiveHitAnimation.prototype.constructor = LynReceiveHitAnimation;

LynReceiveHitAnimation.prototype.render = function(row, col, sF) {
  const currentSprite = this.currentSprite();
  currentSprite.render(row, col, sF);
  this.update();
  if(this.queueIndex === 0 && currentSprite.frameIndex === 0 &&
    currentSprite.tickCount === 0) {
    this.rendered = true;
  }
}

LynReceiveHitAnimation.prototype.update = function() {
  const sprite = this.currentSprite();
  if (sprite.frameIndex === sprite.numberOfFrames - 1 &&
    sprite.tickCount === sprite.ticksPerFrame) {
    this.updateQueueIndexAndSprite();
  }
}

export default LynReceiveHitAnimation;
