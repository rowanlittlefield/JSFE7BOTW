import Terrain from '@/terrain/terrain';

export default class Peak extends Terrain {

  constructor(board, position) {
    super(board, position);
  }

  terrainName() {
    return "Peak";
  }

  defenseBonus() {
    return 2;
  }

  avoidBonus() {
    return 40;
  }

  healBonus() {
    return 0;
  }

  moveCost(constructorName) {
    if (constructorName === 'Brigand') {
      return 4;
    } else {
      return Infinity;
    }
  }
}
