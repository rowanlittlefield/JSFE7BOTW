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
