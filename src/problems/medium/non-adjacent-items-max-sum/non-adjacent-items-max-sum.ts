// Complexity O(N)TS
function nonAdjacentItemsMaxSum(numbers: number[]): number {
  const maxSums: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 2] ?? 0, maxSums[i - 3] ?? 0) + numbers[i];
  }

  return maxSums.length ? Math.max(...maxSums.slice(-2)) : 0;
}

export { nonAdjacentItemsMaxSum };
