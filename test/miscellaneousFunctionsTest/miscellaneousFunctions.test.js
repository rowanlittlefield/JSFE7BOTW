import * as Util from '../../miscellaneousFunctions/MiscellaneousFunctions';

describe('distance', () => {

  test('calculates distance', () => {
    expect(Util.distance([0, 0], [0, 0])).toBe(0);
    expect(Util.distance([0, 0], [1, 0])).toBe(1);
    expect(Util.distance([0, 0], [1, 1])).toBe(2);
    expect(Util.distance([2, 4], [5, 5])).toBe(4);
  });
});
