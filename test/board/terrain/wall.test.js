import Terrain from '../../../board/terrain/terrain';
import Wall from '../../../board/terrain/wall';
jest.mock('../../../board/terrain/terrain');

describe('Wall', () => {
  const mockSetTerrainAtPositionTrue = jest.fn();
  mockSetTerrainAtPositionTrue.mockReturnValue(true);
  const mockSetTerrainAtPositionFalse = jest.fn();
  mockSetTerrainAtPositionFalse.mockReturnValue(false);
  const board = {
    setTerrainAtPosition: mockSetTerrainAtPositionTrue
  };
  const pos = [0,0]
  const wall = new Wall(board, pos);

  describe('Constructor', () => {
    it('inherits from Terrain', () => {
      expect(Wall.prototype instanceof Terrain).toBe(true);
    });

    it('calls the Terrain constructor', () => {
      expect(Terrain).toHaveBeenCalledWith(board, pos);
    });
  });

  describe('Wall.prototype.terrainName', () => {
    it('returns "Wall"', () => {
      expect(wall.terrainName()).toBe('Wall');
    });
  });

  describe('Wall.prototype.defenseBonus', () => {
    it('returns "---"', () => {
      expect(wall.defenseBonus()).toBe('---');
    });
  });

  describe('Wall.prototype.avoidBonus', () => {
    it('returns "---"', () => {
      expect(wall.avoidBonus()).toBe("---");
    });
  });

  describe('Wall.prototype.healBonus', () => {
    it('returns 0', () => {
      expect(wall.healBonus()).toBe(0);
    });
  });

  describe('Wall.prototype.moveCost', () => {
    it('returns Infinity', () => {
      expect(wall.moveCost()).toBe(Infinity);
    });
  });
});
