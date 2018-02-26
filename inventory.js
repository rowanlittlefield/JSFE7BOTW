function Inventory(items) {
  this.items = items ? items : [];
  this.equippedWeapon = this.autoEquipWeapon();
}

Inventory.prototype.autoEquipWeapon = function() {
  for(let i = 0; i < this.items.length; i++) {
    if (this.items[i] instanceof(Weapon)) {
      this.equippedWeapon = this.items[i];
      return null;
    }
  }
  this.equippedWeapon = null;
  return null;
}

Inventory.prototype.manualEquipWeapon = function(index) {
  if(this.items[index] instanceof(Weapon)) {
    this.equippedWeapon = this.items[index];
  }
}

Inventory.prototype.discard = function(index) {
  this.items[index] = null;
  this.items = removeNull(this.items);
  this.autoEquipWeapon();
}
