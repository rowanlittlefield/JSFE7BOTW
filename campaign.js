let newBoard = new Board([16, 5]);
let link = new Link(newBoard, new RustedSword());
let zelda = new Zelda(newBoard, new Light());
let boko = new Bokoblin(newBoard, new RustedSword(), 'TWBS');
let bokoTwo = new Bokoblin(newBoard, new RustedSword(), 'TWBS');
let roy = new Roy(newBoard, new RustedSword());
newBoard.placeUnit(link, [7,0]);
newBoard.placeUnit(zelda, [6,2]);
newBoard.placeUnit(boko, [9,1]);
newBoard.placeUnit(bokoTwo, [13,2]);
newBoard.placeUnit(roy, [0, 3]);
new Wall(newBoard, [10, 1]);
new Wall(newBoard, [10, 2]);
new Wall(newBoard, [10, 3]);
//let pathAndSteps = boko.viablePathToUnit(boko.position, zelda.position);
console.log('Boko to Zelda opt route');
//let optRPositions = boko.optimalRoutePositions(pathAndSteps[0], pathAndSteps[1], boko.position, zelda.position);
//console.log(optRPositions);
//console.log(boko.siftRoute(optRPositions, boko.position, zelda.position));
//boko.toNearestOppUnit();
/*
let player = new Player(newBoard, newDisplay);
*/
newChapter = new Chapter(newBoard, 'Destroy Enemy');
newObject = {'0': 1234};
console.log(newObject[0]);
animate();
