import { buyChoco } from './two-chocolates.O(N)';

describe(buyChoco.name, () => {
  it('works properly for primitive cases', () => {
    expect(buyChoco([1, 2, 2], 3)).toBe(0);
    expect(buyChoco([3, 2, 3], 3)).toBe(3);
    expect(buyChoco([5, 2, 1, 1, 3], 5)).toBe(3);
    expect(buyChoco([98, 54, 6, 34, 66, 63, 52, 39], 62)).toBe(22);
  });
});
