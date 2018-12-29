function MainMenu(windowOne) {
  this.windowOne = windowOne;
}

MainMenu.prototype.receiveControllerInput = function(button) {
  if (button == 'A') {
    if (this.windowOne.options[this.windowOne.cursorPos] === 'New Game') {
      return 'New Game';
    }
  } else {
    this.windowOne.scrollCursor(button);
  }
}

export default MainMenu
