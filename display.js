function Display(board, cursor) {
  this.board = board;
  this.cursor = cursor;
}

Display.prototype.render = function(sF) {
  if(this.cursor.selectedUnit === null) {
    this.renderBoard(sF);
  } else if(this.cursor.selectedUnit != null) {
    this.possibleMovesRender(this.cursor.selectedUnit, this.cursor.moveSpaces, this.cursor.attackSpaces, sF);
  }

}

Display.prototype.renderBoard = function(sF) {
  this.boardIterator(this.renderSpot.bind(this), sF);
}

Display.prototype.renderSpot = function(row, col, sF) {
    c.beginPath();
    c.lineWidth="1";
    c.strokeStyle="black"; // Green path
    c.moveTo(row * sF, col * sF);
    c.lineTo(row * sF + sF, col * sF);
    c.stroke();
    c.lineTo(row * sF + sF, col * sF + sF);
    c.stroke();
    c.lineTo(row * sF, col * sF + sF);
    c.stroke();
    c.lineTo(row * sF, col * sF);
    c.stroke();

    if(this.board.grid[row][col][0] != null){
      this.board.grid[row][col][0].mapSprite.renderSprite(
        row * sF +(sF * 0.1),
        col * sF + (sF * 0.01),
        0.8 * sF,
        1   * sF
      );
      if(this.board.grid[row][col][0].actionTaken) {
        c.fillStyle = "rgba(128, 128, 128, 0.2)";
        c.fill();
      }
    }

    if(row === this.cursor.cursorPos[0] &&  col === this.cursor.cursorPos[1]) {
      c.fillStyle = "rgba(255, 255, 0, 0.5)";
      c.fill();
    }
}

Display.prototype.possibleMovesRender = function(selectedUnit, moveSpaces, attackSpaces, sF) {
  this.boardIterator(this.moveSelectionRender.bind(this), sF);
}

Display.prototype.moveSelectionRender = function(row, col, sF) {
  if(this.cursor.moveSpaces[[row, col]]) {
    this.possibleMoveSpaceRender(row, col, sF);
  } if (this.cursor.attackSpaces[[row, col]]) {
    this.possibleAttackSpaceRender(row, col, sF);
  } else {
    this.renderSpot(row, col, sF);
  }
}

Display.prototype.possibleMoveSpaceRender = function(row, col, sF) {
  this.renderSpot(row, col, sF);
  c.fillStyle = "rgba(0, 0, 255, 0.2)";
  c.fillRect(row * sF, col * sF, sF, sF);
}

Display.prototype.possibleAttackSpaceRender = function(row, col, sF) {
  this.renderSpot(row, col, sF);
  c.fillStyle = "rgba(255, 0, 0, 0.2)";
  c.fillRect(row * sF, col * sF, sF, sF);
}

Display.prototype.boardIterator = function(callBack, sF) {
  for(let row = 0; row < this.board.grid.length; row++){
    for(let col = 0; col < this.board.grid[row].length; col++){
      callBack(row, col, sF);
    }
  }
}
