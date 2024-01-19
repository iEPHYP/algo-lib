import { MinHeap } from '@/heap';

export interface PriorityQueueItem {
  priority: number;
}

// TODO: items with the same priority don't get dequeued properly
// TODO: extract comparing function to jungle priorities according to any item props
export class PriorityQueue<TItem extends PriorityQueueItem = PriorityQueueItem> {
  private heap = new MinHeap<TItem>({ getValue: (item) => item.priority });

  // Complexity O(logN)
  public enqueue(item: TItem) {
    this.heap.insert(item);
  }

  // Complexity O(logN)
  public dequeue() {
    return this.heap.extractMin() || null;
  }

  public toList() {
    return this.heap.toList();
  }

  public size() {
    return this.heap.size();
  }
}
