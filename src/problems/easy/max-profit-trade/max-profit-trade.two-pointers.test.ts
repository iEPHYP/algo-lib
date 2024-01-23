import { maxProfit } from './max-profit-trade.two-pointers';

describe(maxProfit.name, () => {
  it('works properly for primite cases', () => {
    expect(maxProfit([1, 5, 3, 6, 7])).toBe(6);
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
});
