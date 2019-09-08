import Sprite from '@/animation/sprite/sprite';

export class RoyStationaryMapSprite extends Sprite {
  constructor() {
    super(
      18, 
      18, 
      18, 
      18, 
      "src/assets/map_spritesheets/royMapSpriteSheetBlankBackground.png", 
      6, 
      12
    );
  }
}

export class RoyForwardWalkMapSprite extends Sprite {
  constructor() {
    super(
      22,
      20,
      22,
      20,
      "src/assets/map_spritesheets/royForwardWalkSpriteSheetRevise.png",
      6,
      6
    );
  }
}

export class RoyBackwardsWalkMapSprite extends Sprite {
  constructor() {
    super(
      21,
      18,
      21,
      18,
      "src/assets/map_spritesheets/royBackwardsWalkSpriteSheet.png",
      8,
      4
    );
  }
}

export class RoyRightWalkMapSprite extends Sprite {
  constructor() {
    super(
      34,
      18,
      34,
      18,
      "src/assets/map_spritesheets/royRightWalkSpriteSheet.png",
      8,
      4
    );
  }
}

export class RoyLeftWalkMapSprite extends Sprite {
  constructor() {
    super(
      34,
      18,
      34,
      18,
      "src/assets/map_spritesheets/royLeftWalkSpriteSheet.png",
      8,
      4
    );
  }
}

export class RoyPostActionMapSprite extends Sprite {
  constructor() {
    super(
      18,
      18,
      18,
      18,
      "src/assets/map_spritesheets/royMapSpriteSheetBlankBackgroundPostAction.png",
      6,
      12
    );
  }
}
