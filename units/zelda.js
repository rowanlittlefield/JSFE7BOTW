function Zelda(board, inventory) {
  this.stats = {
    level: 1,
    experience: 0,
    hp: 15,
    strength: 7,
    skill: 8,
    speed: 7,
    luck: 10,
    defense: 2,
    resistance: 4,
    move: 5,
    constitution: 5,
    aid: 0,
    hp_growth_rate: 40,
    strength_growth_rate: 80,
    skill_growth_rate: 40,
    speed_growth_rate: 35,
    luck_growth_rate: 80,
    defense_growth_rate: 20,
    resistance_growth_rate: 90,
    affinity: "wind",
    condition: null
  }
  this.board = board;
  this.current_hp = this.stats['hp'];
  this.inventory = inventory;
  this.name = 'Zelda';
  this.position = null;
  this.actionTaken = false;
  this.mapSprite = new Sprite(c, 173, 344, "units/zelda_sprite.png", 6, 1);
  this.hpWindowSprite = new Sprite(c, 568, 560, "units/zeldaHPWindowSprite.png", 6, 1);
}

Zelda.prototype = Object.create(PlayerUnit.prototype);
Zelda.prototype.constructor = Zelda;
