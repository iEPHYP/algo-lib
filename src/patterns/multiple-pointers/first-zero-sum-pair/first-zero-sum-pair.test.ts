import { firstZeroSumPair, firstZeroSumPairWithTwoPointers } from './first-zero-sum-pair';

// const sortedLongMirroredArray = Array.from({ length: 16000000 }, (item, index) => -8000000 + index);
// const sortedLongShiftedArray = Array.from({ length: 16000000 }, (item, index) => -1 + index);
// const sortedLongestMirroredArray = Array.from(
//   { length: 100000000 },
//   (item, index) => -50000000 + index
// );
// const sortedLongestShiftedArray = Array.from(
//   { length: 100000000 },
//   (item, index) => -99999998 + index
// );

describe(firstZeroSumPair.name, () => {
  it('finds first pairs properly', () => {
    expect(firstZeroSumPair([-3, -2, -1, 0, 1, 2, 3])).toStrictEqual([-3, 3]);
    expect(firstZeroSumPair([-3, -2, -1, 0, 1, 2, 4])).toStrictEqual([-2, 2]);
    expect(firstZeroSumPair([-2, 0, 1, 3])).toBeUndefined();
    expect(firstZeroSumPair([-2, 0, 0, 1, 3])).toStrictEqual([0, 0]);
    expect(firstZeroSumPair([1, 2, 3])).toBeUndefined();
    // expect(firstZeroSumPair(sortedLongMirroredArray)).toStrictEqual([-7999999, 7999999]);
    // expect(firstZeroSumPair(sortedLongShiftedArray)).toStrictEqual([-1, 1]);
  });
});

describe(firstZeroSumPairWithTwoPointers.name, () => {
  it('finds first pairs properly', () => {
    expect(firstZeroSumPairWithTwoPointers([-3, -2, -1, 0, 1, 2, 3])).toStrictEqual([-3, 3]);
    expect(firstZeroSumPairWithTwoPointers([-3, -2, -1, 0, 1, 2, 4])).toStrictEqual([-2, 2]);
    expect(firstZeroSumPairWithTwoPointers([-2, 0, 1, 3])).toBeUndefined();
    expect(firstZeroSumPairWithTwoPointers([-2, 0, 0, 1, 3])).toStrictEqual([0, 0]);
    expect(firstZeroSumPairWithTwoPointers([1, 2, 3])).toBeUndefined();
    // expect(firstZeroSumPairWithTwoPointers(sortedLongMirroredArray)).toStrictEqual([
    //   -7999999, 7999999,
    // ]);
    // expect(firstZeroSumPairWithTwoPointers(sortedLongShiftedArray)).toStrictEqual([-1, 1]);
    // expect(firstZeroSumPairWithTwoPointers(sortedLongestMirroredArray)).toStrictEqual([
    //   -49999999, 49999999,
    // ]);
    // expect(firstZeroSumPairWithTwoPointers(sortedLongestShiftedArray)).toStrictEqual([-1, 1]);
  });
});
