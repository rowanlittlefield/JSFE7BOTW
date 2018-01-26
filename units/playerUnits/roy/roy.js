function Roy(board, inventory) {

  //playerUnit keys
  this.moveSpaces = null;
  this.attackSpaces = null;
  this.prevPos = null;
  this.windowOptions = null;
  this.fightOptions = null;

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
  this.inTransit = false;
  this.mapSprite = new Sprite(c, 18, 18, 18, 18, "units/playerUnits/roy/royMapSpriteSheet.png", 6, 12);
  // this.mapSprite = new Sprite(c, 16, 18, "units/playerUnits/roy/royMapDraftSpriteSheet.png", 6, 12);
  // this.forwardWalkSprite = new Sprite(c, 24, 20, 18, 20, "units/playerUnits/roy/royForwardWalkSpriteSheet.png", 8, 4);
  this.forwardWalkSprite = new Sprite(c, 22, 20, 22, 20, "units/playerUnits/roy/royForwardWalkSpriteSheetRevise.png", 6, 6);
  this.backwardWalkSprite = new Sprite(c, 21, 18, 21, 18, "units/playerUnits/roy/royBackwardsWalkSpriteSheet.png", 8, 4);
  this.sideWalkSprite = new Sprite(c, 26, 18, 26, 18, "units/playerUnits/roy/royRightWalkSpriteSheet.png", 8, 4);
  this.hpWindowSprite = new Sprite(c, 217, 210, 18, 18, "units/playerUnits/roy/royHPWindowSprite.png", 6, 1);
  this.movingAnimation = null;
}

Roy.prototype = Object.create(PlayerUnit.prototype);
Roy.prototype.constructor = Roy;
