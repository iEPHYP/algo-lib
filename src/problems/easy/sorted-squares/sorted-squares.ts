function sortedSquares(numbers: number[]): number[] {
  const negativeNumbersSquares = [];
  const squaredSortedNumbers = [];

  for (const number of numbers) {
    const numberSquare = number ** 2;

    if (number < 0) {
      negativeNumbersSquares.push(numberSquare);
    } else {
      let lastNegativeNumberSquare = negativeNumbersSquares.at(-1);
      while (lastNegativeNumberSquare && numberSquare >= lastNegativeNumberSquare) {
        negativeNumbersSquares.pop();
        squaredSortedNumbers.push(lastNegativeNumberSquare);
        lastNegativeNumberSquare = negativeNumbersSquares.at(-1);
      }
      squaredSortedNumbers.push(numberSquare);
    }
  }

  return squaredSortedNumbers.concat(negativeNumbersSquares.reverse());
}

export { sortedSquares };
