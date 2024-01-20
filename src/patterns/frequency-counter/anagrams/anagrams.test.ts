import { aBitFasterValidAnagram, validAnagram } from './anagrams';

// const longString = ''.padStart(300000000, 'a').padStart(300000000, 'b').padEnd(300000000, 'c');

describe(validAnagram.name, () => {
  it('works properly', () => {
    expect(validAnagram('', '')).toBe(true);
    expect(validAnagram('aaz', 'zza')).toBe(false);
    expect(validAnagram('anagram', 'nagaram')).toBe(true);
    expect(validAnagram('rat', 'car')).toBe(false);
    expect(validAnagram('texttwisttime', 'timetwisttext')).toBe(true);
    expect(validAnagram('awesome', 'awesom')).toBe(false);
    expect(validAnagram('qwerty', 'qeywrt')).toBe(true);
    // expect(validAnagram(longString, longString)).toBe(true);
  });
});

describe(aBitFasterValidAnagram.name, () => {
  it('works properly', () => {
    expect(aBitFasterValidAnagram('', '')).toBe(true);
    expect(aBitFasterValidAnagram('aaz', 'zza')).toBe(false);
    expect(aBitFasterValidAnagram('anagram', 'nagaram')).toBe(true);
    expect(aBitFasterValidAnagram('rat', 'car')).toBe(false);
    expect(aBitFasterValidAnagram('texttwisttime', 'timetwisttext')).toBe(true);
    expect(aBitFasterValidAnagram('awesome', 'awesom')).toBe(false);
    expect(aBitFasterValidAnagram('qwerty', 'qeywrt')).toBe(true);
    // expect(aBitFasterValidAnagram(longString, longString)).toBe(true);
  });
});
