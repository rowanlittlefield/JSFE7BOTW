let newBoard = new Board([13, 7]);

let roy = new Roy(newBoard, new RustedSword());
let lyn = new Lyn(newBoard, new RustedSword());
newBoard.placeUnit(roy, [0, 0]);
newBoard.placeUnit(lyn, [2, 6]);
newBoard.placeUnit(new Bokoblin(newBoard, new RustedSword(), 'seekAndDestroy'), [11, 0]);

new Wall(newBoard, [1, 2]);

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
console.log(isEmpty({tiger: 3}));
console.log(2 + -1);
animate();
