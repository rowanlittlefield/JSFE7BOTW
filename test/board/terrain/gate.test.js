import Terrain from '../../../board/terrain/terrain';
import Gate from '../../../board/terrain/gate';
jest.mock('../../../board/terrain/terrain');

describe('Gate', () => {
  const mockSetTerrainAtPositionTrue = jest.fn();
  mockSetTerrainAtPositionTrue.mockReturnValue(true);
  const mockSetTerrainAtPositionFalse = jest.fn();
  mockSetTerrainAtPositionFalse.mockReturnValue(false);
  const board = {
    setTerrainAtPosition: mockSetTerrainAtPositionTrue
  };
  const pos = [0,0]
  const gate = new Gate(board, pos);

  describe('Constructor', () => {
    it('inherits from Terrain', () => {
      expect(Gate.prototype instanceof Terrain).toBe(true);
    });

    it('calls the Terrain constructor', () => {
      expect(Terrain).toHaveBeenCalledWith(board, pos);
    });
  });

  describe('Gate.prototype.terrainName', () => {
    it('returns "Gate"', () => {
      expect(gate.terrainName()).toBe('Gate');
    });
  });

  describe('Gate.prototype.defenseBonus', () => {
    it('returns 3', () => {
      expect(gate.defenseBonus()).toBe(3);
    });
  });

  describe('Gate.prototype.avoidBonus', () => {
    it('returns 20', () => {
      expect(gate.avoidBonus()).toBe(20);
    });
  });

  describe('Gate.prototype.healBonus', () => {
    it('returns 10', () => {
      expect(gate.healBonus()).toBe(10);
    });
  });

  describe('Gate.prototype.moveCost', () => {
    it('returns 1', () => {
      expect(gate.moveCost()).toBe(1);
    });
  });
});
