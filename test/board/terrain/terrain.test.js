import Terrain from '../../../board/terrain/terrain';

describe('Terrain', () => {
  const mockSetTerrainAtPositionTrue = jest.fn();
  mockSetTerrainAtPositionTrue.mockReturnValue(true);
  const mockSetTerrainAtPositionFalse = jest.fn();
  mockSetTerrainAtPositionFalse.mockReturnValue(false);
  const board = {
    setTerrainAtPosition: mockSetTerrainAtPositionTrue
  };
  const boardTwo = {
    setTerrainAtPosition: mockSetTerrainAtPositionFalse
  };
  const terrain = new Terrain(board, [0,0]);
  
  describe('Constructor', () => {
    it('sets the board attribute', () => {
      expect(terrain.board).toBe(board);
    });

    it('sets the position when board.prototype.setTerrainAtPosition returns true', () => {
      expect(board.setTerrainAtPosition.mock.calls[0][0]).toBe(terrain);
      expect(board.setTerrainAtPosition.mock.calls[0][1][0]).toBe(0);
      expect(board.setTerrainAtPosition.mock.calls[0][1][1]).toBe(0);

      expect(terrain.position.length).toBe(2);
      expect(terrain.position[0]).toBe(0);
      expect(terrain.position[1]).toBe(0);
    });

    it('throws an exception when board.prototype.setTerrainAtPosition returns false', () => {
      expect(() => {new Terrain(boardTwo, [0,0])}).toThrow('Space already occupied');
    });
  });

  describe('Terrain.prototype.terrainName', () => {
    it('returns the default value of "Terrain"', () => {
      expect(terrain.terrainName()).toBe('Terrain');
    });
  });

  describe('Terrain.prototype.defenseBonus', () => {
    it('returns the default value of 0', () => {
      expect(terrain.defenseBonus()).toBe(0);
    });
  });

  describe('Terrain.prototype.avoidBonus', () => {
    it('returns the default terrain avoidBonus of 0', () => {
      expect(terrain.avoidBonus()).toBe(0);
    });
  });

  describe('Terrain.prototype.healBonus', () => {
    it('returns the default value of 0', () => {
      expect(terrain.healBonus()).toBe(0);
    });
  });

  describe('Terrain.prototype.moveCost', () => {
    it('returns the default terrain moveCost of 1', () => {
      expect(terrain.moveCost()).toBe(1);
    });
  });

});
