import MainMenuWindowOne from '@/game_window/main_menu_window_one';

function MainMenu() {
  this.windowOne = new MainMenuWindowOne();
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
