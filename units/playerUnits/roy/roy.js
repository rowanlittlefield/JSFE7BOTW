function Roy(board, inventory, stats) {
  PlayerUnit.call(
    this,
    stats,
    board,
    inventory,
    'Roy',
    new Sprite(c, 18, 18, 18, 18, "units/playerUnits/roy/royMapSpriteSheetBlankBackground.png", 6, 12),
    new Sprite(c, 22, 20, 22, 20, "units/playerUnits/roy/royForwardWalkSpriteSheetRevise.png", 6, 6),
    new Sprite(c, 21, 18, 21, 18, "units/playerUnits/roy/royBackwardsWalkSpriteSheet.png", 8, 4),
    new Sprite(c, 34, 18, 34, 18, "units/playerUnits/roy/royRightWalkSpriteSheet.png", 8, 4),
    new Sprite(c, 217, 210, 18, 18, "units/playerUnits/roy/royHPWindowSprite.png", 6, 1)
  );
}

Roy.prototype = Object.create(PlayerUnit.prototype);
Roy.prototype.constructor = Roy;

Roy.prototype.defaultStats = function() {
  return new UnitStats(
    1, 0, 42, 16, 19, 22, 17, 14, 7, 6, 8, 80, 40, 50, 40, 60, 25, 30, "wind"
  );
}
