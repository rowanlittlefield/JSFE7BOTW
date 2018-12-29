import EnemyUnit from '@/unit/enemy_unit';
import * as mapSprite from '@/animation/sprite/brigand_map_sprites';
import { BrigandMugshotSprite } from '@/animation/sprite/mugshot_sprites';
import BrigandCombatAnimation from '@/animation/combat_animation/brigand_combat_animation';
import LynDodgeAnimation from '@/animation/combat_animation/lyn_combat_animation';
import BrigandReceiveHitAnimation from '@/animation/combat_animation/brigand_receive_hit_animation';
import UnitStats from '@/unit_attribute/unit_stats';

export default class Brigand extends EnemyUnit {
  constructor(board, inventory, behavior, stats) {
    super(
      stats,
      board,
      inventory,
      'Brigand',
      new mapSprite.BrigandStationaryMapSprite(),
      new mapSprite.BrigandForwardWalkMapSprite(),
      new mapSprite.BrigandBackwardsWalkMapSprite(),
      new mapSprite.BrigandRightWalkMapSprite(),
      new mapSprite.BrigandLeftWalkMapSprite(),
      new mapSprite.BrigandPostActionMapSprite(),
      new BrigandMugshotSprite(),
      new BrigandCombatAnimation(),
      new BrigandCombatAnimation(),
      new LynDodgeAnimation(),
      new BrigandReceiveHitAnimation,
      behavior
    )
  }

  defaultStats() {
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
}
