function NormalCriticalDamageAnimation(defenderCoordinates) {
  CoordinateSprite.call(
    this,
    c,
    240,//width
    143,//height
    //238,//renderWidth
    240*1.4,//renderWidth

    //158,//renderHeight
    143*1.3,//renderHeight

    'animations/FE7HitSpriteSheetsTransTest.png',//image
    2,//ticksPerFrame
    // [10, 21]
    [
      // [10, 21],
      // [253, 1033],
      // //[10, 1197],
      // //[253, 1033],
      // [10,21],

      [253, 526], [496, 526],
      [10, 690], [253, 690], [496, 690],
      [10, 853], [253, 853], [496, 853]

    ]//coordinatesList
  );

  this.defenderCoordinates = defenderCoordinates;
}

NormalCriticalDamageAnimation.prototype = Object.create(CoordinateSprite.prototype);
NormalCriticalDamageAnimation.prototype.constructor = NormalCriticalDamageAnimation;

NormalCriticalDamageAnimation.prototype.render = function(sF) {
  let scale = sF / 18;
  // let cx = (this.defenderCoordinates[0] * sF) + (((scale * 18) - (scale * this.renderWidth)) / 2);
  // let cy = (this.defenderCoordinates[1] * sF) + ((scale * 18) - (scale * this.renderHeight));
  let cx = (this.defenderCoordinates[0] * sF) + (((scale * 18) - (scale * this.renderWidth)) / 2) + (1.5*sF);
  let cy = (this.defenderCoordinates[1] * sF) + ((scale * 18) - (scale * this.renderHeight)) + (2*sF);

  let cWidth = scale * this.renderWidth;
  let cHeight = scale *  this.renderHeight;
  this.context.drawImage(
    this.spriteSheet,// this.spriteSheet,
    this.coordinatesList[this.frameIndex][0],// this.frameIndex * this.width,
    this.coordinatesList[this.frameIndex][1],// 0,
    this.width,// this.width,
    this.height,// this.height,
    cx,// cx,
    cy,// cy,
    cWidth,// cWidth,
    cHeight// cHeight
  );
  this.update();
}
