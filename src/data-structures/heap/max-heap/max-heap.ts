import { AbstractHeap } from '../abstract-heap';

export class MaxHeap<
  TItem extends number | Record<string, any> = number,
> extends AbstractHeap<TItem> {
  // Complexity O(logN)
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

  // Complexity O(logN)
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
}
