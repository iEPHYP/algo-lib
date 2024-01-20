import { heapSort } from './heap-sort';

describe(heapSort.name, () => {
  it('sorts properly by ascending order', () => {
    const array = [2, 3, 0, 23, 44, 5, 1, 4, 6, 6, 6, 9, 5];

    const sortedArray = heapSort(array, 'asc');

    expect(sortedArray).toMatchSnapshot();
  });

  it('sorts properly by descending order', () => {
    const array = [2, 3, 0, 23, 44, 5, 1, 4, 6, 6, 6, 9, 5];

    const sortedArray = heapSort(array, 'desc');

    expect(sortedArray).toMatchSnapshot();
  });

  it('sorts array of objects properly by ascending order', () => {
    const array: { value: number }[] = [2, 3, 0, 23, 44, 5, 1, 4, 6, 6, 6, 9, 5].map((item) => ({
      value: item,
    }));

    const sortedArray = heapSort(array, 'asc', (item) => item.value);

    expect(sortedArray).toMatchSnapshot();
  });

  it('sorts array of objects properly by descending order', () => {
    const array: { value: number }[] = [2, 3, 0, 23, 44, 5, 1, 4, 6, 6, 6, 9, 5].map((item) => ({
      value: item,
    }));

    const sortedArray = heapSort(array, 'desc', (item) => item.value);

    expect(sortedArray).toMatchSnapshot();
  });
});
