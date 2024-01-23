export function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let buyPointer = 0;
  let sellPointer = 1;

  while (sellPointer < prices.length) {
    const sellPrice = prices[sellPointer];
    const buyPrice = prices[buyPointer];
    if (sellPrice > buyPrice) {
      maxProfit = Math.max(maxProfit, sellPrice - buyPrice);
    } else {
      buyPointer = sellPointer;
    }
    sellPointer++;
  }

  return maxProfit;
}
