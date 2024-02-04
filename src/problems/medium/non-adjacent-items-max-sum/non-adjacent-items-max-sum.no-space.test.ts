import { nonAdjacentItemsMaxSum } from './non-adjacent-items-max-sum.no-space';

describe(nonAdjacentItemsMaxSum, () => {
  it('works properly', () => {
    expect(nonAdjacentItemsMaxSum([])).toBe(0);
    expect(nonAdjacentItemsMaxSum([2])).toBe(2);
    expect(nonAdjacentItemsMaxSum([2, 5])).toBe(5);
    expect(nonAdjacentItemsMaxSum([8, 5])).toBe(8);
    expect(nonAdjacentItemsMaxSum([2, 10, 3])).toBe(10);
    expect(nonAdjacentItemsMaxSum([7, 10, 12, 7, 9, 14])).toBe(33);
  });
});
