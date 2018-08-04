import EnemyUnit from '../enemyUnit';
import Sprite from '../../../animations/sprite';
import { c } from '../../../createContext';
import BrigandCombatAnimation from './combatAnimations/brigandCombatAnimation';
import LynDodgeAnimation from '../../playerUnits/lyn/combatAnimations/lynDodgeAnimation';
import BrigandReceiveHitAnimation from './combatAnimations/brigandReceiveHitAnimation';
import UnitStats from '../../unitStats/unitStats';

function Brigand(board, inventory, behavior, stats) {
  EnemyUnit.call(
    this,
    stats,
    board,
    inventory,
    'Brigand',
    new Sprite(c, 18, 18, 18, 18, "units/enemyUnits/brigand/mapSpriteSheets/brigandMapSprite.png", 6, 12),
    new Sprite(c, 22, 25, 22, 25, "units/enemyUnits/brigand/mapSpriteSheets/brigandForwardWalkSpriteSheet.png", 6, 4),
    new Sprite(c, 22, 25, 22, 25, "units/enemyUnits/brigand/mapSpriteSheets/brigandBackwardsWalkSprite.png", 8, 4),
    new Sprite(c, 22, 27, 22, 27, "units/enemyUnits/brigand/mapSpriteSheets/brigandRightWalkSprite.png", 8, 4),
    new Sprite(c, 22, 27, 22, 27, "units/enemyUnits/brigand/mapSpriteSheets/brigandLeftWalkSprite.png", 8, 4),

    new Sprite(c, 18, 18, 18, 18, "units/enemyUnits/brigand/mapSpriteSheets/brigandMapSpritePostAction.png", 6, 12),

    new Sprite(c, 80, 72, 18, 18, "units/enemyUnits/brigand/HPWindowImage/brigandHPWindowSprite.png", 6, 1),
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
