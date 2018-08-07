function PreloadedAssetSprite(context, imageObject, renderList) {
  this.frameIndex = 0;
  this.tickCount = 0;

  //[sx, sy, width, height, renderWidth, renderHeight, numTicks]
  this.context = context;
  this.spriteSheet = imageObject;
  this.renderList = renderList;
  this.numberOfFrames = renderList.length;
}

PreloadedAssetSprite.prototype.render = function(row, col, sF) {
  const renderWidth = this.renderList[this.frameIndex][4];
  const renderHeight = this.renderList[this.frameIndex][5]

  const scale = sF / 18;
  const cx = (row*sF) + (((scale*18) - (scale*renderWidth)) / 2);
  const cy = (col*sF) + ((scale*18) - (scale*renderHeight));
  const cWidth = scale*renderWidth;
  const cHeight = scale*renderHeight;
  this.context.drawImage(
    this.spriteSheet,
    this.renderList[this.frameIndex][0],
    this.renderList[this.frameIndex][1],
    this.renderList[this.frameIndex][2],
    this.renderList[this.frameIndex][3],
    cx,
    cy,
    cWidth,
    cHeight
  );
  this.update();
}

PreloadedAssetSprite.prototype.update = function() {
  this.tickCount += 1;

  // if(this.tickCount > this.ticksPerFrame) {
  if(this.tickCount > this.renderList[this.frameIndex][6]) {
    this.tickCount = 0;
    if(this.frameIndex < this.numberOfFrames - 1) {
      this.frameIndex += 1;
    } else if(this.frameIndex === this.numberOfFrames - 1) {
      this.frameIndex = 0;
    }
  }
}

export default PreloadedAssetSprite;
