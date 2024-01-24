import { buyChoco } from './two-chocolates';

describe(buyChoco.name, () => {
  it('works properly for primitive cases', () => {
    expect(buyChoco([1, 2, 2], 3)).toBe(0);
    expect(buyChoco([3, 2, 3], 3)).toBe(3);
  });
});
