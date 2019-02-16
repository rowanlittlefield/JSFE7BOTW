export default class Terrain {

  constructor(board, position) {
    this.board = board;
    this.setTerrain(position);
  }

  setTerrain(pos) {
    if (this.board.setTerrainAtPosition(this, pos)) {
      this.position = pos;
    } else {
      throw 'Space already occupied';
    }
  }

  render() {
  }

  terrainName() {
    return "Terrain";
  }

  defenseBonus() {
    return 0;
  }

  avoidBonus() {
    return 0;
  }

  healBonus() {
    return 0;
  }

  moveCost() {
    return 1;
  }
}
