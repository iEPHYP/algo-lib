function minimumNonConstructibleChange(coins: number[]): number {
  const sortedCoins = coins.sort((a, b) => a - b);
  let currentConstructibleChange = 0;

  for (let i = 0; i < sortedCoins.length; i++) {
    const coin = sortedCoins[i];
    if (coin > currentConstructibleChange + 1) {
      return currentConstructibleChange + 1;
    } else {
      currentConstructibleChange += coin;
    }
  }

  return currentConstructibleChange + 1;
}

export { minimumNonConstructibleChange };
