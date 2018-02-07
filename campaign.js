let newBoard = new Board([15, 6]);
let link = new Link(newBoard, new RustedSword());
let zelda = new Zelda(newBoard, new Light());
let boko = new Bokoblin(newBoard, new RustedSword(), 'TWBS');
let bokoTwo = new Bokoblin(newBoard, new RustedSword(), 'seekAndDestroy');
let bokothree = new Bokoblin(newBoard, new RustedSword(), 'seekAndDestroy');
let bokoFour = new Bokoblin(newBoard, new RustedSword(), 'seekAndDestroy');
let bokoFive = new Bokoblin(newBoard, new RustedSword(), 'seekAndDestroy');
let roy = new Roy(newBoard, new RustedSword());
newBoard.placeUnit(link, [7,0]);
newBoard.placeUnit(zelda, [6,0]);
newBoard.placeUnit(boko, [12,4]);
newBoard.placeUnit(bokoTwo, [13,2]);
newBoard.placeUnit(bokothree, [0,0]);
newBoard.placeUnit(bokoFour, [1,0]);
newBoard.placeUnit(bokoFive, [7,5]);
newBoard.placeUnit(roy, [5, 0]);

new Wall(newBoard, [2, 0]);
new Wall(newBoard, [2, 1]);
new Wall(newBoard, [2, 2]);
new Wall(newBoard, [2, 3]);
new Wall(newBoard, [2, 4]);
new Wall(newBoard, [3, 4]);
new Wall(newBoard, [4, 4]);

new Wall(newBoard, [7, 4]);
new Wall(newBoard, [8, 4]);
new Wall(newBoard, [9, 4]);
new Wall(newBoard, [10, 4]);
new Wall(newBoard, [11, 3]);
new Wall(newBoard, [11, 2]);
new Wall(newBoard, [11, 0]);

new Wall(newBoard, [4,0]);
new Wall(newBoard, [4,1]);
new Wall(newBoard, [5,1]);
new Wall(newBoard, [6,1]);
new Wall(newBoard, [8,1]);
new Wall(newBoard, [9,1]);
new Wall(newBoard, [9,0]);

// console.log('Boko to Zelda opt route');
newChapter = new Chapter(newBoard, 'Destroy Enemy');
// newObject = {'0': 1234};
// console.log(newObject[0]);

// function SillyUnit(name, stats) {
//   this.name = name;
//   this.stats = stats;
// }
//
// function Stats(level) {
// this.level = level;
// }
//
// sillyUnit = new SillyUnit('Theodore', new Stats(3));
// console.log(sillyUnit.stats['level']);

// fightSprite = new CombatSprite(c, 46, 32, 46, 32, 'units/playerUnits/roy/royCombatSprite.png', 6, 6);
animate();
