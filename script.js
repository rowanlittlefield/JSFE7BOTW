// debugger;
let = display = new GlobalDisplay(null, null, null);
game = new Game(
  display,
  new Campaign(display),
  new MainMenu(new MainMenuWindowOne())
);

game.play();
