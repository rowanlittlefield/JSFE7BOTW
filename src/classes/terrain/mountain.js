import Terrain from '@/terrain/terrain';

export default class Mountain extends Terrain {

  constructor(board, position) {
    super(board, position);
  }

  terrainName() {
    return "Mountain";
  }

  defenseBonus() {
    return 1;
  }

  avoidBonus() {
    return 30;
  }

  healBonus() {
    return 0;
  }

  moveCost(constructorName) {
    if (constructorName === 'Brigand') {
      return 3;
    } else {
      return 4;
    }
  }
}
