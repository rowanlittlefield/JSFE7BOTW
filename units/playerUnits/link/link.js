function Link(board, inventory) {
  this.stats = {
    level: 1,
    experience: 0,
    hp: 18,
    strength: 5,
    skill: 5,
    speed: 7,
    luck: 7,
    defense: 5,
    resistance: 0,
    move: 4,
    constitution: 7,
    aid: 0,
    hp_growth_rate: 80,
    strength_growth_rate: 45,
    skill_growth_rate: 50,
    speed_growth_rate: 40,
    luck_growth_rate: 45,
    defense_growth_rate: 30,
    resistance_growth_rate: 35,
    affinity: "wind",
    condition: null
  };

  this.board = board;
  this.current_hp = this.stats['hp'];
  this.inventory = inventory;
  this.name = 'Link';
  this.position = null;
  this.actionTaken = false;
  this.mapSprite = new Sprite(c, 288, 368, "units/playerUnits/link/link_sprite_two.png", 6, 1);
  this.hpWindowSprite = new Sprite(c, 800, 774, "units/playerUnits/link/botwLinkChibiHead.jpg", 6, 1);
}

Link.prototype = Object.create(PlayerUnit.prototype);
Link.prototype.constructor = Link;
