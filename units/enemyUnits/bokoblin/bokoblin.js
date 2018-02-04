function Bokoblin(board, inventory, behavior) {
  EnemyUnit.call(
    this,
    {
      level: 1,
      experience: 0,
      hp: 18,
      strength: 5,
      skill: 5,
      speed: 7,
      luck: 7,
      defense: 5,
      resistance: 0,
      move: 4,
      constitution: 7,
      aid: 0,
      hp_growth_rate: 80,
      strength_growth_rate: 45,
      skill_growth_rate: 50,
      speed_growth_rate: 40,
      luck_growth_rate: 45,
      defense_growth_rate: 30,
      resistance_growth_rate: 35,
      affinity: "wind",
      condition: null
    },
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
