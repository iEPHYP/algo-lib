export const twoSum = (numbers: number[], duoSum: number): number[] => {
  const items = numbers.map((value, index) => ({ value, index })).sort((a, b) => a.value - b.value);

  let leftPointer = 0;
  let rightPointer = items.length - 1;

  while (leftPointer < rightPointer) {
    const leftValue = items[leftPointer].value;
    const rightValue = items[rightPointer].value;

    const sum = leftValue + rightValue;
    if (sum === duoSum) {
      return [items[leftPointer].index, items[rightPointer].index];
    } else if (sum < duoSum) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return [];
};
