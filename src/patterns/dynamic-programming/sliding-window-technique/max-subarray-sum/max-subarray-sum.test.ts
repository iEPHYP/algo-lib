import { maxSubarraySum } from './max-subarray-sum';

test(maxSubarraySum.name + ' works properly', () => {
  expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toMatchSnapshot(
    'maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)'
  );
  expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toMatchSnapshot(
    'maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)'
  );
  expect(maxSubarraySum([4, 2, 1, 6], 1)).toMatchSnapshot('maxSubarraySum([4, 2, 1, 6], 1)');
  expect(maxSubarraySum([4, 2, 1, 6, 2], 4)).toMatchSnapshot('maxSubarraySum([4, 2, 1, 6, 2], 4)');
  expect(maxSubarraySum([], 4)).toMatchSnapshot('maxSubarraySum([], 4)');
  expect(maxSubarraySum([1, 5, 7], 4)).toMatchSnapshot('maxSubarraySum([1, 5, 7], 4)');
  expect(maxSubarraySum([1, 5, 7], 0)).toMatchSnapshot('maxSubarraySum([1, 5, 7], 0)');
});
