import CoordinateSprite from '../../animations/coordinateSprite';
import { preScaledHighlight, renderTextWithFont } from '../../miscellaneousFunctions/MiscellaneousFunctions';
import { c } from '../../createContext';
import Sprite from '../../animations/sprite';
require("../interactiveWindow/FE_6_story_scenes.png");
require("../interactiveWindow/fe_6_scroll_you_win.png");
// "window/InteractiveWindow/FE_6_story_scenes.png"
// "window/InteractiveWindow/fe_6_scroll_you_win.png"

function GameFinishedWindow() {
  this.dx = 45 * 2;
  this.dy = 45 * 1;

  this.backgroundSpriteOne = new CoordinateSprite(
    c, 118, 79, 118, 79, require("../interactiveWindow/FE_6_story_scenes.png"), 1,
    [[4, 3]]
  );

  this.scrollSprite = new Sprite(c, 480, 320, 480*0.5, 320*0.5, require("../interactiveWindow/fe_6_scroll_you_win.png"), 1, 1);
}

GameFinishedWindow.prototype.render = function(displayWindow) {
  this.backgroundSpriteOne.render(6.8, 6, 45);
  this.scrollSprite.render(6.9, 10.5, 45);

  const sF = displayWindow.sF;
  const northY = ( (displayWindow.height / 2) -  sF * 1);
  let topX = (displayWindow.width / 2) -  (sF * 1);
  let topY = (northY) - displayWindow.y;

  preScaledHighlight(topX, topY, this.dx, this.dy, 'rgba(0,255,0,0.9)');

  renderTextWithFont('20px Arial', 'center', 'rgba(0,0,0,1)',
    'You win!!', topX + (1 * sF), topY + 0.5 *sF);
}

export default GameFinishedWindow;
