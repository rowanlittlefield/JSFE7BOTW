function PhaseStage() {
  this.stage = 'select unit';
}

PhaseStage.prototype.nextStage = function(newStage) {
  this.stage = newStage;
}

PhaseStage.prototype.render = function(sF) {
  c.font = "15px Arial";
  c.fillStyle = 'rgba(0, 0, 0, 1)';
  c.fillText(`${this.stage}`, 0, 400);
}
