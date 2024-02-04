import { maxProfit } from './max-profit-trade-with-cooldown';

describe.skip(maxProfit.name, () => {
  it('works properly for primite cases', () => {
    expect(maxProfit([1, 2, 3, 0, 2])).toBe(3);
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(maxProfit([7, 1, 5, 3, 6, 4, 6])).toBe(6);
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(2);
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    expect(maxProfit([2, 1, 2, 0, 1])).toBe(1);
    expect(maxProfit([1])).toBe(0);
  });
});
