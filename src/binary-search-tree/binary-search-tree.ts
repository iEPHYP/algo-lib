import { Queue } from '@/queue';

export class BstNode<TValue = number> {
  public value: TValue;
  public leftChild: BstNode<TValue> | null;
  public rightChild: BstNode<TValue> | null;
  public duplicatesCount = 0;

  constructor(value: TValue) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

export class BinarySearchTree<TValue = number> {
  public root: BstNode<TValue> | null = null;

  constructor(root?: BstNode<TValue>) {
    this.root = root ?? null;
  }

  public insert(value: TValue): BstNode<TValue> {
    const node = new BstNode(value);
    if (!this.root) {
      this.root = node;

      return node;
    }

    let currentComparingNode = this.root;

    while (true) {
      if (value < currentComparingNode.value) {
        if (currentComparingNode.leftChild) {
          currentComparingNode = currentComparingNode.leftChild;
        } else {
          currentComparingNode.leftChild = node;
          break;
        }
      } else if (value > currentComparingNode.value) {
        if (currentComparingNode.rightChild) {
          currentComparingNode = currentComparingNode.rightChild;
        } else {
          currentComparingNode.rightChild = node;
          break;
        }
      } else {
        // TODO: research the possible realizations for duplicates and realize them
        currentComparingNode.duplicatesCount++;

        return currentComparingNode;
      }
    }

    return node;
  }

  public find(value: TValue): BstNode<TValue> | null {
    if (this.root === null) {
      return null;
    }

    let currentComparingNode = this.root;

    while (true) {
      if (value === currentComparingNode.value) {
        return currentComparingNode;
      } else if (value < currentComparingNode.value) {
        if (currentComparingNode.leftChild) {
          currentComparingNode = currentComparingNode.leftChild;
        } else {
          return null;
        }
      } else if (value > currentComparingNode.value) {
        if (currentComparingNode.rightChild) {
          currentComparingNode = currentComparingNode.rightChild;
        } else {
          return null;
        }
      }
    }
  }

  public has(value: TValue): boolean {
    return !!this.find(value);
  }

  public bfs({ onNodeVisit }: { onNodeVisit: (node: BstNode<TValue>) => void }) {
    if (!this.root) {
      return;
    }

    const queue = new Queue<BstNode<TValue> | null>();
    queue.enqueue(this.root);

    while (!queue.empty()) {
      const currentNode = queue.dequeue();

      if (!currentNode) {
        break;
      }

      onNodeVisit(currentNode);

      [currentNode.leftChild, currentNode.rightChild].forEach((childNode) => {
        childNode && queue.enqueue(childNode);
      });
    }
  }

  // TODO: realize pretty printing
  // public toString() {}
}
