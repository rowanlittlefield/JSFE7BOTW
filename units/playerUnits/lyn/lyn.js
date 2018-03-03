function Lyn(board, inventory, stats) {
  PlayerUnit.call(
    this,
    stats,
    board,
    inventory,
    'Lyn',
    new Sprite(c, 18, 18, 18, 18, "units/playerUnits/lyn/lynMapSpriteSheet.png", 6, 12),
    new Sprite(c, 23, 19, 23, 19, "units/playerUnits/lyn/lynForwardWalkSpriteSheet.png", 6, 6),
    new Sprite(c, 21, 18, 21, 18, "units/playerUnits/lyn/lynBackwardWalkSpriteSheet.png", 8, 4),
    new Sprite(c, 26, 17, 26, 17, "units/playerUnits/lyn/lynRightWalkSpriteSheet.png", 8, 4),
    new Sprite(c, 165, 158, 18, 18, "units/playerUnits/lyn/lynHPWindowSprite3.jpg", 6, 1),
    new LynCombatAnimation()
  );
}

Lyn.prototype = Object.create(PlayerUnit.prototype);
Lyn.prototype.constructor = Lyn;

Lyn.prototype.defaultStats = function() {
  return new UnitStats(
    1, 0, 31, 14, 17, 15, 15, 6, 8, 6, 6, 70, 40, 60, 60, 55, 20, 30, "wind"
  );
}
