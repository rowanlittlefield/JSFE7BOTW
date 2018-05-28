function FrameSource(display) {
  this.display = display;
  this.aiPlayer = null;
  this.aiPhase = false;
}

FrameSource.prototype.getFrames = function() {
  window.requestAnimationFrame(this.getFrames.bind(this));
  // c.clearRect(0, 0, innerWidth, 17 * 18);
  this.display.render();
  if(this.aiPhase && !this.display.combatAnimation) this.aiPhaseFrameUpdate();
}

FrameSource.prototype.beginAIPhase = function(aiPlayer) {
  this.aiPhase = true;
  this.aiPlayer = aiPlayer;
}

FrameSource.prototype.endAIPhase = function() {
  this.aiPhase = false;
  this.aiPlayer = null;
}


FrameSource.prototype.aiPhaseFrameUpdate = function() {
  this.aiPlayer.phaseFrameUpdate();
}
