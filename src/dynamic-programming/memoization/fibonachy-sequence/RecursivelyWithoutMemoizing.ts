// Complexity O(2^n)
export const calcFibonachyItemRecursivelyAt = (index: number): number => {
  if (index <= 1) return 1;

  return calcFibonachyItemRecursivelyAt(index - 1) + calcFibonachyItemRecursivelyAt(index - 2);
};
