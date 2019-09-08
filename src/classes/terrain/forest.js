import Terrain from '@/terrain/terrain';

export default class Forest extends Terrain {

  constructor(board, position) {
    super(board, position);
  }

  terrainName() {
    return "Forest";
  }

  defenseBonus() {
    return 1;
  }

  avoidBonus() {
    return 20;
  }

  healBonus() {
    return 0;
  }

  moveCost() {
    return 2;
  }
}
