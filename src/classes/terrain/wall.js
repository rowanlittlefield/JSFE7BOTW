import Terrain from '@/terrain/terrain';

export default class Wall extends Terrain {

  constructor(board, position) {
    super(board, position);
  }

  terrainName() {
    return "Wall";
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
