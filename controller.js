function Controller(chapter) {
  this.chapter = chapter;
  let that = this;

  this.checkKeyPress = function(key) {
    if (key.keyCode == "65") {
      that.chapter.receiveInput('left'); //a
    } else if (key.keyCode == "68") {
      that.chapter.receiveInput('right'); //d
    } else if (key.keyCode == "87") {
      that.chapter.receiveInput('up'); //w
    } else if (key.keyCode == "83") {
      that.chapter.receiveInput('down'); //s
    } else if (key.keyCode == "13") {
      that.chapter.receiveInput('A'); //enter
    } else if (key.keyCode == "66") {
      that.chapter.receiveInput('B'); //b
    } else if (key.keyCode == "86") {
      that.chapter.receiveInput('select'); //v
    } else if (key.keyCode == "67") {
      that.chapter.receiveInput('start'); //c
    }
  }

  window.addEventListener("keydown", this.checkKeyPress, false);
}

Controller.prototype.removeEventListener = function() {
  window.removeEventListener("keydown", this.checkKeyPress, false);
}
