import { findMaxCountOfNonIntersectingSegments } from './max-equal-sum-segments';

describe(findMaxCountOfNonIntersectingSegments, () => {
  it('works properly', () => {
    expect(findMaxCountOfNonIntersectingSegments([10, 1, 3, 1, 2, 2, 1, 0, 4])).toBe(3);
    expect(findMaxCountOfNonIntersectingSegments([5, 3, 1, 3, 2, 3])).toBe(1);
    expect(findMaxCountOfNonIntersectingSegments([9, 9, 9, 9, 9])).toBe(2);
    expect(findMaxCountOfNonIntersectingSegments([1, 5, 2, 4, 3, 3])).toBe(3);
  });
});
