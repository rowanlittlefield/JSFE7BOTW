function Zelda(board, inventory, stats) {
  PlayerUnit.call(
    this,
    stats,
    board,
    inventory,
    'Zelda',
    new Sprite(c, 173, 344, 18, 18, "units/playerUnits/zelda/zelda_sprite.png", 6, 1),
    new Sprite(c, 22, 20, 22, 20, "units/playerUnits/roy/royForwardWalkSpriteSheetRevise.png", 6, 6),
    new Sprite(c, 21, 18, 21, 18, "units/playerUnits/roy/royBackwardsWalkSpriteSheet.png", 8, 4),
    new Sprite(c, 26, 18, 26, 18, "units/playerUnits/roy/royRightWalkSpriteSheet.png", 8, 4),
    new Sprite(c, 568, 560, 18, 18, "units/playerUnits/zelda/zeldaHPWindowSprite.png", 6, 1)
  );
}

Zelda.prototype = Object.create(PlayerUnit.prototype);
Zelda.prototype.constructor = Zelda;

Zelda.prototype.defaultStats = function() {
  return new UnitStats(
    1, 0, 15, 7, 8, 7, 10, 2, 4, 5, 5, 40, 80, 40, 35, 80, 20, 90, "wind"
  );
}
