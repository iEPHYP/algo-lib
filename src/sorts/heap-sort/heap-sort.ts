import { MaxHeap } from 'data-structures/heap/max-heap';
import { MinHeap } from 'data-structures/heap/min-heap';

// TODO: how to make this sort using compareFn? Is that possible?
// Compexity O(2NlogN) => O(NlogN)
export const heapSort = <TItem extends number | Record<string, any> = number>(
  array: TItem[],
  order: 'desc' | 'asc',
  byProp: (item: TItem) => number = (item) => item as number
) => {
  const heap =
    order === 'asc'
      ? new MinHeap<TItem>({ getValue: byProp })
      : new MaxHeap<TItem>({ getValue: byProp });

  // O(NlogN)
  array.forEach((item) => {
    heap.insert(item);
  });

  const sortedArray: TItem[] = [];

  // O(NlogN)
  const heapSize = heap.size();
  for (let i = 0; i < heapSize; i++) {
    const extractedItem = heap instanceof MaxHeap ? heap.extractMax() : heap.extractMin();
    extractedItem && sortedArray.push(extractedItem);
  }

  return sortedArray;
};
