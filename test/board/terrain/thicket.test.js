import Terrain from '../../../board/terrain/terrain';
import Thicket from '../../../board/terrain/thicket';
jest.mock('../../../board/terrain/terrain');

describe('Thicket', () => {
  const mockSetTerrainAtPositionTrue = jest.fn();
  mockSetTerrainAtPositionTrue.mockReturnValue(true);
  const mockSetTerrainAtPositionFalse = jest.fn();
  mockSetTerrainAtPositionFalse.mockReturnValue(false);
  const board = {
    setTerrainAtPosition: mockSetTerrainAtPositionTrue
  };
  const pos = [0,0]
  const thicket = new Thicket(board, pos);

  describe('Constructor', () => {
    it('inherits from Terrain', () => {
      expect(Thicket.prototype instanceof Terrain).toBe(true);
    });

    it('calls the Terrain constructor', () => {
      expect(Terrain).toHaveBeenCalledWith(board, pos);
    });
  });

  describe('Thicket.prototype.terrainName', () => {
    it('returns "Thicket"', () => {
      expect(thicket.terrainName()).toBe('Thicket');
    });
  });

  describe('Thicket.prototype.defenseBonus', () => {
    it('returns "---"', () => {
      expect(thicket.defenseBonus()).toBe("---");
    });
  });

  describe('Thicket.prototype.avoidBonus', () => {
    it('returns "---"', () => {
      expect(thicket.avoidBonus()).toBe("---");
    });
  });

  describe('Thicket.prototype.healBonus', () => {
    it('returns 10', () => {
      expect(thicket.healBonus()).toBe(0);
    });
  });

  describe('Thicket.prototype.moveCost', () => {
    it('returns Infinity', () => {
      expect(thicket.moveCost()).toBe(Infinity);
    });
  });
});
