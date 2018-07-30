import DodgeSprite from  '../../../../animations/spriteSequence/dodgeSprite';
import Sprite from '../../../../animations/sprite';
import { c } from '../../../../createContext';


function LynDodgeAnimation() {
  let desSprites0 = new Sprite(c, 70, 35, 70, 35, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynDodgeSpriteSheet.png', 3, 3);

  let spriteQueue = [desSprites0];

  let positionAdjustment = {
  };

  let restFrame = [0, 1];

  DodgeSprite.call(
    this,
    c,
    spriteQueue,
    positionAdjustment,
    restFrame
  );

}

LynDodgeAnimation.prototype = Object.create(DodgeSprite.prototype);
LynDodgeAnimation.prototype.constructor = LynDodgeAnimation;

export default LynDodgeAnimation;
