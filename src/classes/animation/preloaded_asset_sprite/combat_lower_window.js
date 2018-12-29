import PreloadedAssetSprite from '@/animation/preloaded_asset_sprite/preloaded_asset_sprite';
import battleAssetImage from '@/animation/preloaded_asset_sprite/battle_asset_image';

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
