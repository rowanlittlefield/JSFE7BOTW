// import PlayerUnit from '../playerUnit';
import PlayerUnit from '@/../../units/playerUnits/playerUnit';
import Sprite from '../../../animations/sprite';
import RoyCombatAnimation from './combatAnimations/royCombatAnimation';
import RoyCritCombatAnimation from './combatAnimations/royCritCombatAnimation';
import RoyDodgeAnimation from './combatAnimations/royDodgeAnimation';
import RoyReceiveHitAnimation from './combatAnimations/royReceiveHitSprite';
import UnitStats from '../../unitStats/unitStats';

function Roy(board, inventory, stats) {
  PlayerUnit.call(
    this,
    stats,
    board,
    inventory,
    'Roy',
    new Sprite(18, 18, 18, 18, "src/assets/map_spritesheets/royMapSpriteSheetBlankBackground.png", 6, 12),
    new Sprite(22, 20, 22, 20, "src/assets/map_spritesheets/royForwardWalkSpriteSheetRevise.png", 6, 6),
    new Sprite(21, 18, 21, 18, "src/assets/map_spritesheets/royBackwardsWalkSpriteSheet.png", 8, 4),
    new Sprite(34, 18, 34, 18, "src/assets/map_spritesheets/royRightWalkSpriteSheet.png", 8, 4),
    new Sprite(34, 18, 34, 18, "src/assets/map_spritesheets/royLeftWalkSpriteSheet.png", 8, 4),
    new Sprite(18, 18, 18, 18, "src/assets/map_spritesheets/royMapSpriteSheetBlankBackgroundPostAction.png", 6, 12),
    new Sprite(253, 228, 18, 18, "src/assets/mugshots/RoyMugshotZoom.jpg", 6, 1),
    new RoyCombatAnimation(),
    new RoyCritCombatAnimation(),
    new RoyDodgeAnimation(),
    new RoyReceiveHitAnimation()
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

export default Roy;
