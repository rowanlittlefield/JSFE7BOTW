import Wall from './terrain/wall';
import PlayerUnit from '../units/playerUnits/playerUnit';

function Space(position) {
  this.position = position;
  this.unit = null;
  this.terrain = null;
}

Space.prototype.isTraversable = function(isPlayerUnit) {
  return (this.unit === null ||
    this.unit instanceof(PlayerUnit) === isPlayerUnit);
}

export default Space;
