import CoordinateSprite from '../../animations/coordinateSprite';
import { preScaledHighlight, renderTextWithFont } from '../../miscellaneousFunctions/MiscellaneousFunctions';
import Sprite from '../../animations/sprite';
import { c } from '../../createContext';

function drawStrokedSmaller(text, x, y, opacity) {
    c.font = "15px Serif"
    c.strokeStyle = 'black';
    c.lineWidth = 6;
    c.strokeText(text, x, y);
    c.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    c.fillText(text, x, y);
}

function GameFinishedWindow() {
  this.dx = 45 * 2;
  this.dy = 45 * 1;

  this.backgroundWindow = new CoordinateSprite(
    315, 191, 140, 95, "src/assets/window_images/fe_new_background_window.png", 1,
    [[0, 0]]
  );

  this.backgroundSpriteOne = new CoordinateSprite(
    118, 79, 118, 79, "src/assets/window_images/FE_6_story_scenes.png", 1,
    [[4, 3]]
  );
  this.scrollSprite = new Sprite(480, 320, 480*0.5, 320*0.5, "src/assets/window_images/fe_6_scroll_you_win.png", 1, 1);
}

GameFinishedWindow.prototype.render = function(displayWindow) {
  this.backgroundWindow.render(6.83, 6.45, 45);
  this.backgroundSpriteOne.render(6.8, 6, 45);
  this.scrollSprite.render(6.9, 10.5, 45);
  drawStrokedSmaller('Chapter Complete', 280, 365, 1);
}

export default GameFinishedWindow;
