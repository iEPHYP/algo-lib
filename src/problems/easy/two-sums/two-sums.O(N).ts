export const twoSum = (numbers: number[], duoSum: number): number[] => {
  const sumDifferenceMap = new Map<number, number>();

  for (let i = 0; i < numbers.length; i++) {
    const value = numbers[i];
    const sumDifference = duoSum - value;

    const sumDifferencingItemIndex = sumDifferenceMap.get(value);
    if (sumDifferencingItemIndex !== undefined) {
      return [sumDifferencingItemIndex, i];
    }

    sumDifferenceMap.set(sumDifference, i);
  }

  return [];
};
