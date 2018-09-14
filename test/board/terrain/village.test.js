import Terrain from '../../../board/terrain/terrain';
import Village from '../../../board/terrain/village';
jest.mock('../../../board/terrain/terrain');

describe('Village', () => {
  const mockSetTerrainAtPositionTrue = jest.fn();
  mockSetTerrainAtPositionTrue.mockReturnValue(true);
  const mockSetTerrainAtPositionFalse = jest.fn();
  mockSetTerrainAtPositionFalse.mockReturnValue(false);
  const board = {
    setTerrainAtPosition: mockSetTerrainAtPositionTrue
  };
  const pos = [0,0]
  const village = new Village(board, pos);

  describe('Constructor', () => {
    it('inherits from Terrain', () => {
      expect(Village.prototype instanceof Terrain).toBe(true);
    });

    it('calls the Terrain constructor', () => {
      expect(Terrain).toHaveBeenCalledWith(board, pos);
    });
  });

  describe('Village.prototype.terrainName', () => {
    it('returns "Village"', () => {
      expect(village.terrainName()).toBe('Village');
    });
  });

  describe('Village.prototype.defenseBonus', () => {
    it('returns 0', () => {
      expect(village.defenseBonus()).toBe(0);
    });
  });

  describe('Village.prototype.avoidBonus', () => {
    it('returns 10', () => {
      expect(village.avoidBonus()).toBe(10);
    });
  });

  describe('Village.prototype.healBonus', () => {
    it('returns 0', () => {
      expect(village.healBonus()).toBe(0);
    });
  });

  describe('Village.prototype.moveCost', () => {
    it('returns 1', () => {
      expect(village.moveCost()).toBe(1);
    });
  });
});
