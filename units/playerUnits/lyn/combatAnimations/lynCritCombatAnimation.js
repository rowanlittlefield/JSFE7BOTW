function LynCritCombatAnimation() {
  let sprite0 = new Sprite(c, 90, 50, 90, 50, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCombatSprite0.png', 4, 5);
  let sprite1 = new Sprite(c, 140, 35, 140, 35, 'units/playerUnits/lyn/combatAnimations/lynCritSpriteSheet1.png', 4, 8);
  let spriteNull1 = new Sprite(c, 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/lynCritSpriteSheetNull.png', 16, 1);
  let sprite2 = new Sprite(c, 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/lynCritSpriteSheet2.png', 80, 1);
  let sprite3 = new Sprite(c, 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/lynCritSpriteSheet3.png', 80, 1);

  let positionAdjustment = {
    "3,0": [-3.6, 2.8],
    "4,0": [-3.6, 2.8],

  };

  let damageFrame = [0, 0];


  let spriteQueue = [sprite0, sprite1,spriteNull1, sprite2, sprite3];

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
