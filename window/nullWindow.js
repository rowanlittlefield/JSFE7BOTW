function NullWindow() {
  
}

NullWindow.prototype = Object.create(GameWindow.prototype);
NullWindow.prototype.constructor = NullWindow;

NullWindow.prototype.render = function(sF, windowCursorPos) {

}
