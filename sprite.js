function Sprite(context, width, height, renderWidth, renderHeight, image, ticksPerFrame, numberOfFrames) {
  this.context = context;
  this.width = width;
  this.height = height;
  this.renderWidth = renderWidth;
  this.renderHeight = renderHeight;

  let spriteSheet = new Image();
  spriteSheet.src = image;
  this.spriteSheet = spriteSheet;

  this.frameIndex = 0;
  this.tickCount = 0;
  this.ticksPerFrame = ticksPerFrame;
  this.numberOfFrames = numberOfFrames;
}

Sprite.prototype.update = function() {
  this.tickCount += 1;

  if(this.tickCount > this.ticksPerFrame) {
    this.tickCount = 0;
    if(this.frameIndex < this.numberOfFrames - 1) {
      this.frameIndex += 1;
    } else if(this.frameIndex === this.numberOfFrames - 1) {
      this.frameIndex = 0;
    }
  }
}

Sprite.prototype.render = function(row, col, sF) {
  let scale = sF / 18;
  let cx = (row * sF) + (((scale * 18) - (scale * this.renderWidth)) / 2);
  let cy = (col * sF) + ((scale * 18) - (scale * this.renderHeight));
  let cWidth = scale * this.renderWidth;
  let cHeight = scale *  this.renderHeight;
  this.context.drawImage(
    this.spriteSheet,
    this.frameIndex * this.width,
    0,
    this.width,
    this.height,
    cx,
    cy,
    cWidth,
    cHeight
  );
  this.update();
}
