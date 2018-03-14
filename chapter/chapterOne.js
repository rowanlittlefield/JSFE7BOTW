function ChapterOne(sF) {
  Chapter.call(this,
    this.setupBoard(),
    'Seize Throne',
    sF
  );
}

ChapterOne.prototype = Object.create(Chapter.prototype);
ChapterOne.prototype.constructor = ChapterOne;

ChapterOne.prototype.setupBoard = function() {
  let newBoard = new Board([21, 17], new Sprite(c, 336, 299, 378, 336.375, 'chapter/Chapter18xMapSample.png', 1, 1));


  let roy = new Roy(newBoard, new Inventory([new SwordOfSeals()]));
  let lyn = new Lyn(newBoard, new Inventory([new ManiKatti()]));
  newBoard.placeUnit(roy, [18, 3]);
  newBoard.placeUnit(lyn, [17, 3]);
  newBoard.placeUnit(new Brigand(newBoard, new Inventory([new IronAxe]), 'seekAndDestroy'), [2, 3]);
  newBoard.placeUnit(new Brigand(newBoard, new Inventory([new IronAxe]), 'TWBS'), [13, 2]);



  for(let i = 0; i < 4; i++) {
    new Wall(newBoard, [i, 0]);
  }

  for(let i = 0; i < 4; i++) {
    new Wall(newBoard, [i, 1]);
  }

  for(let i = 0; i < 3; i++) {
    new Wall(newBoard, [i, 2]);
  }

  for(let i = 0; i < 2; i++) {
    new Wall(newBoard, [i, 3]);
  }

  new Forest(newBoard, [17, 0]);
  new Forest(newBoard, [18, 0]);
  new Forest(newBoard, [17, 1]);
  new Forest(newBoard, [19, 1]);
  new Forest(newBoard, [20, 1]);

  for(let i = 17; i < 20; i++) {
    new Forest(newBoard, [i, 2]);
  }

  for(let i = 3; i < 6; i++) {
    new Forest(newBoard, [19, i]);
  }
  for(let i = 3; i < 13; i++) {
    new Forest(newBoard, [20, i]);
  }

  return newBoard;
}
