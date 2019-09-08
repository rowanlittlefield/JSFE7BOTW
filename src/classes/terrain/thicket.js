import Terrain from '@/terrain/terrain';

export default class Thicket extends Terrain {

  constructor(board, position) {
    super(board, position);
  }

  terrainName() {
    return "Thicket";
  }

  defenseBonus() {
    return "---";
  }

  avoidBonus() {
    return "---";
  }

  healBonus() {
    return 0;
  }

  moveCost() {
    return Infinity;
  }
}
