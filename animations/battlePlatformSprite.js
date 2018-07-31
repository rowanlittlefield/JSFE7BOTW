import CoordinateSprite from './coordinateSprite';
import { c } from '../createContext';

function BattlePlatformSprite() {
  CoordinateSprite.call(
    this,
    c,
    194,//width
    57,//height
    194*1.125,//renderWidth

    57*1.125,//renderHeight

    'animations/BattlePlatformSprite.png',//image
    1,//ticksPerFrame

    [
      [0, 0]
    ]//coordinatesList
  );

}

BattlePlatformSprite.prototype = Object.create(CoordinateSprite.prototype);
BattlePlatformSprite.prototype.constructor = BattlePlatformSprite;

export default BattlePlatformSprite;
