let newBoard = new Board([12, 5]);

let link = new Link(newBoard, new RustedSword());
let zelda = new Zelda(newBoard, new Light());
let boko = new Bokoblin(newBoard, new RustedSword(), 'TWBS');
let bokoTwo = new Bokoblin(newBoard, new RustedSword(), 'TWBS');
let roy = new Roy(newBoard, new RustedSword());
newBoard.placeUnit(link, [0,0]);
newBoard.placeUnit(zelda, [2,3]);
newBoard.placeUnit(boko, [2,2]);
newBoard.placeUnit(bokoTwo, [3,2]);
newBoard.placeUnit(roy, [0, 3]);
console.log('Link shows stationary attackSpaces');
console.log(link.stationaryUnitAttackSpaces());
console.log('');
/*
let player = new Player(newBoard, newDisplay);
*/
newChapter = new Chapter(newBoard, 'Destroy Enemy');
console.log(Link.prototype instanceof(Display));
console.log(zelda.possibleAttackSpaces());
newObject = {'0': 1234};
console.log(newObject[0]);
animate();