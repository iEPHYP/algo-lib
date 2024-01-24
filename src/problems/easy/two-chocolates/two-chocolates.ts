export function buyChoco(prices: number[], money: number): number {
  const sortedPrices = [...prices].sort((a, b) => a - b);

  const cheapestTwoChocolatesSum = sortedPrices[0] + sortedPrices[1];

  return cheapestTwoChocolatesSum > money ? money : money - cheapestTwoChocolatesSum;
}
