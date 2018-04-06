function FrameSource(display) {
  this.display = display;
  this.aiPlayer = null;
  this.aiPlayerphase = false;
}

FrameSource.prototype.getFrames = function() {
  window.requestAnimationFrame(this.getFrames.bind(this));
  c.clearRect(0, 0, innerWidth, 17 * 52);
  this.display.render(52);
  if(this.AIPlayerPhaseContinue) this.aiPhaseFrameUpdate();
}

FrameSource.prototype.beginAIPhase = function(aiPlayer) {
  this.aiPhase = true;
  this.aiPlayer = aiPlayer;
}

FrameSource.prototype.aiPhaseFrameUpdate = function() {
  this.activeAIPlayer.phaseFrameUpdate;
}
