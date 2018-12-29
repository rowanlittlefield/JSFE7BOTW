import DodgeSprite from  '@/animation/sprite_sequence/dodge_sprite';
import Sprite from '@/animation/sprite/sprite';


function LynDodgeAnimation() {
  let desSprites0 = new Sprite(70, 35, 70, 35, 'src/assets/combat_spritesheets/lyn/lynDodgeSpriteSheet.png', 3, 3);

  let spriteQueue = [desSprites0];

  let positionAdjustment = {
  };

  let restFrame = [0, 1];

  DodgeSprite.call(
    this,
    spriteQueue,
    positionAdjustment,
    restFrame
  );

}

LynDodgeAnimation.prototype = Object.create(DodgeSprite.prototype);
LynDodgeAnimation.prototype.constructor = LynDodgeAnimation;

export default LynDodgeAnimation;
