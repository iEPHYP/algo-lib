type GetMaxLength = (
  shortArrayCombinationStartIndex: number,
  longArrayCombinationStartIndex: number,
  memoizedGetMaxLength: GetMaxLength
) => number;

export const findLength = (array1: number[], array2: number[]): number => {
  const [shortArray, longArray] = [array1, array2].sort((a, b) => a.length - b.length);

  const getMaxLength: GetMaxLength = (
    shortArrayCombinationStartIndex,
    longArrayCombinationStartIndex,
    memoizedGetMaxLength
  ) => {
    return 0;
  };

  const memoizedGetMaxLength = useMemoizedFunction(getMaxLength);
  memoizedGetMaxLength(0, 0, memoizedGetMaxLength);

  return 0;
};

// TODO: Move separately and add test coverage
const useMemoizedFunction = <TArgs extends unknown[] = unknown[], TOutput = number>(
  memoizingFunction: (...args: TArgs) => TOutput
) => {
  const cacheMap = new Map<string, TOutput>();

  const generateKey = (...args: TArgs) => args.join(',');

  return (...args: TArgs): TOutput => {
    const argsKey = generateKey(...args);
    const cachedOutput = cacheMap.get(argsKey);

    if (cachedOutput !== undefined) {
      return cachedOutput;
    } else {
      const output = memoizingFunction(...args);
      cacheMap.set(argsKey, output);

      return output;
    }
  };
};
