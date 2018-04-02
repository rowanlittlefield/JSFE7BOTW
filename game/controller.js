function Controller(game) {
  this.game = game;
  let that = this;

  this.checkKeyPress = function(key) {
    if (key.keyCode == "65") {
      that.game.receiveInput('left'); //a
    } else if (key.keyCode == "68") {
      that.game.receiveInput('right'); //d
    } else if (key.keyCode == "87") {
      that.game.receiveInput('up'); //w
    } else if (key.keyCode == "83") {
      that.game.receiveInput('down'); //s
    } else if (key.keyCode == "13") {
      that.game.receiveInput('A'); //enter
    } else if (key.keyCode == "66") {
      that.game.receiveInput('B'); //b
    } else if (key.keyCode == "86") {
      that.game.receiveInput('select'); //v
    } else if (key.keyCode == "67") {
      that.game.receiveInput('start'); //c
    }
  }

  window.addEventListener("keydown", this.checkKeyPress, false);
}

Controller.prototype.removeEventListener = function() {
  window.removeEventListener("keydown", this.checkKeyPress, false);
}
