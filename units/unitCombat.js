Unit.prototype.fight = function(opposingUnit) {
  let fightingUnits = this.determineUnitClasses(opposingUnit);
  let playerUnit = fightingUnits[0];
  let enemyUnit = fightingUnits[1];
  let enemyUnitInitialHP = enemyUnit.current_hp;

  this.individualAttack(opposingUnit);
  if(opposingUnit.current_hp > 0 && opposingUnit.isInRange(this)){
    opposingUnit.individualAttack(this);
  }
  this.repeatAttack(opposingUnit);
  if(playerUnit.current_hp > 0) {
    playerUnit.allotExp(enemyUnit, enemyUnitInitialHP);
  }
}

Unit.prototype.individualAttack = function(opposingUnit) {
  let damage = this.damage(opposingUnit);
  let criticalDamage = damage * 3;

  if (Math.floor(Math.random() * 100) <= this.criticalChance(opposingUnit)) {
    this.dealDamage(opposingUnit, criticalDamage);
  } else if(Math.floor(Math.random() * 100) <= this.accuracy(opposingUnit)) {
    this.dealDamage(opposingUnit, damage);
  }
}

Unit.prototype.repeatAttack = function(opposingUnit) {
  if(this.isRepeatedAttack(opposingUnit)) {
    this.individualAttack(opposingUnit);
  } else if(opposingUnit.isRepeatedAttack(this)) {
    opposingUnit.individualAttack(this);
  }
}

Unit.prototype.allotExp = function(enemyUnit, enemyUnitInitialHP) {
  console.log('allotExp method called');
}

Unit.prototype.dealDamage = function(opposingUnit, damage) {
  if(opposingUnit.current_hp - damage < 0) {
    opposingUnit.current_hp = 0;
  } else {
    opposingUnit.current_hp -= damage;
  }
}

Unit.prototype.determineUnitClasses = function(opposingUnit) {
  return this instanceof(PlayerUnit) ? [this, opposingUnit] : [opposingUnit, this];
}

Unit.prototype.isInRange = function(opposingUnit) {
  let sep = distance(this.position, opposingUnit.position);

  return this.inventory.stats['range'].includes(sep);
}
