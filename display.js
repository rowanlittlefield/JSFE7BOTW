function Display(board, cursor) {
  this.board = board;
  this.cursor = cursor;
}

Display.prototype.render = function(sF) {
  if(this.cursor.selectedUnit === null || this.cursor.selectedUnitPrevPos != null) {
    this.renderBoard(sF);
  } else if(this.cursor.selectedUnit != null && this.cursor.selectedUnitPrevPos === null) {
    this.possibleMovesRender(this.cursor.selectedUnit, this.cursor.moveSpaces, this.cursor.attackSpaces, sF);
  }
  if(this.board.grid[this.cursor.cursorPos[0]][this.cursor.cursorPos[1]][0] != null &&
    this.cursor.selectedUnit === null && this.cursor.selectedUnitPrevPos === null) {
      this.renderUnitHPWindow(sF);
    }
  if (this.cursor.selectedUnit != null && this.cursor.selectedUnitPrevPos != null) {
    this.renderPostMovePhaseWindow(sF);
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

Display.prototype.renderUnitHPWindow = function(sF) {
  let windowx = window.innerWidth - (6 * sF);
  let windowEndx = windowx + (6 * sF);
  let unit = this.board.grid[this.cursor.cursorPos[0]][this.cursor.cursorPos[1]][0];

  unit instanceof(PlayerUnit) ? c.fillStyle = "rgba(0, 255, 255, 0.7)": c.fillStyle = "rgba(255, 0, 0, 0.7)";
  //c.fillStyle = "rgba(0, 255, 255, 0.7)";
  c.fillRect(windowx, 0, 6 * sF, 2 * sF);
  unit.hpWindowSprite.renderSprite(
    windowx,
    0,
    2 * sF,
    2 * sF
  );
  c.font = "20px Arial";
  c.fillStyle = 'rgba(0,0,0,1)';
  c.fillText(`${unit.name}`, windowx + (2 * sF), 0.5 *sF);
  c.fillText(`HP: ${unit.current_hp} / ${unit.stats['hp']}`, windowx + (2 * sF), 1 * sF);
  c.fillStyle = "rgba(0, 0, 0, 0.9)";
  c.fillRect(windowx + (2 * sF), 1.2 * sF, 3.5 * sF, 0.5 * sF);
  c.fillStyle = "rgba(255, 223, 0, 1)";
  c.fillRect(windowx + (2 * sF), 1.3 * sF, 3.5 * sF *(unit.current_hp / unit.stats['hp']), 0.3 * sF);
}

Display.prototype.renderPostMovePhaseWindow = function(sF) {
  let unitPosition = this.cursor.selectedUnit.position;
  let windowx = (unitPosition[0] * sF) + (2 * sF);
  let windowy = (unitPosition[1] * sF);
  c.fillStyle = "rgba(65, 105, 225, 1)";
  c.fillRect(windowx, windowy, 2 * sF, sF);
  c.font = "20px Arial";
  c.fillStyle = 'rgba(255, 255, 225, 1)';
  c.fillText('End', windowx, windowy + sF *0.5);
}
