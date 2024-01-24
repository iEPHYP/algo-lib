import { finalPrices } from './discounted-prices';

describe(finalPrices.name, () => {
  it('works properly', () => {
    expect(finalPrices([8, 4, 6, 2, 3])).toStrictEqual([4, 2, 4, 2, 3]);
    expect(finalPrices([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
    expect(finalPrices([10, 1, 1, 6])).toStrictEqual([9, 0, 1, 6]);
    expect(finalPrices([8, 7, 4, 2, 8, 1, 7, 7, 10, 1])).toStrictEqual([
      1, 3, 2, 1, 7, 0, 0, 6, 9, 1,
    ]);
    expect(finalPrices([4, 4, 8, 5, 1, 7, 9, 2])).toStrictEqual([0, 3, 3, 4, 1, 5, 7, 2]);
  });
});
