import Terrain from '@/terrain/terrain';

export default class Village extends Terrain {

  constructor(board, position) {
    super(board, position);
  }

  terrainName() {
    return "Village";
  }

  defenseBonus() {
    return 0;
  }

  avoidBonus() {
    return 10;
  }

  healBonus() {
    return 0;
  }

  moveCost() {
    return 1;
  }
}
