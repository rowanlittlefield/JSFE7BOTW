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
  if (this.__proto__.constructor === Roy || this.__proto__.constructor === Lyn) {
    return this.singleMovePathFinder.validMovePositions.positions;
  }
  return this.movementSpace.validMovePos();
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
