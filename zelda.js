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
    move: 1,
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
  let zelda_image = new Image();
  zelda_image.src = 'zelda_sprite.png';
  this.sprite = zelda_image;
}

Zelda.prototype = Object.create(PlayerUnit.prototype);
Zelda.prototype.constructor = Zelda;
