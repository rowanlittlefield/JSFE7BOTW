import CombatSprite from '@/animation/sprite_sequence/combat_sprite';
import Sprite from '@/animation/sprite/sprite';

function BrigandCombatAnimation() {
  let sprites0 = new Sprite(70, 39, 70, 39, 'src/assets/combat_spritesheets/brigand/brigandCombatSprite0.png', 6, 4);
  let sprites1 = new Sprite(70, 74, 70, 74, 'src/assets/combat_spritesheets/brigand/brigandCombatSprite1.png', 6, 1);
  let sprites2 = new Sprite(70, 74, 70, 74, 'src/assets/combat_spritesheets/brigand/brigandCombatSprite2.png', 4, 6);
  let sprites3 = new Sprite(90, 35, 90, 35, 'src/assets/combat_spritesheets/brigand/brigandCombatSprite3.png', 2, 4);
  let sprites4 = new Sprite(90, 48, 90, 48, 'src/assets/combat_spritesheets/brigand/brigandCombatSprite4.png', 4, 6);
  let sprites5 = new Sprite(70, 33, 70, 33, 'src/assets/combat_spritesheets/brigand/brigandCombatSprite5.png', 6, 2);

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

    '4,0' : [2.5, 0],
    '4,1' : [2.1, -0.2],
    '4,2' : [1.7, -0.3],
    '4,3' : [1.4, -0.4],
    '4,4' : [1.1, -0.3],
    '4,5' : [0.7, -0.1]
  };

  let damageFrame = [3, 2];

  CombatSprite.call(
    this,
    spriteQueue,
    positionAdjustment,
    damageFrame
  );
}

BrigandCombatAnimation.prototype = Object.create(CombatSprite.prototype);
BrigandCombatAnimation.prototype.constructor = BrigandCombatAnimation;

export default BrigandCombatAnimation;
