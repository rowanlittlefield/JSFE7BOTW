function PassiveWindow(rx, ry, hd, vd, dx, dy) {
  GameWindow.call(this, rx, ry, hd, vd, dx, dy);
}

PassiveWindow.prototype = Object.create(GameWindow.prototype);
PassiveWindow.prototype.constructor = PassiveWindow;

PassiveWindow.prototype.setDimensions = function(rx, ry, hd, vd, dx, dy, sF) {
  let x = (rx + hd + dx) * sF <= window.innerWidth ? (rx + hd) * sF : (rx - hd - dx) * sF;
  let y = (ry - vd) * sF >= 0 ? (ry - vd) * sF : (ry + vd) * sF;

  return [x, y, dx * sF, dy * sF];
}
