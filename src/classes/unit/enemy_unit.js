import Unit from '@/unit/unit';
import PathFinder from '@/pathfinding/path_finder';

export default class EnemyUnit extends Unit {
  constructor(board, behavior, unitOptions) {
    super(
      board,
      unitOptions,
    );

    this.behavior = behavior;
    this.pathFinder = new PathFinder(board, this);
  }

  waitForAnimationCompletion() {

  }
}
