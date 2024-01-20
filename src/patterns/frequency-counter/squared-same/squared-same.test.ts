import { fasterSquaredSame, squaredSame } from './squared-same';

// const bigArray = Array.from({ length: 70000000 }, (_, index) => index + 1);
// const bigSquaredArray = bigArray.map((item) => item ** 2);

describe(squaredSame.name, () => {
  it('work properly', () => {
    expect(squaredSame([1, 2, 3], [4, 1, 9])).toBe(true);
    expect(squaredSame([1, 2, 3], [1, 9])).toBe(false);
    expect(squaredSame([1, 2, 1], [4, 4, 1])).toBe(false);
    expect(squaredSame([1, 2, 1], [4, 1, 1])).toBe(true);
    // expect(squaredSame(bigArray, bigSquaredArray)).toBe(true);
  });
});

describe(fasterSquaredSame.name, () => {
  it('work properly', () => {
    expect(fasterSquaredSame([1, 2, 3], [4, 1, 9])).toBe(true);
    expect(fasterSquaredSame([1, 2, 3], [1, 9])).toBe(false);
    expect(fasterSquaredSame([1, 2, 1], [4, 4, 1])).toBe(false);
    expect(fasterSquaredSame([1, 2, 1], [4, 1, 1])).toBe(true);
    // expect(squaredSame(bigArray, bigSquaredArray)).toBe(true);
  });
});
