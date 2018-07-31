import InteractiveWindow from './interactiveWindow';
import Sprite from '../../animations/sprite';
import { c } from '../../createContext';
import CoordinateSprite from '../../animations/coordinateSprite';

function MainMenuWindowOne() {
  let options = ['New Game']//, 'Credits']
  InteractiveWindow.call(this, 0, 0, 0, 0, innerWidth, 100, options);
  this.color = "rgba(65, 105, 225, 1)";
  this.logoSprite = new Sprite(c, 240, 160, 240, 160, "window/InteractiveWindow/FE_titlescreen_logo.png", 1, 1);

  this.backgroundSpriteTwo = new CoordinateSprite(
    //238, 319
    c, 239, 150, 600/2.22, 450/2.5, "window/InteractiveWindow/FE_7_story_scenes.png", 1,
    [[490, 330]]
  );

  this.textOpacity = 0;
}

MainMenuWindowOne.prototype = Object.create(InteractiveWindow.prototype);
MainMenuWindowOne.prototype.constructor = MainMenuWindowOne;

MainMenuWindowOne.prototype.setDimensions = function(rx, ry, hd, vd, dx, dy, sF) {
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
  this.backgroundSpriteTwo.render(7, 9, 45);
  if (this.backgroundSpriteTwo.coordinatesList[0][1] < 490) {
    this.backgroundSpriteTwo.coordinatesList[0][1] += 0.15;
  } else if(this.textOpacity < 1) {
    this.textOpacity = this.textOpacity + 0.01
    drawStroked(`Press Enter`, 290, 400, this.textOpacity);
  } else {
    drawStroked(`Press Enter`, 290, 400, this.textOpacity);
  }
  this.logoSprite.render(7, 5.2, 45);

}

function drawStroked(text, x, y, opacity) {
    c.font = "20px Serif"
    c.strokeStyle = 'black';
    c.lineWidth = 7;
    c.strokeText(text, x, y);
    c.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    c.fillText(text, x, y);
}

export default MainMenuWindowOne;
