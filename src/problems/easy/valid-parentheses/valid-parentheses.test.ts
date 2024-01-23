import { isValid } from './valid-parentheses';

describe(isValid.name, () => {
  it('works properly for primitive cases', () => {
    expect(isValid('()')).toBe(true);
    expect(isValid('()[]{}')).toBe(true);
    expect(isValid('(]')).toBe(false);
    expect(isValid('(])]')).toBe(false);
    expect(isValid('({])]}')).toBe(false);
  });
});
