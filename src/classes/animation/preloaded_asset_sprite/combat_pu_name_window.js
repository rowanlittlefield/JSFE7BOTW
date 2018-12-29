import PreloadedAssetSprite from '@/animation/preloaded_asset_sprite/preloaded_asset_sprite';
import battleAssetImage from '@/animation/preloaded_asset_sprite/battle_asset_image';

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
