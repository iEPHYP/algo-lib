import { isPalindrome } from './valid-palindrome';

describe(isPalindrome, () => {
  it('it works properly', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy();
    expect(isPalindrome('race a car')).toBeFalsy();
    expect(isPalindrome('')).toBeTruthy();
    expect(isPalindrome(' ')).toBeTruthy();
  });
});
