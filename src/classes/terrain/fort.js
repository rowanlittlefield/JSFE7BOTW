import Terrain from '@/terrain/terrain';

export default class Fort extends Terrain {

  constructor(board, position) {
    super(board, position);
  }

  terrainName() {
    return "Fort";
  }

  defenseBonus() {
    return 2;
  }

  avoidBonus() {
    return 20;
  }

  healBonus() {
    return 20;
  }

  moveCost() {
    return 2;
  }
}
