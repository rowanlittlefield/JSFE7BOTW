import PlayerUnit from '@/unit/player_unit';
import Sprite from '../../../animations/sprite';
import LynCombatAnimation from '@/animation/combat_animation/lyn_combat_animation';
import LynCritCombatAnimation from '@/animation/combat_animation/lyn_crit_combat_animation';
import LynDodgeAnimation from '@/animation/combat_animation/lyn_dodge_animation';
import LynReceiveHitAnimation from '@/animation/combat_animation/lyn_receive_hit_animation';
import UnitStats from '@/unit_attribute/unit_stats';


function Lyn(board, inventory, stats) {
  PlayerUnit.call(
    this,
    stats,
    board,
    inventory,
    'Lyn',
    new Sprite(18, 18, 18, 18, "src/assets/map_spritesheets/lynMapSpriteSheet.png", 6, 12),
    new Sprite(23, 19, 23, 19, "src/assets/map_spritesheets/lynForwardWalkSpriteSheet.png", 6, 6),
    new Sprite(21, 18, 21, 18, "src/assets/map_spritesheets/lynBackwardWalkSpriteSheet.png", 8, 4),
    new Sprite(26, 17, 26, 17, "src/assets/map_spritesheets/lynRightWalkSpriteSheet.png", 8, 4),
    new Sprite(26, 17, 26, 17, "src/assets/map_spritesheets/lynLeftWalkSpriteSheet.png", 8, 4),

    new Sprite(18, 18, 18, 18, "src/assets/map_spritesheets/lynMapSpriteSheetPostAction.png", 6, 12),

    new Sprite(165, 158, 18, 18, "src/assets/mugshots/lynHPWindowSprite3.jpg", 6, 1),
    new LynCombatAnimation(),
    new LynCritCombatAnimation(),
    new LynDodgeAnimation(),
    new LynReceiveHitAnimation()
  );
}

Lyn.prototype = Object.create(PlayerUnit.prototype);
Lyn.prototype.constructor = Lyn;

Lyn.prototype.defaultStats = function() {
  return new UnitStats(
    {
      level: 1,
      experience: 0,
      hp: 31,
      strength: 14,
      skill: 17,
      speed: 15,
      luck: 15,
      defense: 6,
      resistance: 8,
      move: 6,
      constitution: 6,
      hp_growth_rate: 70,
      strength_growth_rate: 40,
      skill_growth_rate: 60,
      speed_growth_rate: 60,
      luck_growth_rate: 55,
      defense_growth_rate: 20,
      resistance_growth_rate: 30,
      affinity: "wind"
    }
  );
}

export default Lyn;
