export function Weapon() {
  this.stats = {};
}

function PhysicalWeapon() {
}
PhysicalWeapon.prototype = Object.create(Weapon.prototype);
PhysicalWeapon.prototype.constructor = PhysicalWeapon;

function MagicalWeapon() {
}
MagicalWeapon.prototype = Object.create(Weapon.prototype);
MagicalWeapon.prototype.constructor = MagicalWeapon;

function Sword() {
}
Sword.prototype = Object.create(PhysicalWeapon.prototype);
Sword.prototype.constructor = Sword;

function Axe() {
}
Axe.prototype = Object.create(PhysicalWeapon.prototype);
Axe.prototype.constructor = Axe;

export function ManiKatti() {
  this.stats = {
    name: 'Mani Katti',
    rank: 'Prf',
    totalUses: 45,
    weight: 3,
    mt: 8,
    ht: 80,
    critical: 20,
    range: [1],
    wex: 2,
    cost: 0
  };

  this.numberOfUses = this.stats['totalUses'];
}
ManiKatti.prototype = Object.create(Sword.prototype);
ManiKatti.prototype.constructor = ManiKatti;

export function SwordOfSeals() {
  this.stats = {
    name: 'Sword of Seals',
    rank: 'Prf',
    totalUses: 20,
    weight: 8,
    mt: 18,
    ht: 95,
    critical: 10,
    range: [1],
    wex: 1,
    cost: 0
  };

  this.numberOfUses = this.stats['totalUses'];
}
SwordOfSeals.prototype = Object.create(Sword.prototype);
SwordOfSeals.prototype.constructor = SwordOfSeals;

export function IronAxe() {
  this.stats = {
    name: 'Iron Axe',
    rank: 'E',
    totalUses: 45,
    weight: 10,
    mt: 8,
    ht: 75,
    critical: 0,
    range: [1],
    wex: 1,
    cost: 0
  };

  this.numberOfUses = this.stats['totalUses'];
}
IronAxe.prototype = Object.create(Axe.prototype);
IronAxe.prototype.constructor = IronAxe;
