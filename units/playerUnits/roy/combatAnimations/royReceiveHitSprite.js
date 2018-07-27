function RoyReceiveHitAnimation() {
  const sprite0 = new Sprite(c, 70, 43, 70, 43, 'units/playerUnits/roy/combatAnimations/spriteSheets/royReceiveHitSprite.png', 3, 1);

  const spriteQueue = [sprite0];

  const positionAdjustment = {
    // '2,0' : [0.15, 0],
    // '2,1' : [0.30, -0.3],
    // '2,2' : [0.45, -0.5],
    // '2,3' : [0.60, -0.6],
    // '2,4' : [0.75, -0.5],
    // '2,5' : [0.9, -0.3],
    //
    // '3,0' : [2.5, 0],
    // '3,1' : [2.5, 0],
    // '3,2' : [2.5, 0],
    // '3,3' : [2.5, 0],
    //
    // '4,0' : [2.5, 0],
    // '4,1' : [2.1, -0.2],
    // '4,2' : [1.7, -0.3],
    // '4,3' : [1.4, -0.4],
    // '4,4' : [1.1, -0.3],
    // '4,5' : [0.7, -0.1]
  };

  // const damageFrame = [3, 2];

  SpriteSequence.call(
    this,
    c,
    spriteQueue,
    positionAdjustment
  );
}

RoyReceiveHitAnimation.prototype = Object.create(SpriteSequence.prototype);
RoyReceiveHitAnimation.prototype.constructor = RoyReceiveHitAnimation;

RoyReceiveHitAnimation.prototype.render = function(row, col, sF) {
  this.currentSprite().render(row, col, sF);
  this.update();
}
