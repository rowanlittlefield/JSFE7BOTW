import CombatSprite from '@/animation/sprite_sequence/combat_sprite';
import Sprite from '@/animation/sprite/sprite';

function LynCombatAnimation() {
  let desSprites0 = new Sprite(90, 50, 90, 50, 'src/assets/combat_spritesheets/lyn/lynCombatSprite0.png', 3, 12);
  let desSprites1 = new Sprite(100, 41, 100, 41, 'src/assets/combat_spritesheets/lyn/lynCombatSprite1.png', 3, 8);
  let desSprites2 = new Sprite(90, 46, 90, 46, 'src/assets/combat_spritesheets/lyn/lynCombatSprite2.png', 3, 8);
  let desSprites3 = new Sprite(90, 48, 90, 48, 'src/assets/combat_spritesheets/lyn/lynCombatSprite3.png', 3, 6);

  let spriteQueue = [desSprites0, desSprites1, desSprites2, desSprites3];

  let positionAdjustment = {
    "0,5": [-0.5, 0],
    "0,6": [-2.9, 0],
    "0,7": [-2.9, 0],
    "0,8": [-2.9, 0],
    "0,9": [-2.9, 0],
    "0,10": [-2.9, 0],
    "0,11": [-2.9, 0],

    "1,0": [-2.3, 0],
    "1,1": [-2.3, 0],
    "1,2": [-2.3, 0],
    "1,3": [-6.5, 0],
    "1,4": [-6.5, 0],
    "1,5": [-6.5, 0],
    "1,6": [-6.5, 0],
    "1,7": [-6.5, 0],
    "1,8": [-6.5, 0],

    "2,0": [-6.5, 0],
    "2,1": [-6.0, -0.6],
    "2,2": [-5.9, -1.6],
    "2,3": [-5.0, -2.4],
    "2,4": [-4.0, -2.3],
    "2,5": [-3.1, -1.7],
    "2,6": [-2.5, -1.2],
    "2,7": [-2.2, -1.0],


    "3,0": [-1.7, 0],
    "3,1": [-1.4, 0],
    "3,2": [-1.4, 0],
    "3,3": [-1.4, 0],
    "3,4": [-1.4, 0],
    "3,5": [-1.4, 0]

  };

  let damageFrame = [1, 3];

  CombatSprite.call(
    this,
    spriteQueue,
    positionAdjustment,
    damageFrame
  );
}

LynCombatAnimation.prototype = Object.create(CombatSprite.prototype);
LynCombatAnimation.prototype.constructor = LynCombatAnimation;

export default LynCombatAnimation;
