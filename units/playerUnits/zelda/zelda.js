function Zelda(board, inventory) {

  //playerUnit keys
  this.moveSpaces = null;
  this.attackSpaces = null;
  this.prevPos = null;
  this.windowOptions = null;
  this.fightOptions = null;

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
  this.mapSprite = new Sprite(c, 173, 344, "units/playerUnits/zelda/zelda_sprite.png", 6, 1);
  this.forwardWalkSprite = new Sprite(c, 24, 20, "units/playerUnits/roy/royForwardWalkSpriteSheet.png", 8, 4);
  this.backwardWalkSprite = new Sprite(c, 21, 18, "units/playerUnits/roy/royBackwardsWalkSpriteSheet.png", 8, 4);
  this.sideWalkSprite = new Sprite(c, 26, 18, "units/playerUnits/roy/royRightWalkSpriteSheet.png", 8, 4);
  this.hpWindowSprite = new Sprite(c, 568, 560, "units/playerUnits/zelda/zeldaHPWindowSprite.png", 6, 1);
}

Zelda.prototype = Object.create(PlayerUnit.prototype);
Zelda.prototype.constructor = Zelda;
