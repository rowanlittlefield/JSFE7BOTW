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

  })
})
