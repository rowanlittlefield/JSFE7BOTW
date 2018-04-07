let display = new GlobalDisplay(new NullBoard(), new NullCursor, new nullPhaseStage());
let frameSource = new FrameSource(display);
let campaign = new Campaign(display, frameSource);

let game = new Game(
  display,
  frameSource,
  campaign,
  new MainMenu(new MainMenuWindowOne())
);

game.play();
