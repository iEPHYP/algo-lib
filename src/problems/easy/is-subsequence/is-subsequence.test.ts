import { isSubsequence } from './is-subsequence';

describe(isSubsequence, () => {
  it('works properly for primitive cases', () => {
    expect(isSubsequence('abc', 'ahbgdc')).toBeTruthy();
    expect(isSubsequence('axc', 'ahbgdc')).toBeFalsy();
  });
});
