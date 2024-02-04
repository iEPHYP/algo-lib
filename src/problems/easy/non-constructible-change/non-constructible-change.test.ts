import { minimumNonConstructibleChange } from './non-constructible-change';

describe(minimumNonConstructibleChange, () => {
  it('works properly on primitive cases', () => {
    expect(minimumNonConstructibleChange([])).toBe(1);
    expect(minimumNonConstructibleChange([1])).toBe(2);
    expect(minimumNonConstructibleChange([7])).toBe(1);
    expect(minimumNonConstructibleChange([1, 2, 5])).toBe(4);
    expect(minimumNonConstructibleChange([5, 7, 1, 1, 2, 3, 22])).toBe(20);
  });
});
