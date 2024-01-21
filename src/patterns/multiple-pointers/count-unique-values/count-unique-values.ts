// O(N)TS
export const countUniqueValues = (sortedArray: number[]): number => {
  const uniqueValues = new Set(sortedArray);

  return uniqueValues.size;
};

// O(N/2)T, O(1)S
export const countUniqueValuesWithTwoPointers: typeof countUniqueValues = (sortedArray) => {
  let uniqueValuesCount = 0;

  let leftPointer = 0;
  let rightPointer = sortedArray.length - 1;
  while (leftPointer < rightPointer) {
    const leftPointerValue = sortedArray[leftPointer];
    const rightPointerValue = sortedArray[rightPointer];
    const previousLeftPointerValue = sortedArray[leftPointer - 1];
    const previousRightPointerValue = sortedArray[rightPointer + 1];

    if (leftPointerValue === rightPointerValue) {
      break;
    }

    if (leftPointerValue !== previousLeftPointerValue) {
      uniqueValuesCount++;
    }
    if (rightPointerValue !== previousRightPointerValue) {
      uniqueValuesCount++;
    }

    leftPointer++;
    rightPointer--;
  }

  return uniqueValuesCount;
};
