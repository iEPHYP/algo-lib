// TODO: realize MinHeap
export class MaxHeap<TItem extends { value: number } | number = number> {
  private items: (TItem | undefined)[] = [];
  private getValue: (item: TItem) => number = (item) =>
    typeof item === 'number' ? item : item.value;

  private getValueAt(index: number) {
    const item = this.items[index];

    return item !== undefined ? this.getValue(item) : undefined;
  }

  constructor(getValue?: (item: TItem) => number) {
    this.getValue = getValue ?? this.getValue;
  }

  private getLeftChildIndex(parentIndex: number) {
    return 2 * parentIndex + 1;
  }

  private getLeftChild(parentIndex: number) {
    return this.items[this.getLeftChildIndex(parentIndex)];
  }

  private getRightChildIndex(parentIndex: number) {
    return 2 * parentIndex + 2;
  }

  private getRightChild(parentIndex: number) {
    return this.items[this.getRightChildIndex(parentIndex)];
  }

  private getParentIndex(childIndex: number) {
    return Math.floor((childIndex - 1) / 2);
  }

  private getParent(childIndex: number) {
    return this.items[this.getParentIndex(childIndex)];
  }

  private swapItems(item1Index: number, item2Index: number) {
    const item1 = this.items[item1Index];
    const item2 = this.items[item2Index];
    this.items[item1Index] = item2;
    this.items[item2Index] = item1;
  }

  // Complexity O(logN) AVG, O(N) WORST
  public insert(newItem: TItem) {
    this.items.push(newItem);
    const newItemValue = this.getValue(newItem);

    let newItemIndex = this.items.length - 1;
    let parentIndex = this.getParentIndex(newItemIndex);
    let parentValue = this.getValueAt(parentIndex);
    while (parentValue !== undefined && newItemValue > parentValue) {
      this.swapItems(parentIndex, newItemIndex);

      newItemIndex = parentIndex;
      parentIndex = this.getParentIndex(newItemIndex);
      parentValue = this.getValueAt(parentIndex);
    }
  }

  // Complexity O(logN) AVG, O(N) WORST
  public extractMax() {
    const root = this.items[this.firstIndex()];

    if (this.size() <= 1) {
      return this.items.pop();
    }

    this.swapItems(this.firstIndex(), this.lastIndex());

    this.items.pop();

    // TODO: make this less verbose
    const sinkDown = (unstablizedNewRootIndex: number) => {
      const unstablizedNewRootValue = this.getValueAt(unstablizedNewRootIndex);

      if (unstablizedNewRootValue === undefined) {
        return;
      }

      const leftChildIndex = this.getLeftChildIndex(unstablizedNewRootIndex);
      const leftChildValue = this.getValueAt(leftChildIndex);

      const rightChildIndex = this.getRightChildIndex(unstablizedNewRootIndex);
      const rightChildValue = this.getValueAt(rightChildIndex);

      const swapWithLeftChild = (leftChildValue: number) => {
        if (leftChildValue > unstablizedNewRootValue) {
          this.swapItems(leftChildIndex, unstablizedNewRootIndex);
          sinkDown(leftChildIndex);
        }
      };

      const swapWithRightChild = (rightChildValue: number) => {
        if (rightChildValue > unstablizedNewRootValue) {
          this.swapItems(rightChildIndex, unstablizedNewRootIndex);
          sinkDown(rightChildIndex);
        }
      };

      if (leftChildValue !== undefined && rightChildValue !== undefined) {
        if (leftChildValue > rightChildValue) {
          swapWithLeftChild(leftChildValue);
        } else {
          swapWithRightChild(rightChildValue);
        }
      } else {
        if (leftChildValue !== undefined) {
          swapWithLeftChild(leftChildValue);
        } else if (rightChildValue !== undefined) {
          swapWithRightChild(rightChildValue);
        }
      }
    };

    sinkDown(this.firstIndex());

    return root;
  }

  public size() {
    return this.items.length;
  }

  private firstIndex() {
    return 0;
  }

  private lastIndex() {
    return this.items.length - 1;
  }

  public toList() {
    return this.items;
  }

  // TODO: realize this method and use for Snapshots
  // public toString() {}
}
