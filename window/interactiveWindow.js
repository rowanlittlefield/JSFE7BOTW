function InteractiveWindow(rx, ry, hd, vd, dx, dy, options) {
  GameWindow.call(this, rx, ry, hd, vd, dx, dy);
  this.options = options;
}

InteractiveWindow.prototype = Object.create(GameWindow.prototype);
InteractiveWindow.prototype.constructor = InteractiveWindow;
