function CoordinateSprite(context, width, height, renderWidth,
   renderHeight, image, ticksPerFrame, coordinatesList
 ) {
  Sprite.call(
    this,
    context,
    width,
    height,
    renderWidth,
    renderHeight,
    image,
    ticksPerFrame,
    coordinatesList.length//numberOfFrames
  );

  this.coordinatesList = coordinatesList;
}

CoordinateSprite.prototype = Object.create(Sprite.prototype);
CoordinateSprite.prototype.constructor = CoordinateSprite;

CoordinateSprite.prototype.render = function(row, col, sF) {
  // debugger
  let scale = sF / 18;
  let cx = (row * sF) + (((scale * 18) - (scale * this.renderWidth)) / 2);
  let cy = (col * sF) + ((scale * 18) - (scale * this.renderHeight));
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
  // debugger;
  this.update();
}

// CoordinateSprite.prototype.update = function() {
//   this.tickCount += 1;
//
//   if(this.tickCount > this.ticksPerFrame) {
//     // debugger;
//     this.tickCount = 0;
//     if(this.frameIndex < this.numberOfFrames - 1) {
//       this.frameIndex += 1;
//     } else if(this.frameIndex === this.numberOfFrames - 1) {
//       this.frameIndex = 0;
//     }
//   }
// }
