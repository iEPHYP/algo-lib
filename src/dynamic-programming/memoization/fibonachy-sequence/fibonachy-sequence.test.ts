import { calcFibonachyItemMemoizingBottomToTopAt } from './MemoizingBottomToTop';
import { calcFibonachyItemMemoizingRecursivelyTopToBottomAt } from './MemoizingRecursivelyTopToBottom';
import { calcFibonachyItemRecursivelyAt } from './RecursivelyWithoutMemoizing';

describe(calcFibonachyItemMemoizingRecursivelyTopToBottomAt.name, () => {
  it('works properly', () => {
    expect(calcFibonachyItemMemoizingRecursivelyTopToBottomAt(2)).toBe(2);
    expect(calcFibonachyItemMemoizingRecursivelyTopToBottomAt(3)).toBe(3);
    expect(calcFibonachyItemMemoizingRecursivelyTopToBottomAt(4)).toBe(5);
    expect(calcFibonachyItemMemoizingRecursivelyTopToBottomAt(5)).toBe(8);
    expect(calcFibonachyItemMemoizingRecursivelyTopToBottomAt(6)).toBe(13);
    expect(calcFibonachyItemMemoizingRecursivelyTopToBottomAt(30)).toMatchSnapshot();
    try {
      expect(calcFibonachyItemMemoizingRecursivelyTopToBottomAt(100000000)).toMatchSnapshot();
    } catch (e) {
      expect(e).toMatchSnapshot('Call stack exceeded error');
    }
  });
});

describe(calcFibonachyItemMemoizingBottomToTopAt.name, () => {
  it('works properly', () => {
    expect(calcFibonachyItemMemoizingBottomToTopAt(2)).toBe(2);
    expect(calcFibonachyItemMemoizingBottomToTopAt(3)).toBe(3);
    expect(calcFibonachyItemMemoizingBottomToTopAt(4)).toBe(5);
    expect(calcFibonachyItemMemoizingBottomToTopAt(5)).toBe(8);
    expect(calcFibonachyItemMemoizingBottomToTopAt(6)).toBe(13);
    expect(calcFibonachyItemMemoizingBottomToTopAt(30)).toMatchSnapshot();
    // expect(calcFibonachyItemBottomToTopAt(100000000)).toMatchSnapshot();
  });
});

describe(calcFibonachyItemRecursivelyAt.name, () => {
  it('works properly', () => {
    expect(calcFibonachyItemRecursivelyAt(2)).toBe(2);
    expect(calcFibonachyItemRecursivelyAt(3)).toBe(3);
    expect(calcFibonachyItemRecursivelyAt(4)).toBe(5);
    expect(calcFibonachyItemRecursivelyAt(5)).toBe(8);
    expect(calcFibonachyItemRecursivelyAt(6)).toBe(13);
    expect(calcFibonachyItemRecursivelyAt(30)).toMatchSnapshot();
  });
});
