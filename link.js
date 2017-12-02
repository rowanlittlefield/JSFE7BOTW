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
  this.action_taken = false;

  let link_image = new Image();
  link_image.src = "link_sprite_two.png";
  this.sprite = link_image;
}

Link.prototype = Object.create(PlayerUnit.prototype);
Link.prototype.constructor = Link;
