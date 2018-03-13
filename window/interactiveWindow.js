function InteractiveWindow(rx, ry, hd, vd, dx, dy, options) {
  GameWindow.call(this, rx, ry, hd, vd, dx, dy);
  this.options = options;
  this.cursorPos = 0;
}

InteractiveWindow.prototype = Object.create(GameWindow.prototype);
InteractiveWindow.prototype.constructor = InteractiveWindow;

InteractiveWindow.prototype.scrollCursor = function(button) {
  if (button == "down" && this.cursorPos < this.options.length - 1) {
    this.cursorPos += 1;
  } else if(button == "up" && this.cursorPos > 0) {
    this.cursorPos -= 1;
  }
}

InteractiveWindow.prototype.returnOption = function() {
  return this.options[this.cursorPos];
}
