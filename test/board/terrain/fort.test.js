import Terrain from '../../../board/terrain/terrain';
import Fort from '../../../board/terrain/fort';
jest.mock('../../../board/terrain/terrain');

describe('Fort', () => {
  const mockSetTerrainAtPositionTrue = jest.fn();
  mockSetTerrainAtPositionTrue.mockReturnValue(true);
  const mockSetTerrainAtPositionFalse = jest.fn();
  mockSetTerrainAtPositionFalse.mockReturnValue(false);
  const board = {
    setTerrainAtPosition: mockSetTerrainAtPositionTrue
  };
  const pos = [0,0]
  const fort = new Fort(board, pos);

  describe('Constructor', () => {
    it('inherits from Terrain', () => {
      expect(Fort.prototype instanceof Terrain).toBe(true);
    });

    it('calls the Terrain constructor', () => {
      expect(Terrain).toHaveBeenCalledWith(board, pos);
    });
  });

  describe('Fort.prototype.terrainName', () => {
    it('returns "Fort"', () => {
      expect(fort.terrainName()).toBe('Fort');
    });
  });

  describe('Fort.prototype.defenseBonus', () => {
    it('returns 2', () => {
      expect(fort.defenseBonus()).toBe(2);
    });
  });

  describe('Fort.prototype.avoidBonus', () => {
    it('returns 20', () => {
      expect(fort.avoidBonus()).toBe(20);
    });
  });

  describe('Fort.prototype.healBonus', () => {
    it('returns 20', () => {
      expect(fort.healBonus()).toBe(20);
    });
  });

  describe('Fort.prototype.moveCost', () => {
    it('returns 2', () => {
      expect(fort.moveCost()).toBe(2);
    });
  });
});
