function Link(board, inventory) {

//playerUnit keys
this.moveSpaces = null;
this.attackSpaces = null;
this.prevPos = null;
this.windowOptions = null;
this.fightOptions = null;

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
  this.mapSprite = new Sprite(c, 288, 368, 18, 18, "units/playerUnits/link/link_sprite_two.png", 6, 1);
  this.forwardWalkSprite = new Sprite(c, 22, 20, 22, 20, "units/playerUnits/roy/royForwardWalkSpriteSheetRevise.png", 6, 6);
  this.backwardWalkSprite = new Sprite(c, 21, 18, 21, 18, "units/playerUnits/roy/royBackwardsWalkSpriteSheet.png", 8, 4);
  this.sideWalkSprite = new Sprite(c, 26, 18, 26, 18, "units/playerUnits/roy/royRightWalkSpriteSheet.png", 8, 4);
  this.hpWindowSprite = new Sprite(c, 800, 774, 18, 18, "units/playerUnits/link/botwLinkChibiHead.jpg", 6, 1);
}

Link.prototype = Object.create(PlayerUnit.prototype);
Link.prototype.constructor = Link;
