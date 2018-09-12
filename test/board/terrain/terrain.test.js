import Terrain from '../../../board/terrain/terrain';

describe('Terrain', () => {
  const board = {grid: [[{terrain: null}]]};
  const terrain = new Terrain(board, [0,0]);

  it('returns the default terrainName of "Terrain"', () => {
    expect(terrain.terrainName()).toBe('Terrain');
  });

  it('returns the default terrain defenseBonus of 0', () => {
    expect(terrain.defenseBonus()).toBe(0);
  });

  it('returns the default terrain avoidBonus of 0', () => {
    expect(terrain.avoidBonus()).toBe(0);
  });

  it('returns the default terrain healBonus of 0', () => {
    expect(terrain.healBonus()).toBe(0);
  });

  it('returns the default terrain moveCost of 1', () => {
    expect(terrain.moveCost()).toBe(1);
  });
});
