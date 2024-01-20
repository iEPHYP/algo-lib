import { BinarySearchTree } from './binary-search-tree';

describe('BinarySearchTree', () => {
  let bst = new BinarySearchTree();

  const fillBst = () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(14);
    bst.insert(3);
    bst.insert(9);
    bst.insert(12);
  };

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  it('inserts value properly', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(14);
    bst.insert(3);
    bst.insert(9);
    bst.insert(12);

    expect(bst).toMatchSnapshot();
  });

  it('inserts value properly for duplicated items', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(14);
    bst.insert(14);
    bst.insert(3);
    bst.insert(9);
    bst.insert(12);

    expect(bst).toMatchSnapshot();
  });

  it('finds node by value properly', () => {
    expect(bst.find(4)).toMatchSnapshot('on empty tree');

    bst.insert(10);
    expect(bst.find(4)).toMatchSnapshot('on tree with root only');
    expect(bst.has(4)).toBe(false);
    expect(bst.find(10)).toMatchSnapshot('on tree with root only');
    expect(bst.has(10)).toBe(true);
    bst.insert(5);
    bst.insert(14);
    bst.insert(3);
    bst.insert(9);
    bst.insert(12);

    expect(bst.find(10)).toMatchSnapshot('for 10');
    expect(bst.has(10)).toBe(true);
    expect(bst.find(9)).toMatchSnapshot('for 9');
    expect(bst.has(9)).toBe(true);
    expect(bst.find(12)).toMatchSnapshot('for 12');
    expect(bst.has(12)).toBe(true);
    expect(bst.find(13)).toMatchSnapshot('for 13');
    expect(bst.has(13)).toBe(false);
    expect(bst.find(16)).toMatchSnapshot('for 16');
    expect(bst.has(16)).toBe(false);
  });

  it('bfs works properly', () => {
    fillBst();

    const nodeVisitOrder: number[] = [];
    bst.bfs({
      onNodeVisit: (node) => {
        nodeVisitOrder.push(node.value);
      },
    });

    expect(nodeVisitOrder).toMatchSnapshot();
  });

  it('preorderDfs works properly', () => {
    fillBst();

    const nodeVisitOrder: number[] = [];
    bst.preorderDfs({
      onNodeVisit: (node) => {
        nodeVisitOrder.push(node.value);
      },
    });

    expect(nodeVisitOrder).toMatchSnapshot();
  });

  it('postorderDfs works properly', () => {
    fillBst();

    const nodeVisitOrder: number[] = [];
    bst.postorderDfs({
      onNodeVisit: (node) => {
        nodeVisitOrder.push(node.value);
      },
    });

    expect(nodeVisitOrder).toMatchSnapshot();
  });

  it('inorderDfs works properly', () => {
    fillBst();

    const nodeVisitOrder: number[] = [];
    bst.inorderDfs({
      onNodeVisit: (node) => {
        nodeVisitOrder.push(node.value);
      },
    });

    expect(nodeVisitOrder).toMatchSnapshot();
  });

  it('mrlDfs works properly', () => {
    fillBst();

    const nodeVisitOrder: number[] = [];
    bst.mrlDfs({
      onNodeVisit: (node) => {
        nodeVisitOrder.push(node.value);
      },
    });

    expect(nodeVisitOrder).toMatchSnapshot();
  });

  it('rmlDfs works properly', () => {
    fillBst();

    const nodeVisitOrder: number[] = [];
    bst.rmlDfs({
      onNodeVisit: (node) => {
        nodeVisitOrder.push(node.value);
      },
    });

    expect(nodeVisitOrder).toMatchSnapshot();
  });

  it('rlmDfs works properly', () => {
    fillBst();

    const nodeVisitOrder: number[] = [];
    bst.rlmDfs({
      onNodeVisit: (node) => {
        nodeVisitOrder.push(node.value);
      },
    });

    expect(nodeVisitOrder).toMatchSnapshot();
  });
});
