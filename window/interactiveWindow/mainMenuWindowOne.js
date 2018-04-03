function MainMenuWindowOne() {
  let options = ['New Game']
  InteractiveWindow.call(this, 0, 0, 0, 0, innerWidth, 100, options);
  this.color = "rgba(65, 105, 225, 1)";
}

MainMenuWindowOne.prototype = Object.create(InteractiveWindow.prototype);
MainMenuWindowOne.prototype.constructor = MainMenuWindowOne;

MainMenuWindowOne.prototype.setDimensions = function(rx, ry, hd, vd, dx, dy, sF) {
  let centerX = innerWidth / 2;
  let xf = centerX - 200;
  let yf = 100;
  let dxf = 400;
  let dyf = 100
  return [xf, yf, dxf, dyf];
}

MainMenuWindowOne.prototype.render = function(sF) {
  preScaledHighlight(this.x, this.y, this.dx, this.dy, this.color);

}
