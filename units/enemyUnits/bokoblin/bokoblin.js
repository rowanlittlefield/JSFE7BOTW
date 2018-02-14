function Bokoblin(board, inventory, behavior, stats) {
  EnemyUnit.call(
    this,
    stats,
    board,
    inventory,
    'Bokoblin',
    new Sprite(c, 533, 607, 18, 18, "units/enemyUnits/bokoblin/bokoblin_sprite.png", 6, 1),
    new Sprite(c, 22, 20, 22, 20, "units/playerUnits/roy/royForwardWalkSpriteSheetRevise.png", 6, 6),
    new Sprite(c, 21, 18, 21, 18, "units/playerUnits/roy/royBackwardsWalkSpriteSheet.png", 8, 4),
    new Sprite(c, 26, 18, 26, 18, "units/playerUnits/roy/royRightWalkSpriteSheet.png", 8, 4),
    new Sprite(c, 200, 200, 18, 18, "units/enemyUnits/bokoblin/bokoblinHPWindowSprite.jpg", 6, 1),
    behavior
    );
}


Bokoblin.prototype = Object.create(EnemyUnit.prototype);
Bokoblin.prototype.constructor = Bokoblin;

Bokoblin.prototype.defaultStats = function() {
  return new UnitStats(
    1, 0, 20, 5, 1, 5, 0, 3, 0, 5, 12, 82, 50, 30, 20, 15, 10, 13, "wind"
  );
}
