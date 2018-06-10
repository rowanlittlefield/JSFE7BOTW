function GameFinishedWindow() {
  this.dx = 45 * 2;
  this.dy = 45 * 1;
}

GameFinishedWindow.prototype.render = function(displayWindow) {
  const sF = displayWindow.sF;
  const northY = ( (displayWindow.height / 2) -  sF * 1);
  let topX = (displayWindow.width / 2) -  (sF * 1);
  let topY = (northY) - displayWindow.y;

  preScaledHighlight(topX, topY, this.dx, this.dy, 'rgba(0,255,0,0.9)');

  renderTextWithFont('20px Arial', 'center', 'rgba(0,0,0,1)',
    'You win!!', topX + (1 * sF), topY + 0.5 *sF);
}
