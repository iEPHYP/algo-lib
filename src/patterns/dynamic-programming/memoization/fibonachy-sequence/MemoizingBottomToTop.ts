// Complexity O(N), O(N)S
export const calcFibonachyItemMemoizingBottomToTopAt = (lastIndex: number) => {
  const cache: number[] = [1, 1];

  const getFibonachyItem = (index: number): number => {
    if (index < 2) {
      return 1;
    }

    return cache[index - 1] + cache[index - 2];
  };

  for (let i = 0; i <= lastIndex; i++) {
    cache[i] = getFibonachyItem(i);
  }

  return cache[lastIndex];
};
