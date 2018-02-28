function CombatSprite(context, spriteQueue) {
  this.context = context;
  this.queueIndex = 0;
  this.spriteQueue = spriteQueue;
}

CombatSprite.prototype.update = function() {
  // debugger;
  let sprite = this.spriteQueue[this.queueIndex];
  let checkOne = this.spriteQueue[this.queueIndex].frameIndex;
  let checkTwo = this.spriteQueue[this.queueIndex].numberOfFrames;
  if (sprite.frameIndex === sprite.numberOfFrames - 1 &&
    sprite.tickCount === sprite.ticksPerFrame) {
    // debugger;
    this.updateQueueIndexAndSprite();
  }
}

CombatSprite.prototype.updateQueueIndexAndSprite = function() {
  let sprite = this.spriteQueue[this.queueIndex].update();
  this.queueIndex = (this.queueIndex + 1) % this.spriteQueue.length;
}

CombatSprite.prototype.render = function(row, col, sF) {
  this.spriteQueue[this.queueIndex].render(row, col, sF);
  this.update();
}

CombatSprite.prototype.renderFromCoordinates = function(x, y, sF) {
  // let scale = sF / 18;
  // let cx = x + (((scale * 18) - (scale * this.renderWidth)) / 2);
  // let cy = y + ((scale * 18) - (scale * this.renderHeight));
  // let cWidth = scale * this.renderWidth;
  // let cHeight = scale *  this.renderHeight;
  //
  // this.context.drawImage(
  //   this.spriteSheet,
  //   this.frameIndex * this.width,
  //   0,
  //   this.width,
  //   this.height,
  //   cx,
  //   cy,
  //   cWidth,
  //   cHeight
  // );
  // this.update();

  this.spriteQueue[this.queueIndex].renderFromCoordinatesSpecial(x, y, sF);
  this.update();
}

CombatSprite.prototype.renderStationaryFrame = function(x, y, sF) {
  this.spriteQueue[this.queueIndex].renderStationaryFrame(x, y, sF);
}
