export function maxProfit(prices: number[]): number {
  let totalProfit = 0;
  let lastTradeProfit = 0;
  let buyPointer = 0;
  let sellPointer = 1;

  while (sellPointer < prices.length) {
    const sellPrice = prices[sellPointer];
    const buyPrice = prices[buyPointer];
    const profit = sellPrice - buyPrice;
    if (sellPrice > buyPrice) {
      if (profit > lastTradeProfit) {
        totalProfit = totalProfit - lastTradeProfit + profit;
        lastTradeProfit = profit;
      } else {
        lastTradeProfit = 0;
        buyPointer = sellPointer;
      }
    } else {
      buyPointer = sellPointer;
      lastTradeProfit = 0;
    }
    sellPointer++;
  }

  return totalProfit;
}
