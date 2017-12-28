function Bokoblin(board, inventory, behavior) {
  this.stats = {
    level: 1,
    experience: 0,
    hp: 20,
    strength: 5,
    skill: 1,
    speed: 5,
    luck: 0,
    defense: 3,
    resistance: 0,
    move: 5,
    constitution: 12,
    aid: 0,
    hp_growth_rate: 82,
    strength_growth_rate: 50,
    skill_growth_rate: 30,
    speed_growth_rate: 20,
    luck_growth_rate: 15,
    defense_growth_rate: 10,
    resistance_growth_rate: 13,
    affinity: "wind",
    condition: null
  };

  this.board = board;
  this.current_hp = this.stats['hp'];
  this.inventory = inventory;
  this.name = 'bokoblin';
  this.position = null;
  this.actionTaken = false;
  this.behavior = behavior;
  this.mapSprite = new Sprite(c, 533, 607, "units/enemyUnits/bokoblin/bokoblin_sprite.png", 6, 1);
  this.hpWindowSprite = new Sprite(c, 533, 607, "units/enemyUnits/bokoblin/bokoblinHPWindowSprite.jpg", 6, 1);
}

Bokoblin.prototype = Object.create(EnemyUnit.prototype);
Bokoblin.prototype.constructor = Bokoblin;
