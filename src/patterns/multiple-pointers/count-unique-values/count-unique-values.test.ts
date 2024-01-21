import { countUniqueValues, countUniqueValuesWithTwoPointers } from './count-unique-values';

describe(countUniqueValues.name, () => {
  it('should find amount of unique values properly', () => {
    expect(countUniqueValues([])).toBe(0);
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
  });
});

describe(countUniqueValuesWithTwoPointers.name, () => {
  it('should find amount of unique values properly', () => {
    expect(countUniqueValuesWithTwoPointers([])).toBe(0);
    expect(countUniqueValuesWithTwoPointers([1, 1, 1, 1, 1, 2])).toBe(2);
    expect(countUniqueValuesWithTwoPointers([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
    expect(countUniqueValuesWithTwoPointers([-2, -1, -1, 0, 1])).toBe(4);
  });
});
