function findMaxCountOfNonIntersectingSegments(numbers: number[]): number {
  const sumToIndicesMap = new Map<number, number[]>();

  for (let i = 0; i < numbers.length - 1; i++) {
    const sum = numbers[i] + numbers[i + 1];
    if (!sumToIndicesMap.has(sum)) {
      sumToIndicesMap.set(sum, []);
    }
  }

  // Need to fill the map with indices of the same sum
  for (let i = 0; i < numbers.length - 1; i++) {
    const sum = numbers[i] + numbers[i + 1];
    sumToIndicesMap.get(sum)!.push(i);
  }

  let maxEqualSumsCount = 0;
  sumToIndicesMap.forEach((indices) => {
    let nonIntersectingSegmentsCount = 0;

    let currentSegmentPointer = 0;
    while (currentSegmentPointer < indices.length) {
      const segmentIndex = indices[currentSegmentPointer];
      const nextSegmentIndex = indices[currentSegmentPointer + 1];
      if (nextSegmentIndex === segmentIndex + 1) {
        // skip intersecting next segment
        currentSegmentPointer += 2;
      } else {
        currentSegmentPointer++;
      }
      nonIntersectingSegmentsCount++;
    }
    maxEqualSumsCount = Math.max(maxEqualSumsCount, nonIntersectingSegmentsCount);
  });

  return maxEqualSumsCount;
}

export { findMaxCountOfNonIntersectingSegments };
