function ChapterOne(display, frameSource, sF) {
  Chapter.call(this,
    this.setupBoard(),
    display,
    frameSource,
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
  newBoard.placeUnit(lyn, [17 - 4, 3 - 1]);
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





//thicket
  for(let i = 0; i < 4; i++) {
    new Thicket(newBoard, [i, 0]);
  }

  for(let i = 0; i < 4; i++) {
    new Thicket(newBoard, [i, 1]);
  }

  for(let i = 0; i < 3; i++) {
    new Thicket(newBoard, [i, 2]);
  }

  for(let i = 0; i < 2; i++) {
    new Thicket(newBoard, [i, 3]);
  }

  new Thicket(newBoard, [11, 2]);
  new Thicket(newBoard, [12, 2]);
  new Thicket(newBoard, [12, 1]);

  new Thicket(newBoard, [13, 4]);
  new Thicket(newBoard, [13, 5]);
  new Thicket(newBoard, [12, 6]);

  for(let i = 6; i < 10; i++) {
    new Thicket(newBoard, [i, 9]);
  }

  new Thicket(newBoard, [7, 8]);
  new Thicket(newBoard, [8, 8]);
  new Thicket(newBoard, [8, 10]);






  //wall

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

  for(let i =  7; i < 11; i++) {
    new Forest(newBoard, [19, i]);
  }
  new Forest(newBoard, [19, 12]);

  new Forest(newBoard, [16, 6]);
  new Forest(newBoard, [17, 7]);
  new Forest(newBoard, [17, 9]);
  new Forest(newBoard, [15, 9]);
  new Forest(newBoard, [15, 10]);
  new Forest(newBoard, [14, 11]);
  new Forest(newBoard, [14, 12]);
  new Forest(newBoard, [13, 13]);
  new Forest(newBoard, [16, 13]);
  new Forest(newBoard, [11, 11]);
  new Forest(newBoard, [12, 11]);
  new Forest(newBoard, [12, 10]);

  for(let i = 14; i < 21; i++) {
    new Forest(newBoard, [i, 16]);
  }
  new Forest(newBoard, [20, 15]);
  new Forest(newBoard, [18, 15]);
  new Forest(newBoard, [20, 14]);

  for(let i = 10; i < 13; i++) {
  new Forest(newBoard, [i, 16]);
  }
  new Forest(newBoard, [11, 14]);
  new Forest(newBoard, [9, 13]);
  new Forest(newBoard, [9, 12]);
  new Forest(newBoard, [7, 13]);
  new Forest(newBoard, [7, 15]);
  new Forest(newBoard, [8, 15]);
  new Forest(newBoard, [7, 16]);
  new Forest(newBoard, [6, 16]);

for(let i = 13; i < 17; i++) {
  new Forest(newBoard, [0, i]);
}
for(let i = 13; i < 17; i++) {
  new Forest(newBoard, [2, i]);
}
new Forest(newBoard, [3, 15]);
new Forest(newBoard, [4, 14]);
new Forest(newBoard, [4, 16]);

new Forest(newBoard, [1, 13]);
new Forest(newBoard, [1, 16]);
new Forest(newBoard, [1, 11]);

new Forest(newBoard, [0, 9]);
new Forest(newBoard, [0, 6]);
new Forest(newBoard, [3, 4]);

new Forest(newBoard, [6, 3]);
new Forest(newBoard, [7, 3]);

for(let i = 6; i < 11; i++) {
  new Forest(newBoard, [i, 1]);
}

for(let i = 8; i < 12; i++) {
  new Forest(newBoard, [i, 0]);
}

for(let i = 4; i < 7; i++) {
  new Forest(newBoard, [i, 0]);
}
new Forest(newBoard, [4, 1]);
new Forest(newBoard, [5, 2]);

new Forest(newBoard, [8, 2]);
new Forest(newBoard, [9, 2]);



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

//peak
  for(let i = 0; i < 3; i++) {
    new Peak(newBoard, [15, i])
  }
  for(let i = 0; i < 4; i++) {
    new Peak(newBoard, [14, i])
  }
  for(let i = 0; i < 4; i++) {
    new Peak(newBoard, [13, i])
  }
  for(let i = 3; i < 6; i++) {
    new Peak(newBoard, [12, i])
  }
  for(let i = 4; i < 8; i++) {
    new Peak(newBoard, [11, i])
  }
  for(let i = 5; i < 9; i++) {
    new Peak(newBoard, [10, i])
  }
  for(let i = 6; i < 9; i++) {
    new Peak(newBoard, [9, i])
  }
  new Peak(newBoard, [8, 7])
//fort
  new Fort(newBoard, [17, 3])
  new Fort(newBoard, [18, 3])
  new Fort(newBoard, [6, 5])
  new Fort(newBoard, [6, 11])
  new Fort(newBoard, [6, 12])

//gate
  new Gate(newBoard, [2, 6]);
//Village
  new Village(newBoard, [18, 14]);

  return newBoard;
}
