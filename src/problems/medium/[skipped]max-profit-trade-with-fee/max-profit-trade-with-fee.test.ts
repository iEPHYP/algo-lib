import { maxProfit } from './max-profit-trade-with-fee';

describe.skip(maxProfit.name, () => {
  it('works properly for primite cases', () => {
    expect(maxProfit([1, 3, 2, 8, 4, 9], 2)).toBe(8);
    expect(maxProfit([1, 3, 7, 5, 10, 3], 3)).toBe(6);
    expect(maxProfit([7, 6, 4, 3, 1], 0)).toBe(0);
    expect(maxProfit([7, 6, 4, 3, 1], 1)).toBe(0);
    expect(maxProfit([2, 1, 2, 0, 1], 1)).toBe(0);
    expect(maxProfit([2, 1, 2, 0, 1], 0)).toBe(2);
    expect(maxProfit([1], 0)).toBe(0);
  });
});
