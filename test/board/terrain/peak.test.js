import Terrain from '../../../board/terrain/terrain';
import Peak from '../../../board/terrain/peak';
jest.mock('../../../board/terrain/terrain');

describe('Peak', () => {
  const mockSetTerrainAtPositionTrue = jest.fn();
  mockSetTerrainAtPositionTrue.mockReturnValue(true);
  const mockSetTerrainAtPositionFalse = jest.fn();
  mockSetTerrainAtPositionFalse.mockReturnValue(false);
  const board = {
    setTerrainAtPosition: mockSetTerrainAtPositionTrue
  };
  const pos = [0,0]
  const peak = new Peak(board, pos);

  describe('Constructor', () => {
    it('inherits from Terrain', () => {
      expect(Peak.prototype instanceof Terrain).toBe(true);
    });

    it('calls the Terrain constructor', () => {
      expect(Terrain).toHaveBeenCalledWith(board, pos);
    });
  });

  describe('Peak.prototype.terrainName', () => {
    it('returns "Peak"', () => {
      expect(peak.terrainName()).toBe('Peak');
    });
  });

  describe('Peak.prototype.defenseBonus', () => {
    it('returns 1', () => {
      expect(peak.defenseBonus()).toBe(2);
    });
  });

  describe('Peak.prototype.avoidBonus', () => {
    it('returns 40', () => {
      expect(peak.avoidBonus()).toBe(40);
    });
  });

  describe('Peak.prototype.healBonus', () => {
    it('returns 0', () => {
      expect(peak.healBonus()).toBe(0);
    });
  });

  describe('Peak.prototype.moveCost', () => {
    it('returns 4 when called with an instance of Brigand', () => {
      expect(peak.moveCost('Brigand')).toBe(4);
    });

    it('returns Infinity when called with non-Brigand unit', () => {
      expect(peak.moveCost('Unit')).toBe(Infinity);
    });
  });
});
