import Terrain from '../../../board/terrain/terrain';
import Mountain from '../../../board/terrain/mountain';
jest.mock('../../../board/terrain/terrain');

describe('Mountain', () => {
  const mockSetTerrainAtPositionTrue = jest.fn();
  mockSetTerrainAtPositionTrue.mockReturnValue(true);
  const mockSetTerrainAtPositionFalse = jest.fn();
  mockSetTerrainAtPositionFalse.mockReturnValue(false);
  const board = {
    setTerrainAtPosition: mockSetTerrainAtPositionTrue
  };
  const pos = [0,0]
  const mountain = new Mountain(board, pos);

  describe('Constructor', () => {
    it('inherits from Terrain', () => {
      expect(Mountain.prototype instanceof Terrain).toBe(true);
    });

    it('calls the Terrain constructor', () => {
      expect(Terrain).toHaveBeenCalledWith(board, pos);
    });
  });

  describe('Mountain.prototype.terrainName', () => {
    it('returns "Mountain"', () => {
      expect(mountain.terrainName()).toBe('Mountain');
    });
  });

  describe('Mountain.prototype.defenseBonus', () => {
    it('returns 1', () => {
      expect(mountain.defenseBonus()).toBe(1);
    });
  });

  describe('Mountain.prototype.avoidBonus', () => {
    it('returns 30', () => {
      expect(mountain.avoidBonus()).toBe(30);
    });
  });

  describe('Mountain.prototype.healBonus', () => {
    it('returns 0', () => {
      expect(mountain.healBonus()).toBe(0);
    });
  });

  describe('Mountain.prototype.moveCost', () => {
    it('returns 3 when called with an instance of Brigand', () => {
      expect(mountain.moveCost('Brigand')).toBe(3);
    });

    it('returns 4 when called with non-Brigand unit', () => {
      expect(mountain.moveCost('Unit')).toBe(4);
    });
  });
});
