function Unit(stats, board, inventory, name, mapSprite,
  forwardWalkSprite, backwardWalkSprite, rightWalkSprite,
  leftWalkSprite, hpWindowSprite, combatAnimation, critAnimation, dodgeAnimation) {
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
  this.position = null;
  this.actionTaken = false;
}

//rendering
Unit.prototype.render = function(sF) {
  if (this.moving) {
    this.movingAnimation.render(sF);
    this.mapSprite.update();
  } else if (this.inTransit) {
    this.forwardWalkSprite.render(this.position[0], this.position[1], sF);
    this.mapSprite.update();
  } else {
      this.mapSprite.render(this.position[0], this.position[1], sF);
    if(this.actionTaken) {
      c.fillStyle = "rgba(128, 128, 128, 0.2)";
      c.fill();
    }
  }
}

//unit combat
Unit.prototype.fight = function(opposingUnit) {
  let newCombat = new Combat(this, opposingUnit);
  newCombat.initiateFight();
}

Unit.prototype.isInRange = function(opposingUnit) {
  let sep = distance(this.position, opposingUnit.position);

  return this.equippedWeapon.stats['range'].includes(sep);
}

//unit movement
Unit.prototype.move = function(pos) {
  this.board.space(this.position).unit = null;
  this.board.space(pos).unit = this;
  this.position = pos;
}

Unit.prototype.validMoveSpaces = function() {
  return this.movementSpace.validMovePositions;
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
