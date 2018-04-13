function LynCritCombatAnimation() {
  let sprite0 = new Sprite(c, 90, 50, 90, 50, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCombatSprite0.png', 4, 5);
  let sprite1 = new Sprite(c, 140, 35, 140, 35, 'units/playerUnits/lyn/combatAnimations/lynCritSpriteSheet1.png', 4, 8);
  let spriteNull1 = new Sprite(c, 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/lynCritSpriteSheetNull.png', 16, 1);
  let sprite2 = new Sprite(c, 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/lynCritSpriteSheet2.png', 4, 1);
  let sprite3 = new Sprite(c, 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/lynCritSpriteSheet3.png', 4, 1);
  let spriteNull2 = new Sprite(c, 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/lynCritSpriteSheetNull.png', 3, 1);
  let sprite4 = new Sprite(c, 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/lynCritSpriteSheet3.png', 5, 1);
  let spriteNull3 = new Sprite(c, 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/lynCritSpriteSheetNull.png', 4, 1);
  let sprite5 = new Sprite(c, 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/lynCritSpriteSheet3.png', 8, 1);
  let spriteNull4 = new Sprite(c, 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/lynCritSpriteSheetNull.png', 5, 1);
  let sprite6 = new Sprite(c, 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/lynCritSpriteSheet3.png', 6, 1);
  let spriteNull5 = new Sprite(c, 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/lynCritSpriteSheetNull.png', 7, 1);
  let sprite7 = new Sprite(c, 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/lynCritSpriteSheet3.png', 7, 1);
  let sprite8 = new Sprite(c, 50, 87, 50, 87, 'units/playerUnits/lyn/combatAnimations/lynCritSpriteSheet4.png', 15, 2);
  let sprite9 = new Sprite(c, 110, 28, 110, 28, 'units/playerUnits/lyn/combatAnimations/lynCritSpriteSheet5.png', 15, 2);
  let sprite10 = new Sprite(c, 110, 28, 110, 28, 'units/playerUnits/lyn/combatAnimations/lynCritSpriteSheet6.png', 15, 2);
  let sprite11 = new Sprite(c, 173, 44, 173, 44, 'units/playerUnits/lyn/combatAnimations/lynCritSpriteSheet7.png', 15, 1);
  let sprite12 = new Sprite(c, 100, 41, 100, 41, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCombatSprite1.png', 7, 3);
  let sprite13 = new Sprite(c, 90, 46, 90, 46, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCombatSprite2.png', 3, 8);
  let sprite14 = new Sprite(c, 90, 48, 90, 48, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCombatSprite3.png', 3, 6);



  let positionAdjustment = {
    "3,0": [-3.6, 2.8],

    "4,0": [-3.6, 2.8],

    "6,0": [-3.6, 2.8],

    "8,0": [-3.6, 2.8],

    "10,0": [-3.6, 2.8],

    "12,0": [-3.6, 2.8],

    "18,0": [-6.5, 0],
    "18,1": [-6.0, -0.6],
    "18,2": [-5.9, -1.6],
    "18,3": [-5.0, -2.4],
    "18,4": [-4.0, -2.3],
    "18,5": [-3.1, -1.7],
    "18,6": [-2.5, -1.2],
    "18,7": [-2.2, -1.0],


    "19,0": [-1.7, 0],
    "19,1": [-1.4, 0],
    "19,2": [-1.4, 0],
    "19,3": [-1.4, 0],
    "19,4": [-1.4, 0],
    "19,5": [-1.4, 0]


  };

  let damageFrame = [0, 0];

  let spriteQueue = [sprite0, sprite1,spriteNull1, sprite2, sprite3, spriteNull2, sprite4,
  spriteNull3, sprite5, spriteNull4, sprite6, spriteNull5, sprite7, sprite8, sprite9, sprite10, sprite11, sprite12,
  sprite13, sprite14];

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
