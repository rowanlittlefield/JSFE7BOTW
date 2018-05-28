function RouteSpace(board, startPos, unit, crudePath, steps, endPos) {
  this.board = board;
  this.startPos = startPos;
  this.endPos = endPos;
  if (unit) {
    this.unit = unit
  } else if(this.board.space(startPos).unit) {
    this.unit = this.board.space(startPos).unit;
  }

  this.positions = crudePath;
  this.optimalRoutePositions = {};
  this.steps = steps;
}

RouteSpace.prototype.findOptimalRoutePositions = function() {
  let updatedViablePath = {};
  for(const position in this.positions) {
    if (this.steps >= distance(stringToPos(position), this.startPos) + distance(stringToPos(position), this.endPos)) {
      updatedViablePath[position] = this.positions[position];
    }
  }
  for(const position in updatedViablePath) {
    if (this.optimalRoutePosition(position, updatedViablePath[position])) {
      this.optimalRoutePositions[position] = updatedViablePath[position];
    }
  }
}

RouteSpace.prototype.optimalRoutePosition = function(pos, preSteps) {
  let stepsToPos = this.stepsToPosition(pos, this.endPos);
  return preSteps + stepsToPos <= this.steps;
}

RouteSpace.prototype.stepsToPosition = function(start, pos) {
  let moveSpace = new MoveSpace(this.board, stringToPos(start), this.unit);
  moveSpace.viablePathToOppUnit(pos);

  return moveSpace.steps;
}

RouteSpace.prototype.siftRoute = function() {
  let positions = [this.startPos];
  let optRPos = this.optimalRoutePositions;
  optRPos[this.endPos] = this.steps;
  delete optRPos[this.startPos];

  while (true) {
    if(equivalentPositions(this.endPos, positions[0])) return positions.reverse();
    let nextAdjacentPositions = [];
    for(const pos in optRPos) {
      if (distance(positions[0], stringToPos(pos)) === 1) {
        nextAdjacentPositions.unshift(stringToPos(pos));
      }
    }
    if (includePosition(nextAdjacentPositions, this.endPos)) {
      positions.unshift(this.endPos);
    } else {
      positions.unshift(nextAdjacentPositions[0]);
    }

    for(let i = 0; i < nextAdjacentPositions.length; i++) {
      delete optRPos[nextAdjacentPositions[i]];
    }
  }
}

RouteSpace.prototype.pickOptPos = function() {
  let positions = [];
  for(const pos in this.optimalRoutePositions) {
    positions.push(stringToPos(pos));
  }
  let sortedPositions = positions.sort(function(posOne, posTwo) {
    if (this.optimalRoutePositions[posTwo] > this.optimalRoutePositions[posOne]) {
      return 1;
    } else if (this.optimalRoutePositions[posTwo] < this.optimalRoutePositions[posOne]) {
      return -1;
    } else {
      return 0;
    }
  }.bind(this));

  let singleTurn = new MoveSpace(this.board, this.unit.position, this.unit);
  singleTurn.setSpaceForSingleTurnMove();

  for(let i = 0; i < sortedPositions.length; i ++) {
    // if (this.isValidMove(sortedPositions[i]) && this.optimalRoutePositions[sortedPositions[i]] <= this.unit.stats['move']) {
    //   return sortedPositions[i];
    // }
    if (singleTurn.validMovePos[sortedPositions[i]] != undefined) {
      return sortedPositions[i];
    }

  }
}

//rendering
Route.prototype.render = function(sF) {
  highlightSpaces(this.optimalRoutePositions, this.board,
    'rgba(123, 104, 238, 0.4)', sF);
}
