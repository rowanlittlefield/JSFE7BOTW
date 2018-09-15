import Space from '../../board/space';
// const PlayerUnit = jest.mock('../../units/playerUnits/playerUnit', () => {
//   isPlayerUnit: true
// });

// const PlayerUnit = jest.fn().mockImplementation(() => {
//   return {isPlayerUnit: true};
// });
// function PlayerUnit() {}
import Inventory from '../../inventory/inventory';

import Roy from '../../units/playerUnits/roy/roy';
import { SwordOfSeals } from '../../items/weapon';

import Brigand from '../../units/enemyUnits/brigand/brigand';
import { IronAxe } from '../../items/weapon';

describe('Space', () => {
  const pos = [0,0]
  const space = new Space(pos);
  const boardDup = {};

  describe('Constructor', () => {
    it('sets the position attribute', () => {
      expect(space.position).toBe(pos);
    });

    it('initializes with the unit attribute set to null', () => {
      expect(space.unit).toBe(null)
    });

    it('initializes with the terrain attribute set to null', () => {
      expect(space.terrain).toBe(null)
    });
  });

  describe('Space.prototype.isTraversable', () => {
    it('returns true when the unit attribute is null', () => {
      expect(space.isTraversable(true)).toBe(true)
      expect(space.isTraversable(false)).toBe(true)
    });

    it('returns true when the unit attribute\'s isPlayerUnit and the isPlayerUnit parameter are the same', () => {
       const roy = new Roy(boardDup, new Inventory([new SwordOfSeals()]));
       const brigand = new Brigand(boardDup, new Inventory([new IronAxe]), 'seekAndDestroy');
       space.unit = roy;
       expect(space.isTraversable(true)).toBe(true);
       space.unit = brigand;
       expect(space.isTraversable(false)).toBe(true);
       space.unit = null;
    });

    it('returns false when the unit attribute\'s isPlayerUnit and the isPlayerUnit parameter are different', () => {
       const roy = new Roy(boardDup, new Inventory([new SwordOfSeals()]));
       const brigand = new Brigand(boardDup, new Inventory([new IronAxe]), 'seekAndDestroy');
       space.unit = roy;
       expect(space.isTraversable(false)).toBe(false);
       space.unit = brigand;
       expect(space.isTraversable(true)).toBe(false);
       space.unit = null;
    });
  });
});
