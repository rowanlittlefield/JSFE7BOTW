function NormalDamageAnimation() {
  CoordinateSprite.call(
    this,
    c,
    238,//width
    158,//height
    238,//renderWidth
    158,//renderHeight
    'animations/FE7HitSpriteSheets.png',//image
    3,//ticksPerFrame
    [[10, 21], [253, 21], [496, 21],
    [10, 184], [253, 184], [496, 184],
    [10, 347], [253, 347], [496, 347],]//coordinatesList
  );

}

NormalDamageAnimation.prototype = Object.create(CoordinateSprite.prototype);
NormalDamageAnimation.prototype.constructor = NormalDamageAnimation;
