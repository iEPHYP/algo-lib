import { timeRequiredToBuy } from './buy-tickets.queue';

describe(timeRequiredToBuy.name, () => {
  it('works properly for primitive cases', () => {
    expect(timeRequiredToBuy([2, 3, 2], 2)).toBe(6);
    expect(timeRequiredToBuy([5, 1, 1, 1], 0)).toBe(8);
    expect(timeRequiredToBuy([9, 2, 1, 3], 1)).toBe(6);
  });
});
