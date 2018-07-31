import DodgeSprite from  '../../../../animations/spriteSequence/dodgeSprite';
import Sprite from '../../../../animations/sprite';
import { c } from '../../../../createContext';

function RoyDodgeAnimation() {
  let desSprites0 = new Sprite(c, 70, 33, 70, 33, 'units/playerUnits/roy/combatAnimations/spriteSheets/royDodgeSpriteSheet.png', 3, 3);

  let spriteQueue = [desSprites0];

  let positionAdjustment = {
    '0,0': [0, 0.11],
    '0,1': [0, 0.11],
    '0,2': [0, 0.11]
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

RoyDodgeAnimation.prototype = Object.create(DodgeSprite.prototype);
RoyDodgeAnimation.prototype.constructor = RoyDodgeAnimation;

export default RoyDodgeAnimation;
