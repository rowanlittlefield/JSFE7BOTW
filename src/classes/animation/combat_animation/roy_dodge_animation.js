import DodgeSprite from  '@/animation/sprite_sequence/dodge_sprite';
import Sprite from '@/animation/sprite/sprite';

function RoyDodgeAnimation() {
  let desSprites0 = new Sprite(70, 33, 70, 33, 'src/assets/combat_spritesheets/roy/royDodgeSpriteSheet.png', 3, 3);

  let spriteQueue = [desSprites0];

  let positionAdjustment = {
    '0,0': [0, 0.11],
    '0,1': [0, 0.11],
    '0,2': [0, 0.11]
  };

  let restFrame = [0, 1];

  DodgeSprite.call(
    this,
    spriteQueue,
    positionAdjustment,
    restFrame
  );

}

RoyDodgeAnimation.prototype = Object.create(DodgeSprite.prototype);
RoyDodgeAnimation.prototype.constructor = RoyDodgeAnimation;

export default RoyDodgeAnimation;
