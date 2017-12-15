function Roy(board, inventory) {
  this.stats = {
    level: 1,
    experience: 0,
    hp: 42,
    strength: 16,
    skill: 19,
    speed: 22,
    luck: 17,
    defense: 14,
    resistance: 7,
    move: 6,
    constitution: 8,
    aid: 0,
    hp_growth_rate: 80,
    strength_growth_rate: 40,
    skill_growth_rate: 50,
    speed_growth_rate: 40,
    luck_growth_rate: 60,
    defense_growth_rate: 25,
    resistance_growth_rate: 30,
    affinity: "wind",
    condition: null
  };

  this.board = board;
  this.current_hp = this.stats['hp'];
  this.inventory = inventory;
  this.name = 'Roy';
  this.position = null;
  this.actionTaken = false;
  this.mapSprite = new Sprite(c, 18, 18, "units/royMapSpriteSheet.png", 6, 12);
  this.hpWindowSprite = new Sprite(c, 217, 210, "units/royHPWindowSprite.png", 6, 1);
}

Roy.prototype = Object.create(PlayerUnit.prototype);
Roy.prototype.constructor = Roy;
