import Sprite from '@/animation/sprite/sprite';

export class BrigandStationaryMapSprite extends Sprite {
  constructor() {
    super(
      18,
      18,
      18,
      18,
      "src/assets/map_spritesheets/brigandMapSprite.png",
      6,
      12
    );
  }
}

export class BrigandForwardWalkMapSprite extends Sprite {
  constructor() {
    super(
      22,
      25,
      22,
      25,
      "src/assets/map_spritesheets/brigandForwardWalkSpriteSheet.png",
      6,
      4
    );
  }
}

export class BrigandBackwardsWalkMapSprite extends Sprite {
  constructor() {
    super(
      22,
      25,
      22,
      25,
      "src/assets/map_spritesheets/brigandBackwardsWalkSprite.png",
      8,
      4
    );
  }
}

export class BrigandRightWalkMapSprite extends Sprite {
  constructor() {
    super(
      22,
      27,
      22,
      27,
      "src/assets/map_spritesheets/brigandRightWalkSprite.png",
      8,
      4
    );
  }
}

export class BrigandLeftWalkMapSprite extends Sprite {
  constructor() {
    super(
      22,
      27,
      22,
      27,
      "src/assets/map_spritesheets/brigandLeftWalkSprite.png",
      8,
      4
    );
  }
}

export class BrigandPostActionMapSprite extends Sprite {
  constructor() {
    super(
      18,
      18,
      18,
      18,
      "src/assets/map_spritesheets/brigandMapSpritePostAction.png",
      6,
      12
    );
  }
}