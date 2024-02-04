export const findLength = (array1: number[], array2: number[]): number => {
  const [shortArray, longArray] = [array1, array2].sort((a, b) => a.length - b.length);
  // const longArrayString = longArray.join(',');

  for (let length = shortArray.length; length > 0; length--) {
    const slidingSeriesMetas = generateSeriesMetas(shortArray, length);

    const foundSeries = slidingSeriesMetas.find(({ startPointer, endPointer }) => {
      // O(N)
      const slidingSeries = shortArray.slice(startPointer, endPointer);

      return findSubarrayBySum(longArray, slidingSeries);
      // TODO: "".includes works much faster than findSubarray, make it work the same speed
      // return longArrayString.includes(slidingSeries.join(','));
    });

    if (foundSeries) {
      return length;
    }
  }

  return 0;
};

type SeriesMeta = { startPointer: number; endPointer: number };

const generateSeriesMetas = (array: number[], slidingWidth: number): SeriesMeta[] => {
  const slidingSeriesMetas: SeriesMeta[] = [];
  let previousSeriesMeta: SeriesMeta = { startPointer: 0, endPointer: slidingWidth };
  slidingSeriesMetas.push(previousSeriesMeta);

  for (let i = 1; i <= array.length - slidingWidth; i++) {
    const nextSeriesMeta: SeriesMeta = {
      startPointer: previousSeriesMeta.startPointer + 1,
      endPointer: previousSeriesMeta.endPointer + 1,
    };
    slidingSeriesMetas.push(nextSeriesMeta);
    previousSeriesMeta = nextSeriesMeta;
  }

  return slidingSeriesMetas;
};

type SumSeriesMeta = { sum: number; startPointer: number; endPointer: number; baseArray: number[] };

const findSubarrayBySum = (array: number[], subarray: number[]): number[] | undefined => {
  const slidingWidth = subarray.length;
  const subarraySum = subarray.reduce((previousSum, item) => previousSum + item, 0);
  const firstSeries: SumSeriesMeta = {
    baseArray: array,
    startPointer: 0,
    endPointer: slidingWidth,
    sum: array.slice(0, slidingWidth).reduce((previousSum, item) => previousSum + item, 0),
  };
  let previousSeries: SumSeriesMeta = firstSeries;
  if (getEqualArrayBySumFirst(previousSeries, { array: subarray, sum: subarraySum })) {
    return getSlice(previousSeries);
  }

  for (let i = 1; i <= array.length - slidingWidth; i++) {
    const nextSeriesSum = previousSeries.sum - array[i - 1] + array[i + slidingWidth - 1];
    const nextSeriesStartPoint = previousSeries.startPointer + 1;
    const nextSeriesEndPoint = previousSeries.endPointer + 1;

    if (nextSeriesSum === subarraySum) {
      const equalNextSeriesArray = getEqualArrayBySumFirst(
        {
          baseArray: array,
          startPointer: nextSeriesStartPoint,
          endPointer: nextSeriesEndPoint,
          sum: nextSeriesSum,
        },
        { array: subarray, sum: subarraySum }
      );
      if (equalNextSeriesArray) {
        return equalNextSeriesArray;
      }
    }

    previousSeries = {
      baseArray: array,
      sum: nextSeriesSum,
      startPointer: nextSeriesStartPoint,
      endPointer: nextSeriesEndPoint,
    };
  }
};

const getEqualArrayBySumFirst = (
  generatedSumSeries: SumSeriesMeta,
  subarray: { array: number[]; sum: number }
): number[] | undefined => {
  if (generatedSumSeries.sum === subarray.sum) {
    const generatedSeriesSlice = getSlice(generatedSumSeries);

    const isEqual = isArraysEqual(generatedSeriesSlice, subarray.array);

    return isEqual ? generatedSeriesSlice : undefined;
  }

  return undefined;
};

const getSlice = ({
  baseArray,
  startPointer,
  endPointer,
}: Omit<SumSeriesMeta, 'sum'> & Partial<Pick<SumSeriesMeta, 'sum'>>) =>
  baseArray.slice(startPointer, endPointer);

// TODO: compare frequencies
const isArraysEqual = (array1: number[], array2: number[]): boolean => {
  if (array1.length !== array2.length) {
    return false;
  }

  // const array1ItemFrequencyMap = new Map<number, number>();
  // const array2ItemFrequencyMap = new Map<number, number>();

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};
