// S(i) = S(i-1) - a(i-1) + a(i + k - 1)
// S(0) = SUM(0, k);
// Complexity O(n)T, O(1)S
export const maxSubarraySum = (
  array: number[],
  seriesLength: number
): { sum: number | null; subarray: number[] } => {
  if (array.length < seriesLength || seriesLength <= 0) {
    return { sum: null, subarray: [] };
  }

  const firstSeries = array.slice(0, seriesLength);
  const firstSeriesSum = firstSeries.reduce((previousSum, item) => previousSum + item, 0);

  let maxSum: { sum: number; subarray: number[] } = { sum: firstSeriesSum, subarray: firstSeries };

  let previousSeriesSum = firstSeriesSum;
  for (let i = 1; i <= array.length - seriesLength; i++) {
    const nextSeries = array.slice(i, i + seriesLength);
    const nextSeriesSum = previousSeriesSum - array[i - 1] + array[i + seriesLength - 1];
    if (maxSum.sum < nextSeriesSum) {
      maxSum = { sum: nextSeriesSum, subarray: nextSeries };
    }
    previousSeriesSum = nextSeriesSum;
  }

  return maxSum;
};
