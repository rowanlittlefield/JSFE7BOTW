function PassiveWindow(unit) {
  GameWindow.call(this, unit);
}

PassiveWindow.prototype = Object.create(GameWindow.prototype);
PassiveWindow.prototype.constructor = PassiveWindow;
