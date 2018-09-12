import Forest from '../../../board/terrain/forest';

describe('Forest', () => {
  const mockSetTerrainAtPositionTrue = jest.fn();
  mockSetTerrainAtPositionTrue.mockReturnValue(true);
  const mockSetTerrainAtPositionFalse = jest.fn();
  mockSetTerrainAtPositionFalse.mockReturnValue(false);
  const board = {
    setTerrainAtPosition: mockSetTerrainAtPositionTrue
  };
  const forest = new Forest(board, [0,0]);

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
