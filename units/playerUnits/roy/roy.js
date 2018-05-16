function Roy(board, inventory, stats) {
  PlayerUnit.call(
    this,
    stats,
    board,
    inventory,
    'Roy',
    new Sprite(c, 18, 18, 18, 18, "units/playerUnits/roy/mapSpriteSheets/royMapSpriteSheetBlankBackground.png", 6, 12),
    new Sprite(c, 22, 20, 22, 20, "units/playerUnits/roy/mapSpriteSheets/royForwardWalkSpriteSheetRevise.png", 6, 6),
    new Sprite(c, 21, 18, 21, 18, "units/playerUnits/roy/mapSpriteSheets/royBackwardsWalkSpriteSheet.png", 8, 4),
    new Sprite(c, 34, 18, 34, 18, "units/playerUnits/roy/mapSpriteSheets/royRightWalkSpriteSheet.png", 8, 4),
    new Sprite(c, 34, 18, 34, 18, "units/playerUnits/roy/mapSpriteSheets/royLeftWalkSpriteSheet.png", 8, 4),
    new Sprite(c, 253, 228, 18, 18, "units/playerUnits/roy/HPWindowImage/RoyMugshotZoom.jpg", 6, 1),
    new RoyCombatAnimation(),
    new RoyCritCombatAnimation(),
    new RoyDodgeAnimation(),
  );
}

Roy.prototype = Object.create(PlayerUnit.prototype);
Roy.prototype.constructor = Roy;

Roy.prototype.defaultStats = function() {
  return new UnitStats(
    {
      level: 1,
      experience: 0,
      hp: 42,
      strength: 16,
      skill: 19,
      speed: 22,
      luck: 17,
      defense: 14,
      resistance: 7,
      move: 2,
      constitution: 8,
      hp_growth_rate: 80,
      strength_growth_rate: 40,
      skill_growth_rate: 50,
      speed_growth_rate: 40,
      luck_growth_rate: 60,
      defense_growth_rate: 25,
      resistance_growth_rate: 30,
      affinity: "wind"
    }
  );
}
