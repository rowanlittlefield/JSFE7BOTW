function Zelda(board, inventory) {

  PlayerUnit.call(
    this,
    {
      level: 1,
      experience: 0,
      hp: 15,
      strength: 7,
      skill: 8,
      speed: 7,
      luck: 10,
      defense: 2,
      resistance: 4,
      move: 5,
      constitution: 5,
      aid: 0,
      hp_growth_rate: 40,
      strength_growth_rate: 80,
      skill_growth_rate: 40,
      speed_growth_rate: 35,
      luck_growth_rate: 80,
      defense_growth_rate: 20,
      resistance_growth_rate: 90,
      affinity: "wind",
      condition: null
    },
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
