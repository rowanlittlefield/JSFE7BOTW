import Terrain from '@/terrain/terrain';

export default class Gate extends Terrain {

  constructor(board, position) {
    super(board, position);
  }

  terrainName() {
    return "Gate";
  }

  defenseBonus() {
    return 3;
  }

  avoidBonus() {
    return 20;
  }

  healBonus() {
    return 10;
  }

  moveCost() {
    return 1;
  }
}