import Sprite from '@/animation/sprite/sprite'

export class RoyMugshotSprite extends Sprite {
  constructor() {
    super(
      253,
      228,
      18,
      18,
      "src/assets/mugshots/RoyMugshotZoom.jpg",
      6,
      1
    );
  }
}

export class LynMugshotSprite extends Sprite {
  constructor() {
    super(
      165,
      158,
      18,
      18,
      "src/assets/mugshots/lynHPWindowSprite3.jpg",
      6,
      1
    );
  }
}

export class BrigandMugshotSprite extends Sprite {
  constructor() {
    super(
      80,
      72,
      18,
      18,
      "src/assets/mugshots/brigandHPWindowSprite.png",
      6,
      1
    );
  }
}