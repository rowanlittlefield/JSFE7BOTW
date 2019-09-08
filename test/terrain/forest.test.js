import Forest from '@/terrain/forest';
import Terrain from '@/terrain/terrain';

describe('Forest', () => {
  let mockSetTerrainAtPosition;
  let board;
  let pos;
  let forest;

  beforeEach(() => {
    mockSetTerrainAtPosition = jest.fn();
    mockSetTerrainAtPosition.mockReturnValue(true);
    board = { setTerrainAtPosition: mockSetTerrainAtPosition };
    pos = [0,0]
    forest = new Forest(board, pos);
  });

  describe('Constructor', () => {
    it('inherits from Terrain', () => {
      expect(Forest.prototype instanceof Terrain).toBe(true);
    });
  });

  describe('Forest.prototype.terrainName', () => {
    it('returns "Forest"', () => {
      expect(forest.terrainName()).toBe('Forest');
    });
  });

  describe('Forest.prototype.defenseBonus', () => {
    it('returns 1', () => {
      expect(forest.defenseBonus()).toBe(1);
    });
  });

  describe('Forest.prototype.avoidBonus', () => {
    it('returns 20', () => {
      expect(forest.avoidBonus()).toBe(20);
    });
  });

  describe('Forest.prototype.healBonus', () => {
    it('returns 0', () => {
      expect(forest.healBonus()).toBe(0);
    });
  });

  describe('Forest.prototype.moveCost', () => {
    it('returns 2', () => {
      expect(forest.moveCost()).toBe(2);
    });
  });
});
