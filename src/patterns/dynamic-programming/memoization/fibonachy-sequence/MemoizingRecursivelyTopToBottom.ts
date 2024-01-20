// Complexity O(N)T, O(2N)S
export const calcFibonachyItemMemoizingRecursivelyTopToBottomAt = (lastIndex: number) => {
  const cache: number[] = [1, 1];

  const getFibonachyItem = (index: number): number => {
    if (index < 2) {
      return 1;
    }
    if (cache[index]) {
      return cache[index];
    }

    // Not good, cuz can exceed call stack size, because too many function calls until the bottom
    cache[index] = getFibonachyItem(index - 1) + getFibonachyItem(index - 2);

    return cache[index];
  };

  return getFibonachyItem(lastIndex);
};
