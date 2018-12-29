import PlayerUnit from '@/unit/player_unit';
import * as mapSprite from '@/animation/sprite/lyn_map_sprites'
import { LynMugshotSprite } from '@/animation/sprite/mugshot_sprites'
import LynCombatAnimation from '@/animation/combat_animation/lyn_combat_animation';
import LynCritCombatAnimation from '@/animation/combat_animation/lyn_crit_combat_animation';
import LynDodgeAnimation from '@/animation/combat_animation/lyn_dodge_animation';
import LynReceiveHitAnimation from '@/animation/combat_animation/lyn_receive_hit_animation';
import UnitStats from '@/unit_attribute/unit_stats';
import Inventory from '@/unit_attribute/inventory';
import { ManiKatti } from '@/item/weapon';

export default class Lyn extends PlayerUnit {
  constructor(board, inventory, stats) {
    super(
      stats,
      board,
      inventory,
      'Lyn',
      new mapSprite.LynStationaryMapSprite(),
      new mapSprite.LynForwardWalkMapSprite(),
      new mapSprite.LynBackwardsWalkMapSprite(),
      new mapSprite.LynRightWalkMapSprite(),
      new mapSprite.LynLeftWalkMapSprite(),
      new mapSprite.LynPostActionMapSprite(),
      new LynMugshotSprite(),
      new LynCombatAnimation(),
      new LynCritCombatAnimation(),
      new LynDodgeAnimation(),
      new LynReceiveHitAnimation()
    );
  }

  defaultStats() {
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

  defaultInventory() {
    return (
      new Inventory([
        new ManiKatti(),
      ])
    );
  }
}

