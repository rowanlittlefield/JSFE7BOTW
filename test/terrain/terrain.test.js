import Terrain from '@/terrain/terrain';

describe('Terrain', () => {
  let defaultBoard;
  let mockSetTerrainAtPosition;
  let pos;
  let terrain;

  beforeEach(() => {
    mockSetTerrainAtPosition = jest.fn();
    mockSetTerrainAtPosition.mockReturnValue(true);
    defaultBoard = { setTerrainAtPosition: mockSetTerrainAtPosition };
    pos = [0, 0];
    terrain = new Terrain(defaultBoard, pos);
  });

  describe('Constructor', () => {
    it('sets the board attribute', () => {
      expect(terrain.board).toBe(defaultBoard);
    });

    it('calls board.prototype.setTerrainAtPosition on board and passes in terrain and pos', () => {
      expect(defaultBoard.setTerrainAtPosition.mock.calls[0][0]).toBe(terrain);
      expect(defaultBoard.setTerrainAtPosition.mock.calls[0][1]).toBe(pos);
    })

    it('sets the attribute position when board.prototype.setTerrainAtPosition returns true', () => {
      expect(terrain.position).toEqual(pos)
    });

    it('throws an exception when board.prototype.setTerrainAtPosition returns false', () => {
      const mockSetTerrainAtPositionFalse = jest.fn();
      mockSetTerrainAtPositionFalse.mockReturnValue(false);
      const board = { setTerrainAtPosition: mockSetTerrainAtPositionFalse };

      expect(() => { new Terrain(board, [0, 0]) }).toThrow('Space already occupied');
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
