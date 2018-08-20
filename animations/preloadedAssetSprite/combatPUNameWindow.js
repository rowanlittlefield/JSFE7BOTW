import PreloadedAssetSprite from './preloadedAssetSprite';
import battleAssetImage from './battleAssetImage';

function CombatPUNameWindow() {
  //[sx, sy, width, height, renderWidth, renderHeight, numTicks]
  const renderList = [
    [384, 1, 69, 32, 69, 32, 1]
  ];

  PreloadedAssetSprite.call(
    this,
    battleAssetImage,
    renderList
  );
}

CombatPUNameWindow.prototype = Object.create(PreloadedAssetSprite.prototype);
CombatPUNameWindow.prototype.constructor = CombatPUNameWindow;

export default CombatPUNameWindow;
