function Brigand(board, inventory, behavior, stats) {
  EnemyUnit.call(
    this,
    stats,
    board,
    inventory,
    'Brigand',
    new Sprite(c, 18, 18, 18, 18, "units/enemyUnits/brigand/brigandMapSprite.png", 6, 12),
    new Sprite(c, 22, 25, 22, 25, "units/enemyUnits/brigand/brigandForwardWalkSpriteSheet.png", 6, 4),
    new Sprite(c, 22, 25, 22, 25, "units/enemyUnits/brigand/brigandBackwardsWalkSprite.png", 8, 4),
    new Sprite(c, 22, 27, 22, 27, "units/enemyUnits/brigand/brigandRightWalkSprite.png", 8, 4),
    new Sprite(c, 80, 72, 18, 18, "units/enemyUnits/brigand/brigandHPWindowSprite.png", 6, 1),
    new BrigandCombatAnimation(),
    behavior
    );
}

Brigand.prototype = Object.create(EnemyUnit.prototype);
Brigand.prototype.constructor = Brigand;

Brigand.prototype.defaultStats = function() {
  return new UnitStats(
    1, 0, 20, 5, 1, 5, 0, 3, 0, 5, 12, 82, 50, 30, 20, 15, 10, 13, "wind"
  );
}
