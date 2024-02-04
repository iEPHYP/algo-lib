// Complexity O(N)T, O(1)
function nonAdjacentItemsMaxSum(numbers: number[]): number {
  let nearestAdjacentMaxSum = 0;
  let nearestNonAdjacentMaxSum = 0;

  for (let i = 0; i < numbers.length; i++) {
    [nearestAdjacentMaxSum, nearestNonAdjacentMaxSum] = [
      Math.max(nearestAdjacentMaxSum, nearestNonAdjacentMaxSum + numbers[i]),
      nearestAdjacentMaxSum,
    ];
  }

  return Math.max(nearestAdjacentMaxSum, nearestNonAdjacentMaxSum);
}

export { nonAdjacentItemsMaxSum };
