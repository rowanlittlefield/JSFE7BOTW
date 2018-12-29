import EnemyUnit from '@/unit/enemy_unit';
import Sprite from '@/animation/sprite/sprite';
import BrigandCombatAnimation from '@/animation/combat_animation/brigand_combat_animation';
import LynDodgeAnimation from '@/animation/combat_animation/lyn_combat_animation';
import BrigandReceiveHitAnimation from '@/animation/combat_animation/brigand_receive_hit_animation';
import UnitStats from '@/unit_attribute/unit_stats';

function Brigand(board, inventory, behavior, stats) {
  EnemyUnit.call(
    this,
    stats,
    board,
    inventory,
    'Brigand',
    new Sprite(18, 18, 18, 18, "src/assets/map_spritesheets/brigandMapSprite.png", 6, 12),
    new Sprite(22, 25, 22, 25, "src/assets/map_spritesheets/brigandForwardWalkSpriteSheet.png", 6, 4),
    new Sprite(22, 25, 22, 25, "src/assets/map_spritesheets/brigandBackwardsWalkSprite.png", 8, 4),
    new Sprite(22, 27, 22, 27, "src/assets/map_spritesheets/brigandRightWalkSprite.png", 8, 4),
    new Sprite(22, 27, 22, 27, "src/assets/map_spritesheets/brigandLeftWalkSprite.png", 8, 4),
    new Sprite(18, 18, 18, 18, "src/assets/map_spritesheets/brigandMapSpritePostAction.png", 6, 12),
    new Sprite(80, 72, 18, 18, "src/assets/mugshots/brigandHPWindowSprite.png", 6, 1),
    new BrigandCombatAnimation(),
    new BrigandCombatAnimation(),
    new LynDodgeAnimation(),
    new BrigandReceiveHitAnimation,
    behavior
    );
}

Brigand.prototype = Object.create(EnemyUnit.prototype);
Brigand.prototype.constructor = Brigand;

Brigand.prototype.defaultStats = function() {
  return new UnitStats(
    {
      level: 1,
      experience: 0,
      hp: 20,
      strength: 5,
      skill: 1,
      speed: 5,
      luck: 0,
      defense: 3,
      resistance: 0,
      move: 5,
      constitution: 12,
      hp_growth_rate: 82,
      strength_growth_rate: 50,
      skill_growth_rate: 30,
      speed_growth_rate: 20,
      luck_growth_rate: 15,
      defense_growth_rate: 10,
      resistance_growth_rate: 13,
      affinity: "wind"
    }
  );
}

export default Brigand;
