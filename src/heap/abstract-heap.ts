// TODO: add traversals Like DFS and BFS O(N)
// TODO: how about keeping the bigger child on the left without raising the complexity?
// TODO: add top method to get the root
export abstract class AbstractHeap<TItem extends number | Record<string, any> = number> {
  protected items: (TItem | undefined)[] = [];
  protected getValue: (item: TItem) => number = (item) => item as number;

  // Complexity O(N), cuz there is no rule that left side is less than right side
  // public abstract search(value: number);

  protected getValueAt(index: number) {
    const item = this.items[index];

    return item !== undefined ? this.getValue(item) : undefined;
  }

  constructor({ getValue }: { getValue?: (item: TItem) => number } = {}) {
    this.getValue = getValue ?? this.getValue;
  }

  protected getLeftChildIndex(parentIndex: number) {
    return 2 * parentIndex + 1;
  }

  protected getLeftChild(parentIndex: number) {
    return this.items[this.getLeftChildIndex(parentIndex)];
  }

  protected getRightChildIndex(parentIndex: number) {
    return 2 * parentIndex + 2;
  }

  protected getRightChild(parentIndex: number) {
    return this.items[this.getRightChildIndex(parentIndex)];
  }

  protected getParentIndex(childIndex: number) {
    return Math.floor((childIndex - 1) / 2);
  }

  protected getParent(childIndex: number) {
    return this.items[this.getParentIndex(childIndex)];
  }

  protected swapItems(item1Index: number, item2Index: number) {
    const item1 = this.items[item1Index];
    const item2 = this.items[item2Index];
    this.items[item1Index] = item2;
    this.items[item2Index] = item1;
  }

  public size() {
    return this.items.length;
  }

  protected firstIndex() {
    return 0;
  }

  protected lastIndex() {
    return this.items.length - 1;
  }

  public toList() {
    return this.items;
  }

  public top() {
    return this.items[0];
  }

  // TODO: realize this method and use for Snapshots
  // public toString() {}
}
