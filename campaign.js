let newBoard = new Board([12, 5]);

/*
let newCursor = new Cursor(newBoard);
let newDisplay = new Display(newBoard, newCursor);
*/

let link = new Link(newBoard, new RustedSword());
let zelda = new Zelda(newBoard, new Light());
let boko = new Bokoblin(newBoard, new RustedSword());
let roy = new Roy(newBoard, new RustedSword());
newBoard.placeUnit(link, [0,0]);
newBoard.placeUnit(zelda, [2,3]);
newBoard.placeUnit(boko, [2,1]);
newBoard.placeUnit(roy, [0, 3]);

/*
let player = new Player(newBoard, newDisplay);
*/
newChapter = new Chapter(newBoard, 'Destroy Enemy');
console.log(Link.prototype instanceof(Display));
console.log(zelda.possibleAttackSpaces());

animate();
