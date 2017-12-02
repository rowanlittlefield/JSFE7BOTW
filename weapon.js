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
Sword.prototype = Object.create(Weapon.prototype);
Sword.prototype.constructor = Sword;

function LightMagic() {
}
LightMagic.prototype = Object.create(LightMagic.prototype);
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
