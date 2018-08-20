import PreloadedAssetSprite from './preloadedAssetSprite';
import battleAssetImage from './battleAssetImage';

function CombatLowerWindow() {
  //[sx, sy, width, height, renderWidth, renderHeight, numTicks]
  const renderList = [
    [244, 191, 242, 56, 242*1.15, 56*0.93, 1]
  ];

  PreloadedAssetSprite.call(
    this,
    battleAssetImage,
    renderList
  );
}

CombatLowerWindow.prototype = Object.create(PreloadedAssetSprite.prototype);
CombatLowerWindow.prototype.constructor = CombatLowerWindow;

export default CombatLowerWindow;
