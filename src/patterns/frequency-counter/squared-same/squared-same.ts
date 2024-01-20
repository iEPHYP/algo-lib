// O(NlogN + NlogN + N) => O(NlogN)
export const squaredSame = (array: number[], squaredArray: number[]): boolean => {
  if (array.length !== squaredArray.length) {
    return false;
  }

  const sortedArray = [...array].sort((a, b) => a - b);
  const sortedSquaredArray = [...squaredArray].sort((a, b) => a - b);

  return sortedArray.every((item, index) => {
    const squaredItem = sortedSquaredArray[index];

    return squaredItem === item ** 2;
  });
};

// O(N)
export const fasterSquaredSame: typeof squaredSame = (array, squaredArray) => {
  if (array.length !== squaredArray.length) {
    return false;
  }

  const arrayFrequencyCounterMap = new Map<number, number>();
  array.forEach((item) => {
    const squaredItemValue = item ** 2;
    const itemFrequency = arrayFrequencyCounterMap.get(squaredItemValue) ?? 0;
    arrayFrequencyCounterMap.set(squaredItemValue, itemFrequency + 1);
  });

  const squaredArrayFrequencyCounterMap = new Map<number, number>();
  squaredArray.forEach((squaredItem) => {
    const itemFrequency = squaredArrayFrequencyCounterMap.get(squaredItem) ?? 0;
    squaredArrayFrequencyCounterMap.set(squaredItem, itemFrequency + 1);
  });

  let same = true;
  arrayFrequencyCounterMap.forEach((itemFrequency, squaredItemValue) => {
    const squaredItemFrequency = squaredArrayFrequencyCounterMap.get(squaredItemValue);

    if (squaredItemFrequency !== itemFrequency) {
      same = false;
    }
  });

  return same;
};
