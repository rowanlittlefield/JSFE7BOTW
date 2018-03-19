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
  //Enemy units
  newBoard.placeUnit(new Brigand(newBoard, new Inventory([new IronAxe]), 'seekAndDestroy'), [13, 1]);
  newBoard.placeUnit(new Brigand(newBoard, new Inventory([new IronAxe]), 'seekAndDestroy'), [9, 6]);
  newBoard.placeUnit(new Brigand(newBoard, new Inventory([new IronAxe]), 'seekAndDestroy'), [10, 11]);
  newBoard.placeUnit(new Brigand(newBoard, new Inventory([new IronAxe]), 'seekAndDestroy'), [13, 12]);

  newBoard.placeUnit(new Brigand(newBoard, new Inventory([new IronAxe]), 'TWBS'), [9, 14]);
  newBoard.placeUnit(new Brigand(newBoard, new Inventory([new IronAxe]), 'TWBS'), [15, 15]);
  newBoard.placeUnit(new Brigand(newBoard, new Inventory([new IronAxe]), 'TWBS'), [3, 7]);
  newBoard.placeUnit(new Brigand(newBoard, new Inventory([new IronAxe]), 'TWBS'), [1, 7]);
  newBoard.placeUnit(new Brigand(newBoard, new Inventory([new IronAxe]), 'TWBS'), [1, 15]);

  newBoard.placeUnit(new Brigand(newBoard, new Inventory([new IronAxe]), 'idle'), [2, 6]);





//wall
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

  for(let i = 1; i < 4; i++) {
    new Wall(newBoard, [i, 5]);
  }
  new Wall(newBoard, [1, 6]);
  new Wall(newBoard, [3, 6]);

  for(let i = 17; i < 20; i++) {
    new Wall(newBoard, [i, 13]);
  }
  new Wall(newBoard, [17, 14]);
  new Wall(newBoard, [19, 14]);

//forest
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


//mountain
  for(let i = 0; i < 4; i++) {
    new Mountain(newBoard, [16, i]);
  }

  new Mountain(newBoard, [15, 3]);
  new Mountain(newBoard, [15, 4]);
  new Mountain(newBoard, [14, 4]);
  new Mountain(newBoard, [14, 5]);
  new Mountain(newBoard, [13, 6]);
  new Mountain(newBoard, [12, 7]);
  new Mountain(newBoard, [12, 8]);
  new Mountain(newBoard, [11, 8]);
  new Mountain(newBoard, [10, 9]);

  for(let i = 5; i < 8; i++) {
    new Mountain(newBoard, [i, 10]);
  }

  new Mountain(newBoard, [4, 9]);
  new Mountain(newBoard, [5, 9]);
  new Mountain(newBoard, [5, 8]);
  new Mountain(newBoard, [6, 8]);
  new Mountain(newBoard, [6, 7]);
  new Mountain(newBoard, [7, 7]);
  new Mountain(newBoard, [8, 6]);
  new Mountain(newBoard, [8, 5]);
  new Mountain(newBoard, [9, 5]);
  new Mountain(newBoard, [9, 4]);
  new Mountain(newBoard, [10, 4]);
  new Mountain(newBoard, [10, 3]);
  new Mountain(newBoard, [11, 3]);

  new Mountain(newBoard, [11, 1]);

  new Mountain(newBoard, [12, 0]);




























  return newBoard;
}
