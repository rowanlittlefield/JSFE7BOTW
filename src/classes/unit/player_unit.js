import Unit from '@/unit/unit';
import PathFinder from '@/pathfinding/path_finder';

export default class PlayerUnit extends Unit {
  constructor(board, unitOptions) {
    super(
      board,
      unitOptions,
    );

    this.prevPos = null;
    this.windowOptions = null;
    this.fightOptions = null;

    this.pathFinder = new PathFinder(board, this);
  }

  setMoveForecast() {
    this.inTransit = true;
    this.prevPos = [this.position[0], this.position[1]];

    this.pathFinder.setupSingleMovePositionSets(this.position)
  }

  nullifyOptions() {
    this.prevPos = null;
    this.windowOptions = null;
    this.fightOptions = null;
    this.inTransit = false;

    this.pathFinder.clearAndUpdate(this.position);
  }

  renderMoveSpaces(sF, x, y, width, height) {
    this.pathFinder.renderSingleMovePositionSets(
      sF,
      x,
      y,
      width,
      height
    );
  }
}