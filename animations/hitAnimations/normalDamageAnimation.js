import CoordinateSprite from '../coordinateSprite';

function NormalDamageAnimation(defenderCoordinates) {
  CoordinateSprite.call(
    this,
    238,//width
    158,//height
    //238,//renderWidth
    238*1.8,//renderWidth

    // 158,//renderHeight
    158*1.8,//renderHeight

    'src/assets/hit_effect_spritesheets/FE7HitSpriteSheetsTransTest.png',//image
    2,//ticksPerFrame
    // [10, 21]
    [
      // [10, 21],
      // [253, 1033],
      // [10, 1197],
      // [253, 1033],
      // [10,21],

     [253, 21], [496, 21],
    [10, 184], [253, 184], [496, 184],
    [10, 347], [253, 347], [496, 347]]//coordinatesList
  );

  this.defenderCoordinates = defenderCoordinates;
}

NormalDamageAnimation.prototype = Object.create(CoordinateSprite.prototype);
NormalDamageAnimation.prototype.constructor = NormalDamageAnimation;

NormalDamageAnimation.prototype.render = function(sF) {
  let scale = sF / 18;
  // let cx = (this.defenderCoordinates[0] * sF) + (((scale * 18) - (scale * this.renderWidth)) / 2);
  // let cy = (this.defenderCoordinates[1] * sF) + ((scale * 18) - (scale * this.renderHeight));
  let cx = (this.defenderCoordinates[0] * sF) + (((scale * 18) - (scale * this.renderWidth)) / 2) + (1.2*sF);
  let cy = (this.defenderCoordinates[1] * sF) + ((scale * 18) - (scale * this.renderHeight)) + (sF*2.5);

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

export default NormalDamageAnimation;
