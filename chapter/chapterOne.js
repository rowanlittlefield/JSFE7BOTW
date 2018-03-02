function ChapterOne(sF) {
  Chapter.call(this,
    this.setupBoard(),
    'Survive',
    sF
  );
}

ChapterOne.prototype = Object.create(Chapter.prototype);
ChapterOne.prototype.constructor = ChapterOne;

ChapterOne.prototype.setupBoard = function() {
  let newBoard = new Board([22, 28], new Sprite(c, 352, 448, 396, 504, 'chapter/Chapter29MapSample.png', 1, 1));

  let roy = new Roy(newBoard, new Inventory([new SwordOfSeals()]));
  let lyn = new Lyn(newBoard, new Inventory([new ManiKatti()]));
  newBoard.placeUnit(roy, [2, 2]);
  newBoard.placeUnit(lyn, [2, 6]);
  newBoard.placeUnit(new Brigand(newBoard, new Inventory([new IronAxe]), 'seekAndDestroy'), [2, 3]);
  newBoard.placeUnit(new Brigand(newBoard, new Inventory([new IronAxe]), 'TWBS'), [15, 2]);



  for(let i = 0; i < 14; i++) {
    new Wall(newBoard, [i, 0]);
  }

  for(let i = 5; i < 8; i++) {
    new Wall(newBoard, [i, 1]);
  }

  for(let i = 1; i < 8; i++) {
    new Wall(newBoard, [13, i]);
  }

  for(let i = 5; i < 8; i++) {
    new Wall(newBoard, [0, i]);
  }

  for(let i = 5; i < 8; i++) {
    new Wall(newBoard, [3, i]);
  }

  for(let i = 5; i < 8; i++) {
    new Wall(newBoard, [9, i]);
  }

  for(let i = 4; i < 9; i++) {
    new Wall(newBoard, [i, 5]);
    new Wall(newBoard, [i, 6]);
  }

  return newBoard;
}
