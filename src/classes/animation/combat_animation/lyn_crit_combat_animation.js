import CombatSprite from '@/animation/sprite_sequence/combat_sprite';
import Sprite from '@/animation/sprite/sprite';

function LynCritCombatAnimation() {
  let sprite0 = new Sprite(90, 50, 90, 50, 'src/assets/combat_spritesheets/lyn/lynCombatSprite0.png', 4, 5);
  let sprite1 = new Sprite(140, 35, 140, 35, 'src/assets/combat_spritesheets/lyn/lynCritSpriteSheet1.png', 4, 8);
  let spriteNull1 = new Sprite(155, 141, 155, 141, 'src/assets/combat_spritesheets/lyn/lynCritSpriteSheetNull.png', 16, 1);

  let sprite2 = new Sprite(155, 141, 155, 141, 'src/assets/combat_spritesheets/lyn/lynCritSpriteSheet2.png', 1, 1);
  let sprite3 = new Sprite(155, 141, 155, 141, 'src/assets/combat_spritesheets/lyn/lynCritSpriteSheet3.png', 1, 1);
  let spriteNull2 = new Sprite(155, 141, 155, 141, 'src/assets/combat_spritesheets/lyn/lynCritSpriteSheetNull.png', 1, 1);
  let sprite4 = new Sprite(155, 141, 155, 141, 'src/assets/combat_spritesheets/lyn/lynCritSpriteSheet3.png', 2, 1);
  let spriteNull3 = new Sprite(155, 141, 155, 141, 'src/assets/combat_spritesheets/lyn/lynCritSpriteSheetNull.png', 2, 1);
  let sprite5 = new Sprite(155, 141, 155, 141, 'src/assets/combat_spritesheets/lyn/lynCritSpriteSheet3.png', 4, 1);
  let spriteNull4 = new Sprite(155, 141, 155, 141, 'src/assets/combat_spritesheets/lyn/lynCritSpriteSheetNull.png', 3, 1);
  let sprite6 = new Sprite(155, 141, 155, 141, 'src/assets/combat_spritesheets/lyn/lynCritSpriteSheet3.png', 3, 1);
  let spriteNull5 = new Sprite(155, 141, 155, 141, 'src/assets/combat_spritesheets/lyn/lynCritSpriteSheetNull.png', 3, 1);
  let sprite7 = new Sprite(155, 141, 155, 141, 'src/assets/combat_spritesheets/lyn/lynCritSpriteSheet3.png', 3, 1);

  let spriteNull6 = new Sprite(155, 141, 155, 141, 'src/assets/combat_spritesheets/lyn/lynCritSpriteSheetNull.png', 15, 1);
  let sprite8 = new Sprite(50, 87, 50, 87, 'src/assets/combat_spritesheets/lyn/lynCritSpriteSheet4.png', 1, 2);
  let sprite9 = new Sprite(110, 28, 110, 28, 'src/assets/combat_spritesheets/lyn/lynCritSpriteSheet5.png', 1, 2);
  let sprite10 = new Sprite(110, 28, 110, 28, 'src/assets/combat_spritesheets/lyn/lynCritSpriteSheet6.png', 1, 2);
  let sprite11 = new Sprite(173, 44, 173, 44, 'src/assets/combat_spritesheets/lyn/lynCritSpriteSheet7.png', 2, 1);
  let sprite12 = new Sprite(100, 41, 100, 41, 'src/assets/combat_spritesheets/lyn/lynCombatSprite1.png', 4, 3);

  let sprite13 = new Sprite(90, 46, 90, 46, 'src/assets/combat_spritesheets/lyn/lynCombatSprite2.png', 2, 8);
  let sprite14 = new Sprite(90, 48, 90, 48, 'src/assets/combat_spritesheets/lyn/lynCombatSprite3.png', 3, 6);



  let positionAdjustment = {
    "3,0": [-3.6, 2.8],

    "4,0": [-3.6, 2.8],

    "6,0": [-3.6, 2.8],

    "8,0": [-3.6, 2.8],

    "10,0": [-3.6, 2.8],

    "12,0": [-3.6, 2.8],

    "15,0": [-3.6, 0],
    "15,1": [-3.6, 0],

    "17,0": [-3.6, -0.5],
    "17,1": [-3.6, -0.5],

    "19,0": [-3.9, 0.5],
    "19,1": [-3.9, 0.5],


    "24,0": [-2.4, -8.2],
    "24,1": [-2.2, -7.7],
    "24,2": [-2, -6.9],
    "24,3": [-1.9, -6.2],
    "24,4": [-1.9, -4.7],
    "24,5": [-1.8, -3.4],
    "24,6": [-1.6, -2.2],
    "24,7": [-1.4, -1.0],


    "25,0": [-1.7, 0],
    "25,1": [-1.4, 0],
    "25,2": [-1.4, 0],
    "25,3": [-1.4, 0],
    "25,4": [-1.4, 0],
    "25,5": [-1.4, 0]

  };

  let damageFrame = [24, 0];

  let spriteQueue = [
    sprite0, sprite1, spriteNull1,

    sprite2, sprite3, spriteNull2,
    sprite4,spriteNull3, sprite5, spriteNull4, sprite6, spriteNull5,
    sprite7, spriteNull1,

    spriteNull6, sprite8, spriteNull6, sprite9, spriteNull6, sprite10, spriteNull6, sprite11, spriteNull6,

      sprite12, sprite13, sprite14
];

  CombatSprite.call(
    this,
    spriteQueue,
    positionAdjustment,
    damageFrame
  );

}

LynCritCombatAnimation.prototype = Object.create(CombatSprite.prototype);
LynCritCombatAnimation.prototype.constructor = LynCritCombatAnimation;

export default LynCritCombatAnimation;
