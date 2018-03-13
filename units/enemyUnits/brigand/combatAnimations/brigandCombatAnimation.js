function BrigandCombatAnimation() {
  let sprites0 = new Sprite(c, 70, 39, 70, 39, 'units/enemyUnits/brigand/combatAnimations/spriteSheets/brigandCombatSprite0.png', 6, 4);
  let sprites1 = new Sprite(c, 70, 74, 70, 74, 'units/enemyUnits/brigand/combatAnimations/spriteSheets/brigandCombatSprite1.png', 6, 1);
  let sprites2 = new Sprite(c, 70, 74, 70, 74, 'units/enemyUnits/brigand/combatAnimations/spriteSheets/brigandCombatSprite2.png', 4, 6);
  let sprites3 = new Sprite(c, 90, 35, 90, 35, 'units/enemyUnits/brigand/combatAnimations/spriteSheets/brigandCombatSprite3.png', 6, 7);
  let sprites4 = new Sprite(c, 90, 48, 90, 48, 'units/enemyUnits/brigand/combatAnimations/spriteSheets/brigandCombatSprite4.png', 4, 6);
  let sprites5 = new Sprite(c, 70, 33, 70, 33, 'units/enemyUnits/brigand/combatAnimations/spriteSheets/brigandCombatSprite5.png', 6, 2);

  let spriteQueue = [
    sprites0, sprites1, sprites2, sprites3, sprites4, sprites5
  ];

  let positionAdjustment = {
    '2,0' : [0.15, 0],
    '2,1' : [0.30, -0.3],
    '2,2' : [0.45, -0.5],
    '2,3' : [0.60, -0.6],
    '2,4' : [0.75, -0.5],
    '2,5' : [0.9, -0.3],

    '3,0' : [2.5, 0],
    '3,1' : [2.5, 0],
    '3,2' : [2.5, 0],
    '3,3' : [2.5, 0],
    '3,4' : [2.5, 0],
    '3,5' : [2.5, 0],
    '3,6' : [2.5, 0],

    '4,0' : [2.5, 0],
    '4,1' : [2.1, -0.2],
    '4,2' : [1.7, -0.3],
    '4,3' : [1.4, -0.4],
    '4,4' : [1.1, -0.3],
    '4,5' : [0.7, -0.1]
  };

  let damageFrame = [3, 1];

  CombatSprite.call(
    this,
    c,
    spriteQueue,
    positionAdjustment,
    damageFrame
  );

  // let baddieSprite = new CombatSprite(c, spriteQueue, positionAdjustment, damageFrame);
}

BrigandCombatAnimation.prototype = Object.create(CombatSprite.prototype);
BrigandCombatAnimation.prototype.constructor = BrigandCombatAnimation;