import CombatSprite from '@/animation/sprite_sequence/combat_sprite';
import Sprite from '@/animation/sprite/sprite';

function RoyCritCombatAnimation() {

  let sprite0 = new Sprite(70, 43, 70, 43, 'src/assets/combat_spritesheets/roy/royCombatSprite0.png', 3, 6);
  let sprite1 = new Sprite(46, 32, 46, 32, 'src/assets/combat_spritesheets/roy/royCombatSprite.png', 3, 6);
  let sprite2 = new Sprite(64, 42, 64, 42, 'src/assets/combat_spritesheets/roy/royCombatSprite2.png', 3, 6);
  let sprite3 = new Sprite(64, 67, 64, 67, 'src/assets/combat_spritesheets/roy/royCritSprite3.png', 2, 6);
  let sprite4 = new Sprite(64, 74, 64, 74, 'src/assets/combat_spritesheets/roy/royCritSprite4.png', 2, 6);
  let sprite5 = new Sprite(64, 74, 64, 74, 'src/assets/combat_spritesheets/roy/royCritSprite5.png', 2, 6);
  let sprite6 = new Sprite(64, 68, 64, 68, 'src/assets/combat_spritesheets/roy/royCritSprite6.png', 2, 8);
  let sprite7 = new Sprite(64, 61, 64, 61, 'src/assets/combat_spritesheets/roy/royCritSprite7.png', 2, 3);
  let sprite8 = new Sprite(150, 55, 150, 55, 'src/assets/combat_spritesheets/roy/royCritSprite8.png', 2, 7);
  let sprite9 = new Sprite(150, 42, 150, 42, 'src/assets/combat_spritesheets/roy/royCritSprite9.png', 1, 3);
  let sprite10 = new Sprite(150, 76, 150, 76, 'src/assets/combat_spritesheets/roy/royCritSprite10.png', 1, 5);
  let sprite11 = new Sprite(100, 31, 100, 31, 'src/assets/combat_spritesheets/roy/royCritSprite11.png', 2, 7);
  let sprite12 = new Sprite(100, 36, 100, 36, 'src/assets/combat_spritesheets/roy/royCritSprite12.png', 4, 7);

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
    spriteQueue,
    positionAdjustment,
    damageFrame
  );
}

RoyCritCombatAnimation.prototype = Object.create(CombatSprite.prototype);
RoyCritCombatAnimation.prototype.constructor = RoyCritCombatAnimation;

export default RoyCritCombatAnimation;
