import { sortedSquares } from './sorted-squares';

describe(sortedSquares, () => {
  it('works properly for primitive cases', () => {
    expect(sortedSquares([-4, -1, 0, 3, 10])).toStrictEqual([0, 1, 9, 16, 100]);
    expect(sortedSquares([-7, -3, 2, 3, 11])).toStrictEqual([4, 9, 9, 49, 121]);
    expect(sortedSquares([-7])).toStrictEqual([49]);
    expect(sortedSquares([-7, -3, -2])).toStrictEqual([4, 9, 49]);
    expect(sortedSquares([-2, 0])).toStrictEqual([0, 4]);
    expect(sortedSquares([-10000, -9999, -7, -5, 0, 0, 10000])).toStrictEqual([
      0, 0, 25, 49, 99980001, 100000000, 100000000,
    ]);
  });
});
