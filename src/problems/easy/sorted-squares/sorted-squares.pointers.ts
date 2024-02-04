function sortedSquares(numbers: number[]): number[] {
  const squaredSortedNumbers: typeof numbers = [];
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (leftPointer <= rightPointer) {
    const leftPointerSquare = numbers[leftPointer] ** 2;
    const rightPointerSquare = numbers[rightPointer] ** 2;

    if (leftPointerSquare >= rightPointerSquare) {
      leftPointer++;
      squaredSortedNumbers.push(leftPointerSquare);
    } else {
      rightPointer--;
      squaredSortedNumbers.push(rightPointerSquare);
    }
  }

  return squaredSortedNumbers.reverse();
}

export { sortedSquares };
