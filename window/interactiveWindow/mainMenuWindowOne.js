function MainMenuWindowOne() {
  let options = ['New Game', 'Credits']
  InteractiveWindow.call(this, 0, 0, 0, 0, innerWidth, 100, options);
  this.color = "rgba(65, 105, 225, 1)";
  // this.backgroundSprite = new Sprite(c, 239, 159, 239, 159, "FEtitleScreen.gif", 1, 1);
  // this.roySprite = new Sprite(c, 1766, 1184, 1776, 1184, "game/FE_Heroes_Intro_Roy_edit_silo.png", 1, 1);
  // this.lynSprite = new Sprite(c, 475, 600, 475, 600, "game/FE_Heroes_Intro_Lyndis_silo.png", 1, 1);
}

MainMenuWindowOne.prototype = Object.create(InteractiveWindow.prototype);
MainMenuWindowOne.prototype.constructor = MainMenuWindowOne;

MainMenuWindowOne.prototype.setDimensions = function(rx, ry, hd, vd, dx, dy, sF) {
  // debugger;
  // innerWidth;
  // let centerX = innerWidth / 2;
  let centerX = (45*15)/2;

  let xf = centerX - 100;
  let yf = 300;
  let dxf = 200;
  let dyf = 60;
  return [xf, yf, dxf, dyf];
}

MainMenuWindowOne.prototype.render = function(sF) {
  // this.backgroundSprite.renderFromCoordinates(0, 0, innerWidth, 800);
  // this.roySprite.renderFromCoordinates(0, 100, 178.6 * 4, 118.4 * 4);
  // this.lynSprite.renderFromCoordinates(900, 0, 475 *(0.90), 600 *(0.90));

  preScaledHighlight(this.x, this.y, this.dx, this.dy, this.color);

  for(let i = 0; i < this.options.length; i++) {
    renderTextWithFont("20px Arial", 'center', 'rgba(255, 255, 225, 1)',
    `${this.options[i]}`, this.x + (this.dx / 2), this.y + ((1 + i) * sF * 0.5));

    if (this.cursorPos === i) {
      c.fillStyle = "rgba(255, 223, 0, 0.5)";
      c.fillRect(this.x, this.y + ((0.1) + (i * 0.5)) * sF , this.dx, sF * 0.5);
    }
  }

}
