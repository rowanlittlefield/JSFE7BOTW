function RoyCritCombatAnimation() {

  let sprite0 = new Sprite(c, 70, 43, 70, 43, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite0.png', 3, 6);
  let sprite1 = new Sprite(c, 46, 32, 46, 32, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite.png', 3, 6);
  let sprite2 = new Sprite(c, 64, 42, 64, 42, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite2.png', 3, 6);
  let sprite3 = new Sprite(c, 64, 67, 64, 67, 'units/playerUnits/roy/combatAnimations/royCritSprite3.png', 2, 6);
  let sprite4 = new Sprite(c, 64, 74, 64, 74, 'units/playerUnits/roy/combatAnimations/royCritSprite4.png', 2, 6);
  let sprite5 = new Sprite(c, 64, 74, 64, 74, 'units/playerUnits/roy/combatAnimations/royCritSprite5.png', 2, 6);
  let sprite6 = new Sprite(c, 64, 68, 64, 68, 'units/playerUnits/roy/combatAnimations/royCritSprite6.png', 2, 8);
  let sprite7 = new Sprite(c, 64, 61, 64, 61, 'units/playerUnits/roy/combatAnimations/royCritSprite7.png', 2, 3);
  let sprite8 = new Sprite(c, 150, 55, 150, 55, 'units/playerUnits/roy/combatAnimations/royCritSprite8.png', 2, 7);
  let sprite9 = new Sprite(c, 150, 42, 150, 42, 'units/playerUnits/roy/combatAnimations/royCritSprite9.png', 2, 3);
  let sprite10 = new Sprite(c, 150, 76, 150, 76, 'units/playerUnits/roy/combatAnimations/royCritSprite10.png', 2, 5);
  let sprite11 = new Sprite(c, 100, 31, 100, 31, 'units/playerUnits/roy/combatAnimations/royCritSprite11.png', 2, 7);
  let sprite12 = new Sprite(c, 100, 36, 100, 36, 'units/playerUnits/roy/combatAnimations/royCritSprite12.png', 2, 7);

  // let sprite4 = new Sprite(c, 90, 52, 90, 52, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite4.png', 3, 4);
  // let sprite5 = new Sprite(c, 110, 67, 110, 67, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite5.png', 3, 2);
  // let sprite6 = new Sprite(c, 90, 35, 90, 35, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite6.png', 3, 7);
  // let sprite7 = new Sprite(c, 140, 40, 140, 40, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite7.png', 3, 6);
  // let sprite8 = new Sprite(c, 120, 47, 120, 47, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite8.png', 3, 6);
  // let sprite9 = new Sprite(c, 90, 32, 90, 32, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite9.png', 3, 6);
  // let sprite10 = new Sprite(c, 90, 32, 90, 32, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite10.png', 3, 5);
  // let sprite11 = new Sprite(c, 90, 102, 90, 102, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite11.png', 3, 10);
  // let sprite12 = new Sprite(c, 90, 50, 90, 50, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite12.png', 3, 7);

  let spriteQueue = [
    sprite0, sprite1, sprite2, sprite3, sprite4, sprite5, sprite6,
    sprite7, sprite8, sprite9, sprite10, sprite11, sprite12
  ];

  let positionAdjustment = {
    "9,0": [0, 0.1],
    "9,1": [0, 0.1],
    "9,2": [0, 0.1],

    "12,1": [0, 0.03],
    "12,1": [-0.22, 0.055],
    "12,2": [-0.22, 0.055],
    "12,3": [-0.22, 0.055],
    "12,4": [-0.22, 0.055],
    "12,5": [-0.22, 0.055],
    "12,6": [-0.22, 0.055]
  };

  let damageFrame = [11, 0];

  CombatSprite.call(
    this,
    c,
    spriteQueue,
    positionAdjustment,
    damageFrame
  );
}

RoyCritCombatAnimation.prototype = Object.create(CombatSprite.prototype);
RoyCritCombatAnimation.prototype.constructor = RoyCritCombatAnimation;
