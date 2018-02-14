let newBoard = new Board([11, 20]);

let link = new Link(newBoard, new RustedSword());
let zelda = new Zelda(newBoard, new Light());
let roy = new Roy(newBoard, new RustedSword());

newBoard.placeUnit(link, [4,5]);
newBoard.placeUnit(zelda, [4,4]);
newBoard.placeUnit(roy, [0, 0]);
newBoard.placeUnit(new HylianSoldier(newBoard, new RustedSword()), [3,4]);
newBoard.placeUnit(new HylianSoldier(newBoard, new RustedSword()), [2,4]);
newBoard.placeUnit(new HylianSoldier(newBoard, new RustedSword()), [3,5]);
newBoard.placeUnit(new HylianSoldier(newBoard, new RustedSword()), [2,5]);

newBoard.placeUnit(new HylianSoldier(newBoard, new RustedSword()), [7,4]);
newBoard.placeUnit(new HylianSoldier(newBoard, new RustedSword()), [7,5]);

newBoard.placeUnit(new HylianSoldier(newBoard, new RustedSword()), [2,13]);
newBoard.placeUnit(new HylianSoldier(newBoard, new RustedSword()), [3,13]);
newBoard.placeUnit(new HylianSoldier(newBoard, new RustedSword()), [4,13]);
newBoard.placeUnit(new HylianSoldier(newBoard, new RustedSword()), [5,13]);
newBoard.placeUnit(new HylianSoldier(newBoard, new RustedSword()), [6,13]);
newBoard.placeUnit(new HylianSoldier(newBoard, new RustedSword()), [7,13]);

newBoard.placeUnit(new Bokoblin(newBoard, new RustedSword(), 'seekAndDestroy'), [0, 16]);
newBoard.placeUnit(new Bokoblin(newBoard, new RustedSword(), 'seekAndDestroy'), [0, 17]);
newBoard.placeUnit(new Bokoblin(newBoard, new RustedSword(), 'seekAndDestroy'), [0, 18]);
newBoard.placeUnit(new Bokoblin(newBoard, new RustedSword(), 'seekAndDestroy'), [0, 19]);

newBoard.placeUnit(new Bokoblin(newBoard, new RustedSword(), 'seekAndDestroy'), [3, 16]);
newBoard.placeUnit(new Bokoblin(newBoard, new RustedSword(), 'seekAndDestroy'), [3, 17]);
newBoard.placeUnit(new Bokoblin(newBoard, new RustedSword(), 'seekAndDestroy'), [3, 18]);
newBoard.placeUnit(new Bokoblin(newBoard, new RustedSword(), 'seekAndDestroy'), [3, 19]);

newBoard.placeUnit(new Bokoblin(newBoard, new RustedSword(), 'seekAndDestroy'), [6, 16]);
newBoard.placeUnit(new Bokoblin(newBoard, new RustedSword(), 'seekAndDestroy'), [6, 17]);
newBoard.placeUnit(new Bokoblin(newBoard, new RustedSword(), 'seekAndDestroy'), [6, 18]);
newBoard.placeUnit(new Bokoblin(newBoard, new RustedSword(), 'seekAndDestroy'), [6, 19]);

newBoard.placeUnit(new Bokoblin(newBoard, new RustedSword(), 'seekAndDestroy'), [9, 16]);
newBoard.placeUnit(new Bokoblin(newBoard, new RustedSword(), 'seekAndDestroy'), [9, 17]);
newBoard.placeUnit(new Bokoblin(newBoard, new RustedSword(), 'seekAndDestroy'), [9, 18]);
newBoard.placeUnit(new Bokoblin(newBoard, new RustedSword(), 'seekAndDestroy'), [9, 19]);

new Wall(newBoard, [1, 2]);
new Wall(newBoard, [1, 3]);
new Wall(newBoard, [1, 4]);
new Wall(newBoard, [1, 5]);
new Wall(newBoard, [1, 6]);

new Wall(newBoard, [2, 6]);
new Wall(newBoard, [3, 6]);
new Wall(newBoard, [4, 6]);
new Wall(newBoard, [5, 6]);

