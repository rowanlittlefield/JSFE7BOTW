import * as Util from '../../miscellaneousFunctions/MiscellaneousFunctions';

describe('distance', () => {
  it('calculates distance', () => {
    expect(Util.distance([0, 0], [0, 0])).toBe(0);
    expect(Util.distance([0, 0], [1, 0])).toBe(1);
    expect(Util.distance([0, 0], [1, 1])).toBe(2);
    expect(Util.distance([2, 4], [5, 5])).toBe(4);
  });
});

describe('stringToPos', () => {
  it('converts a coordinate string to a position array', () => {
    expect(Util.stringToPos("0,0")[0]).toBe(0)
    expect(Util.stringToPos("0,0")[1]).toBe(0)
    expect(Util.stringToPos("10,10")[0]).toBe(10)
    expect(Util.stringToPos("10,10")[1]).toBe(10)
    expect(Util.stringToPos("10, 10")[0]).toBe(10)
    expect(Util.stringToPos("10, 10")[1]).toBe(10)

  });
});

describe('equivalentPositions', () => {
  it('returns true for equivalent positions', () => {
    expect(Util.equivalentPositions([1, 4], [1, 4])).toBe(true)
  });
  it('returns false for inequivalent positions', () => {
    expect(Util.equivalentPositions([1, 4], [4, 1])).toBe(false)
    expect(Util.equivalentPositions([1, 4], [1, 1])).toBe(false)
    expect(Util.equivalentPositions([1, 4], [1, 3])).toBe(false)
  });
});
