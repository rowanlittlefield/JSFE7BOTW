import { stringToPos, distance } from '~/util';
import EnemyUnit from '@/unit/enemy_unit';
import PlayerUnit from '@/unit/player_unit';
import Gate from '../../../board/terrain/gate';
import { PhysicalWeapon, MagicalWeapon } from '@/item/weapon';
import { c } from '../../../createContext';

export default function Unit(stats, board, inventory, name, mapSprite,
  forwardWalkSprite, backwardWalkSprite, rightWalkSprite,
  leftWalkSprite, postActionMapSprite, hpWindowSprite, combatAnimation,
  critAnimation, dodgeAnimation, receiveHitAnimation) {
  if (!stats) stats = this.defaultStats();
  this.stats = stats;
  this.board = board;
  this.current_hp = this.stats['hp'];
  this.inventory = inventory;
  this.equippedWeapon = inventory.autoEquipWeapon();
  this.name = name;
  this.mapSprite = mapSprite;
  this.forwardWalkSprite = forwardWalkSprite;
  this.backwardWalkSprite = backwardWalkSprite;
  this.rightWalkSprite = rightWalkSprite;
  this.leftWalkSprite = leftWalkSprite;
  this.postActionMapSprite = postActionMapSprite;
  this.hpWindowSprite = hpWindowSprite;
  this.combatAnimation = combatAnimation;
  this.critAnimation = critAnimation;
  this.dodgeAnimation = dodgeAnimation;
  this.receiveHitAnimation = receiveHitAnimation
  this.position = null;
  this.actionTaken = false;
}

//rendering
Unit.prototype.render = function(displayWindow) {
  const sF = displayWindow.sF;
  const topX = displayWindow.x/sF;
  const topY = displayWindow.y/sF;
  const highlightPos = [this.position[0] - topX, this.position[1] - topY];


  if (this.moving) {
    this.movingAnimation.render(displayWindow);
    this.mapSprite.update();
    this.postActionMapSprite.update();
  } else if (this.inTransit) {
    this.forwardWalkSprite.render(highlightPos[0], highlightPos[1], sF);
    this.mapSprite.update();
    this.postActionMapSprite.update();
  } else {
    // this.mapSprite.render(highlightPos[0], highlightPos[1], sF);

    if(this.actionTaken) {
      // c.fillStyle = "rgba(128, 128, 128, 0.2)";
      // c.fill();
      this.postActionMapSprite.render(highlightPos[0], highlightPos[1], sF);
      this.mapSprite.update();
    } else {
      this.mapSprite.render(highlightPos[0], highlightPos[1], sF);
      this.postActionMapSprite.update();
    }
  }
}

//unit combat
Unit.prototype.fight = function(opposingUnit) {
  const newCombat = new Combat(this, opposingUnit);
  newCombat.initiateFight();
}

Unit.prototype.isInRange = function(opposingUnit) {
  const sep = distance(this.position, opposingUnit.position);

  return this.equippedWeapon.stats['range'].includes(sep);
}

//unit movement
Unit.prototype.move = function(pos) {
  this.board.space(this.position).unit = null;
  this.board.space(pos).unit = this;
  this.position = pos;
}

Unit.prototype.validMoveSpaces = function() {
  return this.pathFinder.validMovePositions.positions;
}

Unit.prototype.isCorrectDistance = function(key, moveSpaces, weaponRange) {
  let keyArray = stringToPos(key);
  for(let mSpace in moveSpaces) {
    let mSpaceArray = stringToPos(key);
    if(weaponRange.includes(distance(keyArray, mSpaceArray))) {
      return true;
    }
  }

  return false;
}

//AI movement selection

Unit.prototype.moveSelection = function() {
   if(this.behavior === 'idle') {
     return this.position;
   } else if(this.behavior === 'TWBS') {
      return this.pathFinder.findSingleMoveAttackPosition(
        this.position,
        this.equippedWeapon.stats['range']
      );
   } else if(this.behavior === 'seekAndDestroy') {
     return this.pathFinder.findSeekAndDestroySingleTurnPosition(
       this.position,
       this.equippedWeapon.stats['range']
     );
   }
}

