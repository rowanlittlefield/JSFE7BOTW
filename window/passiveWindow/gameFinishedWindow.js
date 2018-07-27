function GameFinishedWindow() {
  this.dx = 45 * 2;
  this.dy = 45 * 1;

  this.backgroundSpriteOne = new CoordinateSprite(
    c, 120, 80, 120, 80, "window/InteractiveWindow/FE_6_story_scenes.png", 1,
    [[3, 3]]
  );
}

GameFinishedWindow.prototype.render = function(displayWindow) {
  this.backgroundSpriteOne.render(5, 5, 45);

  const sF = displayWindow.sF;
  const northY = ( (displayWindow.height / 2) -  sF * 1);
  let topX = (displayWindow.width / 2) -  (sF * 1);
  let topY = (northY) - displayWindow.y;

  preScaledHighlight(topX, topY, this.dx, this.dy, 'rgba(0,255,0,0.9)');

  renderTextWithFont('20px Arial', 'center', 'rgba(0,0,0,1)',
    'You win!!', topX + (1 * sF), topY + 0.5 *sF);
}
