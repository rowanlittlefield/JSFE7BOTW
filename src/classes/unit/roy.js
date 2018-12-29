import PlayerUnit from '@/unit/player_unit';
import * as mapSprite from '@/animation/sprite/roy_map_sprites';
import { RoyMugshotSprite } from '@/animation/sprite/mugshot_sprites';
import RoyCombatAnimation from '@/animation/combat_animation/roy_combat_animation';
import RoyCritCombatAnimation from '@/animation/combat_animation/roy_crit_combat_animation';
import RoyDodgeAnimation from '@/animation/combat_animation/roy_dodge_animation';
import RoyReceiveHitAnimation from '@/animation/combat_animation/roy_receive_hit_sprite';
import UnitStats from '@/unit_attribute/unit_stats';
import Inventory from '@/unit_attribute/inventory'
import { SwordOfSeals } from '@/item/weapon';

export default class Roy extends PlayerUnit {
  constructor(board, unitOptions) {
    super(
      board,
      unitOptions,
    );    
  }

  defaultUnitOptions() {
    return ({
      name: 'Roy',
      stats: this.defaultStats(),
      inventory: this.defaultInventory(),
      stationaryMapSprite: new mapSprite.RoyStationaryMapSprite(),
      forwardWalkMapSprite: new mapSprite.RoyForwardWalkMapSprite(),
      backwardsWalkMapSprite: new mapSprite.RoyBackwardsWalkMapSprite(),
      rightWalkMapSprite: new mapSprite.RoyRightWalkMapSprite(),
      leftWalkMapSprite: new mapSprite.RoyLeftWalkMapSprite(),
      postActionMapSprite: new mapSprite.RoyPostActionMapSprite(),
      mugshotSprite: new RoyMugshotSprite(),
      combatAnimation: new RoyCombatAnimation(),
      critCombatAnimation: new RoyCritCombatAnimation(),
      dodgeAnimation: new RoyDodgeAnimation(),
      receiveHitAnimation: new RoyReceiveHitAnimation(),
    });
  }

  defaultStats() {
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

  defaultInventory() {
    return (
      new Inventory([
        new SwordOfSeals(),
      ])
    );
  }
}