Unit.prototype.selectPlayerUnitInRange = function() {
  let playerUnitPositionsInRange = [];

  this.board.boardIterator(function(row, col){
    if (this.board.grid[row][col].unit instanceof(PlayerUnit) &&
        this.equippedWeapon.stats['range'].includes(distance(this.position, [row, col]))) {
      playerUnitPositionsInRange.push([row, col]);
    }
  }.bind(this));

  if (playerUnitPositionsInRange.length > 0) {
    let attackIndex = Math.floor(Math.random() * playerUnitPositionsInRange.length);
    let pos = playerUnitPositionsInRange[attackIndex];
    return this.board.grid[pos[0]][pos[1]].unit;
  }

  return null;
}

// Possibly non-AI methods that may need to be sorted into their own
// methods later

Unit.prototype.isOppInRange = function() {
  let ranges = this.equippedWeapon.stats['range'];
  let oppUnitPositions = [];
  let oppUnitsPosInRange = [];

  this.board.boardIterator(function(row, col){
    if (this.board.grid[row][col].unit &&
      this.board.grid[row][col].unit instanceof(EnemyUnit)) {
      oppUnitPositions.push([row, col]);
    }
  }.bind(this));

  for(let i = 0; i < oppUnitPositions.length; i++) {
    if (ranges.includes(distance(oppUnitPositions[i], this.position))) {
      oppUnitsPosInRange.push(oppUnitPositions[i]);
    }
  }

  return oppUnitsPosInRange;
}

Unit.prototype.postMoveWindowOptions = function() {
  const options = [];
  if (this.isOppInRange().length > 0) {
    options.push('Fight');
  }
  if (this.board.space(this.position).terrain instanceof Gate) {
    options.push('Seize')
  }
  options.push('Wait');

  return options;
}

//Unit Combat Stats
Unit.prototype.attackSpeed = function() {
  if(this.stats['constitution'] >= this.equippedWeapon.stats['weight']) {
    return this.stats['speed'];
  }

  return this.stats['speed'] - (this.equippedWeapon.stats['weight'] - this.stats['constitution']);
}

Unit.prototype.isRepeatedAttack = function(opposingUnit) {
  return (this.attackSpeed() > opposingUnit.attackSpeed() + 3);
}

Unit.prototype.hitRate = function() {
  return (this.equippedWeapon.stats['ht'] + (this.stats['skill'] * 2) + Math.floor(this.stats['luck'] / 2));
}

Unit.prototype.avoid = function() {
  return (this.attackSpeed() * 2) + this.stats['luck'];
}

Unit.prototype.accuracy = function(opposingUnit) {
  let calculatedAccuracy = this.hitRate() - opposingUnit.avoid();

  if(calculatedAccuracy >= 0 && calculatedAccuracy < 100) {
    return calculatedAccuracy;
  } else if(calculatedAccuracy < 0) {
    return 0;
  } else if(calculatedAccuracy >= 100) {
    return 100;
  }
}

Unit.prototype.attack = function() {
  return this.stats['strength'] + this.equippedWeapon.stats['mt'];
}

Unit.prototype.defensePower = function(opposingUnit) {
  if(opposingUnit.equippedWeapon instanceof(PhysicalWeapon)) {
    return this.stats['defense'];
  } else if(opposingUnit.equippedWeapon.prototype instanceof(MagicalWeapon)) {
    return this.stats['resistance'];
  }
}

Unit.prototype.damage = function(opposingUnit) {
  let outputDamage = this.attack() - opposingUnit.defensePower(this);
  if(outputDamage > 1) {
    return outputDamage;
  } else {
    return 1;
  }
}

Unit.prototype.criticalRate = function() {
  return this.equippedWeapon.stats['critical'] + Math.floor(this.stats['skill'] / 2);
}

Unit.prototype.criticalEvade = function() {
  return this.stats['luck'];
}

Unit.prototype.criticalChance = function(opposingUnit) {
  let chance = this.criticalRate() - opposingUnit.criticalEvade();
  if(chance >= 0 && chance <= 100) {
    return chance;
  } else if(chance < 0) {
    return 0;
  } else if(chance > 100) {
    return chance;
  }
}

// export default Unit;
