function Game(contoller, display, frameSource, campaign, menu) {
  this.controller = controller;
  this.display = display;
  this.frameSource = frameSource;
  this.campaign = campaign;
  this.menu = menu;
}

Game.prototype.receiveInput = function(button) {
  //takes input from controller and takes appropriate action
}

Game.prototype.play = function() {
  // performs initial tasks, calls this.frameSource.getFrames() 
}

Game.prototype.playCampaign = function() {
  // this.campaign.play();
}
