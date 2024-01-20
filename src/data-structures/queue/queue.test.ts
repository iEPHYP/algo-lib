import { Queue } from './queue';

describe('Queue', () => {
  let queue: Queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('initializes correctly', () => {
    expect(queue.toList()).toMatchSnapshot('initialized Queue in List');
  });

  it('enqueues elements', () => {
    queue.enqueue(1);
    expect(queue.toList()).toMatchSnapshot('on empty Queue');
    queue.enqueue(2);
    expect(queue.toList()).toMatchSnapshot('on Queue with 1 item');
    queue.enqueue(3);
    expect(queue.toList()).toMatchSnapshot('on Queue with 2 items');
  });

  it('dequeues elements', () => {
    expect(queue.dequeue()).toBe(null);
    expect(queue.toList()).toMatchSnapshot('on empty Queue');
    queue.enqueue(1);
    expect(queue.dequeue()).toBe(1);
    expect(queue.toList()).toMatchSnapshot('on Queue with 1 item');
    queue.clear();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.toList()).toMatchSnapshot('on Queue with 2 items');
    queue.clear();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.toList()).toMatchSnapshot('on Queue with 3 items');
  });

  it('checks if queue is empty', () => {
    expect(queue.empty()).toBe(true);
    queue.enqueue(1);
    expect(queue.empty()).toBe(false);
    queue.dequeue();
    expect(queue.empty()).toBe(true);
  });

  it('checks the size of the queue', () => {
    expect(queue.size()).toBe(0);
    queue.enqueue(1);
    expect(queue.size()).toBe(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);
    queue.dequeue();
    expect(queue.size()).toBe(1);
  });

  it('performs combined operations', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(2);
    expect(queue.toList()).toMatchSnapshot();
  });
});
