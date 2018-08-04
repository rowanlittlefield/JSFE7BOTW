import PlayerUnit from '../playerUnit';
import Sprite from '../../../animations/sprite';
import { c } from '../../../createContext';
import LynCombatAnimation from './combatAnimations/lynCombatAnimation';
import LynCritCombatAnimation from './combatAnimations/lynCritCombatAnimation';
import LynDodgeAnimation from './combatAnimations/lynDodgeAnimation';
import LynReceiveHitAnimation from './combatAnimations/lynReceiveHitAnimation';
import UnitStats from '../../unitStats/unitStats';


function Lyn(board, inventory, stats) {
  PlayerUnit.call(
    this,
    stats,
    board,
    inventory,
    'Lyn',
    new Sprite(c, 18, 18, 18, 18, "units/playerUnits/lyn/mapSpriteSheets/lynMapSpriteSheet.png", 6, 12),
    new Sprite(c, 23, 19, 23, 19, "units/playerUnits/lyn/mapSpriteSheets/lynForwardWalkSpriteSheet.png", 6, 6),
    new Sprite(c, 21, 18, 21, 18, "units/playerUnits/lyn/mapSpriteSheets/lynBackwardWalkSpriteSheet.png", 8, 4),
    new Sprite(c, 26, 17, 26, 17, "units/playerUnits/lyn/mapSpriteSheets/lynRightWalkSpriteSheet.png", 8, 4),
    new Sprite(c, 26, 17, 26, 17, "units/playerUnits/lyn/mapSpriteSheets/lynLeftWalkSpriteSheet.png", 8, 4),

    new Sprite(c, 18, 18, 18, 18, "units/playerUnits/lyn/mapSpriteSheets/lynMapSpriteSheetPostAction.png", 6, 12),

    new Sprite(c, 165, 158, 18, 18, "units/playerUnits/lyn/HPWindowImage/lynHPWindowSprite3.jpg", 6, 1),
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
