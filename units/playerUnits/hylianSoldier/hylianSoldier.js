function HylianSoldier(board, inventory, stats) {
  PlayerUnit.call(
    this,
    stats,
    board,
    inventory,
    'Hylian Soldier',
    new Sprite(c, 154, 252, 18, 18, "units/playerUnits/hylianSoldier/hylianSoldierSprite.png", 6, 1),
    new Sprite(c, 22, 20, 22, 20, "units/playerUnits/roy/royForwardWalkSpriteSheetRevise.png", 6, 6),
    new Sprite(c, 21, 18, 21, 18, "units/playerUnits/roy/royBackwardsWalkSpriteSheet.png", 8, 4),
    new Sprite(c, 26, 18, 26, 18, "units/playerUnits/roy/royRightWalkSpriteSheet.png", 8, 4),
    new Sprite(c, 154, 252, 18, 18, "units/playerUnits/hylianSoldier/hylianSoldierSprite.png", 6, 1)
    );
}

HylianSoldier.prototype = Object.create(PlayerUnit.prototype);
HylianSoldier.prototype.constructor = HylianSoldier;

HylianSoldier.prototype.defaultStats = function() {
  return new UnitStats(
    1, 0, 18, 4, 4, 5, 0, 4, 0, 5, 5, 80, 40, 50, 45, 25, 40, 35, "wind"
  );
}
