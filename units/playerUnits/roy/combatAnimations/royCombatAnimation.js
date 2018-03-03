function RoyCombatAnimation() {

  let sprite0 = new Sprite(c, 70, 43, 70, 43, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite0.png', 3, 6);
  let sprite1 = new Sprite(c, 46, 32, 46, 32, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite.png', 3, 6);
  let sprite2 = new Sprite(c, 64, 42, 64, 42, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite2.png', 3, 6);
  let sprite3 = new Sprite(c, 64, 61, 64, 61, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite3.png', 3, 6);
  let sprite4 = new Sprite(c, 90, 52, 90, 52, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite4.png', 3, 4);
  let sprite5 = new Sprite(c, 110, 67, 110, 67, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite5.png', 3, 2);
  let sprite6 = new Sprite(c, 90, 35, 90, 35, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite6.png', 3, 7);
  let sprite7 = new Sprite(c, 140, 40, 140, 40, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite7.png', 3, 6);
  let sprite8 = new Sprite(c, 120, 47, 120, 47, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite8.png', 3, 6);
  let sprite9 = new Sprite(c, 90, 32, 90, 32, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite9.png', 3, 6);
  let sprite10 = new Sprite(c, 90, 32, 90, 32, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite10.png', 3, 5);
  let sprite11 = new Sprite(c, 90, 102, 90, 102, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite11.png', 3, 10);
  let sprite12 = new Sprite(c, 90, 50, 90, 50, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite12.png', 3, 7);

  let spriteQueue = [
    sprite0, sprite1, sprite2, sprite3, sprite4, sprite5, sprite6,
    sprite7, sprite8, sprite9, sprite10, sprite11, sprite12
  ];

  let positionAdjustment = {
    "6,0": [-2.9, 0],
    "6,1": [-2.9, 0],
    "6,2": [-2.9, 0],
    "6,3": [-2.9, 0],
    "6,4": [-2.9, 0],
    "6,5": [-2.9, 0],
    "6,6": [-2.9, 0],

    "7,0": [-2.9, 0],
    "7,1": [-2.9, 0],
    "7,2": [-2.9, 0],
    "7,3": [-2.9, 0],
    "7,4": [-2.9, 0],
    "7,5": [-2.9, 0],

    "8,0": [-2.9, 0],
    "8,1": [-2.9, 0],
    "8,2": [-2.9, 0],
    "8,3": [-2.9, 0],
    "8,4": [-2.9, 0],
    "8,5": [-2.9, 0],

    "9,0": [-2.9, 0],
    "9,1": [-2.9, 0],
    "9,2": [-2.9, 0],
    "9,3": [-2.9, 0],
    "9,4": [-2.9, 0],
    "9,5": [-2.9, 0],

    "10,0": [-2.9, 0],
    "10,1": [-2.9, 0],
    "10,2": [-2.9, 0],
    "10,3": [-2.9, 0],
    "10,4": [-2.9, 0],

    "11,0": [-2.7, 0],
    "11,1": [-2.5, 0],
    "11,2": [-2.3, 0],
    "11,3": [-2.1, 0],
    "11,4": [-1.9, 0],
    "11,5": [-1.7, 0],
    "11,6": [-1.5, 0],
    "11,7": [-1.3, 0],
    "11,8": [-1.1, 0],
    "11,9": [-0.9, 0],

    "12,0": [-0.7, 0],
    "12,1": [-0.5, 0],
    "12,2": [-0.39, 0],
    "12,3": [-0.39, 0],
    "12,4": [-0.39, 0],
    "12,5": [-0.39, 0],
    "12,6": [-0.39, 0]
  };

  let damageFrame = [6, 0];

  CombatSprite.call(
    this,
    c,
    spriteQueue,
    positionAdjustment,
    damageFrame
  );
}

RoyCombatAnimation.prototype = Object.create(CombatSprite.prototype);
RoyCombatAnimation.prototype.constructor = RoyCombatAnimation;
