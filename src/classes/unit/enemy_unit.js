import Unit from '@/unit/unit';
import PathFinder from '@/pathfinding/path_finder';

function EnemyUnit(board, behavior, unitOptions) {
  Unit.call(
    this,
    board,
    unitOptions,
    );
  this.behavior = behavior;
  this.pathFinder =  new PathFinder(board, this);
}

EnemyUnit.prototype = Object.create(Unit.prototype);
EnemyUnit.prototype.constructor = EnemyUnit;

EnemyUnit.prototype.waitForAnimationCompletion = function() {

}

export default EnemyUnit;
