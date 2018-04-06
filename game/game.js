function Game(display, campaign, menu) {
  this.controller = new Controller(this);
  this.frameSource = new FrameSource(display);

  this.display = display;
  this.campaign = campaign;
  this.menu = menu;

  this.gameStage = null;
}

Game.prototype.receiveInput = function(button) {
  //takes input from controller and takes appropriate action
}

Game.prototype.play = function() {
  // performs initial tasks, calls this.frameSource.getFrames()
  this.gameStage = 'Main Menu';
  this.frameSource.getFrames();
}

Game.prototype.playCampaign = function() {
  // this.campaign.play();
}
