function Weapon() {
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

function LightMagic() {
}
LightMagic.prototype = Object.create(MagicalWeapon.prototype);
LightMagic.prototype.constructor = LightMagic;

function RustedSword() {
  this.stats = {
    name: 'Rusted Sword',
    rank: 'E',
    totalUses: 46,
    weight: 5,
    mt: 5,
    ht: 90,
    critical: 0,
    range: [1],
    wex: 1,
    cost: 0
  };

  this.numberOfUses = this.stats['totalUses'];
}
RustedSword.prototype = Object.create(Sword.prototype);
RustedSword.prototype.constructor = RustedSword;

function ManiKatti() {
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

function SwordOfSeals() {
  this.stats = {
    name: 'Sword of Seals',
    rank: 'Prf',
    totalUses: 20,
    weight: 8,
    mt: 18,
    ht: 95,
    critical: 10,
    range: [1, 2],
    wex: 1,
    cost: 0
  };

  this.numberOfUses = this.stats['totalUses'];
}
SwordOfSeals.prototype = Object.create(Sword.prototype);
SwordOfSeals.prototype.constructor = SwordOfSeals;

function IronAxe() {
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

function Light() {
  this.stats = {
    name: 'Light',
    rank: 'E',
    totalUses: 36,
    weight: 6,
    mt: 4,
    ht: 95,
    critical: 5,
    range: [1, 2],
    wex: 1,
    cost: 0
  };
  this.numberOfUses = this.stats['totalUses'];
}
Light.prototype = Object.create(LightMagic);
Light.prototype.constructor = Light;
