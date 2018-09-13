import Terrain from '../../../board/terrain/terrain';
import Forest from '../../../board/terrain/forest';
jest.mock('../../../board/terrain/terrain');

describe('Forest', () => {
  const mockSetTerrainAtPositionTrue = jest.fn();
  mockSetTerrainAtPositionTrue.mockReturnValue(true);
  const mockSetTerrainAtPositionFalse = jest.fn();
  mockSetTerrainAtPositionFalse.mockReturnValue(false);
  const board = {
    setTerrainAtPosition: mockSetTerrainAtPositionTrue
  };
  const pos = [0,0]
  const forest = new Forest(board, pos);

  describe('Constructor', () => {
    it('inherits from Terrain', () => {
      expect(Forest.prototype instanceof Terrain).toBe(true);
    });

    it('calls the Terrain constructor', () => {
      expect(Terrain).toHaveBeenCalledWith(board, pos);
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
