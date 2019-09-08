import Terrain from '@/terrain/terrain';

describe('Terrain', () => {
  let board;
  let mockSetTerrainAtPosition;
  let pos;
  let terrain;

  beforeEach(() => {
    mockSetTerrainAtPosition = jest.fn();
    mockSetTerrainAtPosition.mockReturnValue(true);
    board = { setTerrainAtPosition: mockSetTerrainAtPosition };
    pos = [0, 0];
    terrain = new Terrain(board, pos);
  });

  describe('Constructor', () => {
    it('sets the board attribute', () => {
      expect(terrain.board).toBe(board);
    });

    it('calls board.prototype.setTerrainAtPosition on board and passes in terrain and pos', () => {
      expect(board.setTerrainAtPosition.mock.calls[0][0]).toBe(terrain);
      expect(board.setTerrainAtPosition.mock.calls[0][1]).toBe(pos);
    })

    it('sets the attribute position when board.prototype.setTerrainAtPosition returns true', () => {
      expect(terrain.position).toEqual(pos)
    });

    it('throws an exception when board.prototype.setTerrainAtPosition returns false', () => {
      mockSetTerrainAtPosition.mockReturnValue(false);

      expect(() => { new Terrain(board, pos) }).toThrow('Space already occupied');
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