new Wall(newBoard, [5, 5]);
new Wall(newBoard, [5, 4]);
new Wall(newBoard, [5, 3]);
new Wall(newBoard, [5, 2]);

new Wall(newBoard, [6, 2]);
new Wall(newBoard, [4, 2]);
new Wall(newBoard, [3, 2]);

new Wall(newBoard, [6, 3]);
new Wall(newBoard, [4, 3]);
new Wall(newBoard, [3, 3]);

new Wall(newBoard, [0, 8]);
new Wall(newBoard, [1, 8]);
new Wall(newBoard, [2, 8]);
new Wall(newBoard, [3, 8]);
new Wall(newBoard, [4, 8]);
new Wall(newBoard, [5, 8]);
new Wall(newBoard, [6, 8]);
new Wall(newBoard, [7, 8]);

new Wall(newBoard, [7, 7]);
new Wall(newBoard, [7, 6]);


new Wall(newBoard, [0, 10]);
new Wall(newBoard, [1, 10]);
new Wall(newBoard, [2, 10]);
new Wall(newBoard, [3, 10]);
new Wall(newBoard, [4, 10]);
new Wall(newBoard, [5, 10]);
new Wall(newBoard, [6, 10]);
new Wall(newBoard, [7, 10]);

new Wall(newBoard, [1, 16]);
new Wall(newBoard, [1, 17]);
new Wall(newBoard, [1, 18]);
new Wall(newBoard, [1, 19]);

new Wall(newBoard, [2, 16]);
new Wall(newBoard, [2, 17]);
new Wall(newBoard, [2, 18]);
new Wall(newBoard, [2, 19]);

new Wall(newBoard, [4, 16]);
new Wall(newBoard, [4, 17]);
new Wall(newBoard, [4, 18]);
new Wall(newBoard, [4, 19]);

new Wall(newBoard, [5, 16]);
new Wall(newBoard, [5, 17]);
new Wall(newBoard, [5, 18]);
new Wall(newBoard, [5, 19]);

new Wall(newBoard, [7, 16]);
new Wall(newBoard, [7, 17]);
new Wall(newBoard, [7, 18]);
new Wall(newBoard, [7, 19]);

new Wall(newBoard, [8, 16]);
new Wall(newBoard, [8, 17]);
new Wall(newBoard, [8, 18]);
new Wall(newBoard, [8, 19]);

new Wall(newBoard, [10, 16]);
new Wall(newBoard, [10, 17]);
new Wall(newBoard, [10, 18]);
new Wall(newBoard, [10, 19]);



newChapter = new Chapter(newBoard, 'Destroy Enemy', 52);
// debugger;
// let acc = zelda.accuracy(boko);
//
//
// let attackTest = new AttackSequence(zelda, boko, zelda.current_hp, boko.current_hp);
// let combatSequenceTest = new CombatSequence(zelda, bokothree);
// debugger;
// let sprite0 = new Sprite(c, 70, 43, 70, 43, 'units/playerUnits/roy/royCombatSprite0.png', 5, 6);
// let sprite1 = new Sprite(c, 46, 32, 46, 32, 'units/playerUnits/roy/royCombatSprite.png', 5, 6);
// let sprite2 = new Sprite(c, 64, 42, 64, 42, 'units/playerUnits/roy/royCombatSprite2.png', 5, 6);
// let sprite3 = new Sprite(c, 64, 61, 64, 61, 'units/playerUnits/roy/royCombatSprite3.png', 5, 6);
// let sprite4 = new Sprite(c, 90, 52, 90, 52, 'units/playerUnits/roy/royCombatSprite4.png', 5, 4);
// let sprite5 = new Sprite(c, 110, 67, 110, 67, 'units/playerUnits/roy/royCombatSprite5.png', 5, 2);
//
// fightSprite = new CombatSprite(c, [sprite0, sprite1, sprite2, sprite3, sprite4, sprite5]);
console.log(randomNumberFromOneTo(100));
animate();
