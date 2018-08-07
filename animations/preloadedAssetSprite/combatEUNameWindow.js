import PreloadedAssetSprite from './preloadedAssetSprite';
import battleAssetImage from './battleAssetImage';
import { c } from '../../createContext';

function CombatEUNameWindow() {
  //[sx, sy, width, height, renderWidth, renderHeight, numTicks]
  const renderList = [
    [245, 34, 67, 31, 67, 31, 1]
  ];

  PreloadedAssetSprite.call(
    this,
    c,
    battleAssetImage,
    renderList
  );
}

CombatEUNameWindow.prototype = Object.create(PreloadedAssetSprite.prototype);
CombatEUNameWindow.prototype.constructor = CombatEUNameWindow;

export default CombatEUNameWindow;