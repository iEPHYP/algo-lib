import { compress } from './string-compression';

describe(compress, () => {
  it('works properly', () => {
    expect(compress([])).toBe(0);
    expect(compress(['a'])).toBe(1);
    expect(compress(['a', 'b', 'c', 'd'])).toBe(4);
    expect(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c'])).toBe(6);
    expect(compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'])).toBe(4);
  });
});
