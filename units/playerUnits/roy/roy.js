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
    new Sprite(c, 34, 18, 34, 18, "units/playerUnits/roy/royLeftWalkSpriteSheet.png", 8, 4),
    new Sprite(c, 253, 228, 18, 18, "units/playerUnits/roy/RoyMugshotZoom.jpg", 6, 1),
    new RoyCombatAnimation()
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
      move: 6,
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
