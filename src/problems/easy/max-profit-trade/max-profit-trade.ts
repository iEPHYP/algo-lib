export function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;

  prices.forEach((price) => {
    if (price < minPrice) {
      minPrice = price;
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
  });

  return maxProfit;
}
