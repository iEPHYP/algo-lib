export function buyChoco(prices: number[], money: number): number {
  let [minPrice, previousMinPrice] = [prices[0], prices[1]].sort((a, b) => a - b);

  for (let i = 2; i < prices.length; i++) {
    const price = prices[i];
    if (price <= previousMinPrice) {
      if (price <= minPrice) {
        previousMinPrice = minPrice;
        minPrice = price;
      } else {
        previousMinPrice = price;
      }
    }
  }

  const twoChocolatesSum = minPrice + previousMinPrice;

  return twoChocolatesSum > money ? money : money - twoChocolatesSum;
}
