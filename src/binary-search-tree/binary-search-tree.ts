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

  // Complexity O(logN)T AVG, O(1)S. O(N)T WORST
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

  // Complexity O(logN)T AVG, O(1)S. O(N)T WORST
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

  // Complexity O(logN)T AVG, O(1)S. O(N)T WORST
  public has(value: TValue): boolean {
    return !!this.find(value);
  }

  // Complexity O(N)T, O(N)S WORST on a chain
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

  // Complexity O(N)T, O(1)S
  // MLR
  // TODO: write down flattening the tree to the cloning and serialization and deserialization methods in O(N) rather than O(NlogN)
  public preorderDfs({ onNodeVisit }: { onNodeVisit: (node: BstNode<TValue>) => void }) {
    const traverse = (node: BstNode<TValue>) => {
      onNodeVisit(node);

      node.leftChild && traverse(node.leftChild);
      node.rightChild && traverse(node.rightChild);
    };

    if (this.root) {
      traverse(this.root);
    }
  }

  // Complexity O(N)T, O(1)S
  // LRM
  public postorderDfs({ onNodeVisit }: { onNodeVisit: (node: BstNode<TValue>) => void }) {
    const traverse = (node: BstNode<TValue>) => {
      node.leftChild && traverse(node.leftChild);
      node.rightChild && traverse(node.rightChild);
      onNodeVisit(node);
    };

    if (this.root) {
      traverse(this.root);
    }
  }

  // Complexity O(N)T, O(1)S
  // LMR
  public inorderDfs({ onNodeVisit }: { onNodeVisit: (node: BstNode<TValue>) => void }) {
    const traverse = (node: BstNode<TValue>) => {
      node.leftChild && traverse(node.leftChild);
      onNodeVisit(node);
      node.rightChild && traverse(node.rightChild);
    };

    if (this.root) {
      traverse(this.root);
    }
  }

  // Complexity O(N)T, O(1)S
  // MRL
  public mrlDfs({ onNodeVisit }: { onNodeVisit: (node: BstNode<TValue>) => void }) {
    const traverse = (node: BstNode<TValue>) => {
      onNodeVisit(node);
      node.rightChild && traverse(node.rightChild);
      node.leftChild && traverse(node.leftChild);
    };

    if (this.root) {
      traverse(this.root);
    }
  }

  // Complexity O(N)T, O(1)S
  // RML
  public rmlDfs({ onNodeVisit }: { onNodeVisit: (node: BstNode<TValue>) => void }) {
    const traverse = (node: BstNode<TValue>) => {
      node.rightChild && traverse(node.rightChild);
      onNodeVisit(node);
      node.leftChild && traverse(node.leftChild);
    };

    if (this.root) {
      traverse(this.root);
    }
  }

  // Complexity O(N)T, O(1)S
  // RLM
  public rlmDfs({ onNodeVisit }: { onNodeVisit: (node: BstNode<TValue>) => void }) {
    const traverse = (node: BstNode<TValue>) => {
      node.rightChild && traverse(node.rightChild);
      node.leftChild && traverse(node.leftChild);
      onNodeVisit(node);
    };

    if (this.root) {
      traverse(this.root);
    }
  }

  // TODO: realize pretty printing
  // public toString() {}
}
