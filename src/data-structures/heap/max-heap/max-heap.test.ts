import { MaxHeap } from './max-heap';

describe('MaxHeap', () => {
  let maxHeap = new MaxHeap();

  beforeEach(() => {
    maxHeap = new MaxHeap();
  });

  it('inserts items properly', () => {
    maxHeap.insert(1);
    expect(maxHeap.toList()).toMatchSnapshot();
    maxHeap.insert(5);
    expect(maxHeap.toList()).toMatchSnapshot();
    maxHeap.insert(3);
    expect(maxHeap.toList()).toMatchSnapshot();
    maxHeap.insert(4);
    expect(maxHeap.toList()).toMatchSnapshot();
    maxHeap.insert(2);
    expect(maxHeap.toList()).toMatchSnapshot();
    maxHeap.insert(0);
    expect(maxHeap.toList()).toMatchSnapshot();
    maxHeap.insert(10);
    expect(maxHeap.toList()).toMatchSnapshot();
  });

  it('extracts Max root properly', () => {
    maxHeap.insert(1);
    expect(maxHeap.extractMax()).toBe(1);
    expect(maxHeap.toList()).toMatchSnapshot('extracting from heap with 1 item');
    maxHeap.insert(1);
    maxHeap.insert(5);
    expect(maxHeap.extractMax()).toBe(5);
    expect(maxHeap.toList()).toMatchSnapshot('extracting from heap with 2 items');
    maxHeap.insert(5);
    maxHeap.insert(0);
    maxHeap.insert(4);
    maxHeap.insert(2);
    maxHeap.insert(3);
    maxHeap.insert(10);
    maxHeap.insert(6);
    maxHeap.insert(19);
    expect(maxHeap.toList()).toMatchSnapshot('heap with several items');
    expect(maxHeap.extractMax()).toBe(19);
    expect(maxHeap.toList()).toMatchSnapshot('extracting 19 from heap with several items');
    expect(maxHeap.extractMax()).toBe(10);
    expect(maxHeap.toList()).toMatchSnapshot('extracting 10 from heap with several items');
    expect(maxHeap.extractMax()).toBe(6);
    expect(maxHeap.toList()).toMatchSnapshot('extracting 6 from heap with several items');
    expect(maxHeap.extractMax()).toBe(5);
    expect(maxHeap.toList()).toMatchSnapshot('extracting 5 from heap with several items');
    expect(maxHeap.extractMax()).toBe(4);
    expect(maxHeap.toList()).toMatchSnapshot('extracting 4 from heap with several items');
    expect(maxHeap.extractMax()).toBe(3);
    expect(maxHeap.toList()).toMatchSnapshot('extracting 3 from heap with several items');
    expect(maxHeap.extractMax()).toBe(2);
    expect(maxHeap.toList()).toMatchSnapshot('extracting 2 from heap with several items');
    expect(maxHeap.extractMax()).toBe(1);
    expect(maxHeap.toList()).toMatchSnapshot('extracting 1 from heap with several items');
    expect(maxHeap.extractMax()).toBe(0);
    expect(maxHeap.toList()).toMatchSnapshot('extracting 0 from heap with several items');
  });
});
