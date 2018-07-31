import { Weapon } from '../items/weapon';

function Inventory(items) {
  this.items = items ? items : [];
}

Inventory.prototype.autoEquipWeapon = function() {
  for(let i = 0; i < this.items.length; i++) {
    if (this.items[i] instanceof(Weapon)) {
      return this.items[i];
    }
  }
  return null;
}

Inventory.prototype.manualEquipWeapon = function(index) {
  if(this.items[index] instanceof(Weapon)) {
    return this.items[index];
  } else {
    return null;
  }
}

Inventory.prototype.discard = function(index) {
  this.items[index] = null;
  this.items = removeNull(this.items);
}

export default Inventory;
