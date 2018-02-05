function Link(board, inventory, stats) {
  PlayerUnit.call(
    this,
    stats,
    board,
    inventory,
    'Link',
    new Sprite(c, 288, 368, 18, 18, "units/playerUnits/link/link_sprite_two.png", 6, 1),
    new Sprite(c, 22, 20, 22, 20, "units/playerUnits/roy/royForwardWalkSpriteSheetRevise.png", 6, 6),
    new Sprite(c, 21, 18, 21, 18, "units/playerUnits/roy/royBackwardsWalkSpriteSheet.png", 8, 4),
    new Sprite(c, 26, 18, 26, 18, "units/playerUnits/roy/royRightWalkSpriteSheet.png", 8, 4),
    new Sprite(c, 800, 774, 18, 18, "units/playerUnits/link/botwLinkChibiHead.jpg", 6, 1)
    );
}

Link.prototype = Object.create(PlayerUnit.prototype);
Link.prototype.constructor = Link;

Link.prototype.defaultStats = function() {
  return new UnitStats(
    1, 0, 18, 5, 5, 7, 7, 5, 0, 4, 7, 80, 45, 50, 40, 45, 30, 35, "wind"
  );
}
