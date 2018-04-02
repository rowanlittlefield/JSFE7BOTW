function FrameSource(display) {
  this.display = display;
  this.aiPlayer = null;
  this.aiPlayerphase = false;
}

FrameSource.prototype.initiateFrameStream = function() {
  requestAnimationFrame(this.initiateFrameStream);
  c.clearRect(0, 0, innerWidth, 17 * 52);
  newChapter.display.render(52, newChapter.phase);
  if(this.AIPlayerPhaseContinue) this.aiPhaseFrameUpdate();
}

FrameSource.prototype.beginAIPhase = function(aiPlayer) {
  this.aiPhase = true;
  this.aiPlayer = aiPlayer;
}

FrameSource.prototype.aiPhaseFrameUpdate = function() {
  this.activeAIPlayer.phaseFrameUpdate;
}