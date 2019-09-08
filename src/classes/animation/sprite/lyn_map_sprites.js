import Sprite from '@/animation/sprite/sprite';

export class LynStationaryMapSprite extends Sprite {
  constructor() {
    super(
      18,
      18,
      18,
      18,
      "src/assets/map_spritesheets/lynMapSpriteSheet.png",
      6,
      12
    );
  }
}

export class LynForwardWalkMapSprite extends Sprite {
  constructor() {
    super(
      23,
      19,
      23,
      19,
      "src/assets/map_spritesheets/lynForwardWalkSpriteSheet.png",
      6,
      6
    );
  }
}

export class LynBackwardsWalkMapSprite extends Sprite {
  constructor() {
    super(
      21,
      18,
      21,
      18,
      "src/assets/map_spritesheets/lynBackwardWalkSpriteSheet.png",
      8,
      4
    );
  }
}

export class LynRightWalkMapSprite extends Sprite {
  constructor() {
    super(
      26,
      17,
      26,
      17,
      "src/assets/map_spritesheets/lynRightWalkSpriteSheet.png",
      8,
      4
    );
  }
}

export class LynLeftWalkMapSprite extends Sprite {
  constructor() {
    super(
      26,
      17,
      26,
      17,
      "src/assets/map_spritesheets/lynLeftWalkSpriteSheet.png",
      8,
      4
    );
  }
}

export class LynPostActionMapSprite extends Sprite {
  constructor() {
    super(
      18,
      18,
      18,
      18,
      "src/assets/map_spritesheets/lynMapSpriteSheetPostAction.png",
      6,
      12
    );
  }
}