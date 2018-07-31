import { stringToPos, distance } from '../miscellaneousFunctions/MiscellaneousFunctions';
import EnemyUnit from './enemyUnits/enemyUnit';
import PlayerUnit from './playerUnits/playerUnit';

export default function Unit(stats, board, inventory, name, mapSprite,
  forwardWalkSprite, backwardWalkSprite, rightWalkSprite,
  leftWalkSprite, hpWindowSprite, combatAnimation, critAnimation,
  dodgeAnimation, receiveHitAnimation) {
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
  let sF = displayWindow.sF;
  let topX = displayWindow.x/sF;
  let topY = displayWindow.y/sF;
  let highlightPos = [this.position[0] - topX, this.position[1] - topY];


  if (this.moving) {
    this.movingAnimation.render(displayWindow);
    this.mapSprite.update();
  } else if (this.inTransit) {
    this.forwardWalkSprite.render(highlightPos[0], highlightPos[1], sF);
    this.mapSprite.update();
  } else {
    this.mapSprite.render(highlightPos[0], highlightPos[1], sF);

    if(this.actionTaken) {
      c.fillStyle = "rgba(128, 128, 128, 0.2)";
      c.fill();
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
  // if (this.__proto__.constructor === Roy || this.__proto__.constructor === Lyn) {
  // if (this instanceof(PlayerUnit)) {
    return this.singleMovePathFinder.validMovePositions.positions;
  // }
  // return this.movementSpace.validMovePos();
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
      return this.singleMovePathFinder.findSingleMoveAttackPosition(
        this.position,
        this.equippedWeapon.stats['range']
      );
   } else if(this.behavior === 'seekAndDestroy') {
     return this.singleMovePathFinder.findSeekAndDestroySingleTurnPosition(
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

// export default Unit;
