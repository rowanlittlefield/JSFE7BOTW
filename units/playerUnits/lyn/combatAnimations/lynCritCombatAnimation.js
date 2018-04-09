function LynCritCombatAnimation() {
  let sprite0 = new Sprite(c, 90, 50, 90, 50, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCombatSprite0.png', 4, 5);
  let sprite1 = new Sprite(c, 140, 35, 140, 35, 'units/playerUnits/lyn/combatAnimations/lynCritSpriteSheet1.png', 4, 8);
  let positionAdjustment = {

  };

  let damageFrame = [0, 0];


  let spriteQueue = [sprite0, sprite1];

  CombatSprite.call(
    this,
    c,
    spriteQueue,
    positionAdjustment,
    damageFrame
  );

}

LynCritCombatAnimation.prototype = Object.create(CombatSprite.prototype);
LynCritCombatAnimation.prototype.constructor = LynCritCombatAnimation;
