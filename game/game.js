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
  if (this.gameStage === 'Main Menu') {
    let response = this.menu.receiveControllerInput(button);
    if (response === 'New Game') {
      this.playCampaign();
    }
  }
}

Game.prototype.play = function() {
  // performs initial tasks, calls this.frameSource.getFrames()
  this.gameStage = 'Main Menu';
  this.display.window = this.menu.windowOne;
  this.frameSource.getFrames();
}

Game.prototype.playCampaign = function() {
  // this.campaign.play();
  debugger;
  this.gameStage = 'Play Campaign';
  this.campaign.play();
}
