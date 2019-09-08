import Controller from '@/game_attribute/controller';
import GlobalDisplay from '@/game_attribute/global_display';
import FrameSource from '@/game_attribute/frame_source';
import Campaign from '@/game_attribute/campaign';
import MainMenu from '@/game_attribute/main_menu';

function Game() {
  const sF = 45;
  
  this.controller = new Controller(this);
  this.display = new GlobalDisplay(sF);
  this.frameSource = new FrameSource(this.display);
  this.campaign = new Campaign(this.display, this.frameSource);
  this.menu = new MainMenu();

  this.gameStage = null;
}

Game.prototype.receiveInput = function(button) {
  //takes input from controller and takes appropriate action
  if (this.gameStage === 'Main Menu') {
    let response = this.menu.receiveControllerInput(button);
    if (response === 'New Game') {
      this.playCampaign();
    }
  } else if (this.gameStage === 'Play Campaign') {
    this.campaign.receiveControllerInput(button);
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
  // debugger;
  this.gameStage = 'Play Campaign';
  this.campaign.play();
}

export default Game;
