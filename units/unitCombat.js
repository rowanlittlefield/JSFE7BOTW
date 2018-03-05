Unit.prototype.fight = function(opposingUnit) {
  let newCombat = new Combat(this, opposingUnit);
  newCombat.initiateFight();
}

Unit.prototype.isInRange = function(opposingUnit) {
  let sep = distance(this.position, opposingUnit.position);

  return this.equippedWeapon.stats['range'].includes(sep);
}
