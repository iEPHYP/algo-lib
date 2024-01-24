export function finalPrices(prices: number[]): number[] {
  const discountedPrices: number[] = [];

  let originalPricePointer = 0;
  let discountAmountPointer = 1;

  while (originalPricePointer < prices.length) {
    const originalPrice = prices[originalPricePointer];
    let discountableAmount = prices[discountAmountPointer] ?? 0;

    if (discountableAmount <= originalPrice) {
      discountedPrices[originalPricePointer] = originalPrice - discountableAmount;
      originalPricePointer++;
      discountAmountPointer = originalPricePointer + 1;
    } else {
      discountAmountPointer++;
    }
  }

  return discountedPrices;
}
