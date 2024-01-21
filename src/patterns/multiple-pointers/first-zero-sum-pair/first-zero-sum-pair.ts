// O(N)T < Complexity <= O(2N)T, O(N)S
export const firstZeroSumPair = (sortedArray: number[]): [number, number] | undefined => {
  if (sortedArray.length < 2 || (sortedArray.length >= 2 && sortedArray[0] > 0)) {
    return undefined;
  }

  const uniqueItems = new Set<number>();
  let zerosCount = 0;
  sortedArray.forEach((item) => {
    if (item === 0) {
      zerosCount++;
    }
    uniqueItems.add(item);
  });

  for (const item of sortedArray) {
    if (item > 0) {
      break;
    }
    if (item === 0 && zerosCount < 2) {
      continue;
    }

    const mirrorItem = item * -1;
    if (uniqueItems.has(mirrorItem)) {
      if (item === 0) {
        return [0, 0];
      }

      return [item, mirrorItem];
    }
  }

  return undefined;
};

// Complexity <= O(N)T, O(1)S
export const firstZeroSumPairWithTwoPointers: typeof firstZeroSumPair = (sortedArray) => {
  if (sortedArray.length < 2 || (sortedArray.length >= 2 && sortedArray[0] > 0)) {
    return undefined;
  }

  let leftPointer = 0;
  let rightPointer = sortedArray.length - 1;

  while (leftPointer < rightPointer) {
    const leftPointerValue = sortedArray[leftPointer];
    const rightPointerValue = sortedArray[rightPointer];

    const sum = leftPointerValue + rightPointerValue;
    if (sum === 0) {
      return [leftPointerValue, rightPointerValue];
    } else if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }

  return undefined;
};
