import { PriorityQueue, PriorityQueueItem } from './priority-queue';

interface Patient extends PriorityQueueItem {
  name: string;
  diagnosis: string;
}

describe('PriorityQueue', () => {
  let hospitalPriorityQueue = new PriorityQueue<Patient>();

  const fillPriorityQueue = () => {
    hospitalPriorityQueue.enqueue({ name: 'Simon', diagnosis: 'injury', priority: 3 });
    hospitalPriorityQueue.enqueue({ name: 'Eric', diagnosis: 'exploded head', priority: 0 });
    hospitalPriorityQueue.enqueue({ name: 'Aaron', diagnosis: 'sniffing', priority: 6 });
    hospitalPriorityQueue.enqueue({ name: 'Jane', diagnosis: 'bleeding', priority: 2 });
    hospitalPriorityQueue.enqueue({ name: 'Nick', diagnosis: 'flu', priority: 4 });
    hospitalPriorityQueue.enqueue({ name: 'May', diagnosis: 'flu', priority: 4 });
    hospitalPriorityQueue.enqueue({ name: 'Jack', diagnosis: 'high temperature', priority: 8 });
    hospitalPriorityQueue.enqueue({ name: 'Dread', diagnosis: 'flu', priority: 4 });
  };

  beforeEach(() => {
    hospitalPriorityQueue = new PriorityQueue<Patient>();
  });

  it('enqueues properly', () => {
    fillPriorityQueue();

    expect(hospitalPriorityQueue.toList()).toMatchSnapshot();
  });

  it('dequeues properly', () => {
    expect(hospitalPriorityQueue.dequeue()).toMatchSnapshot('value on empty queue');
    expect(hospitalPriorityQueue.toList()).toMatchSnapshot('after empty queue');
    fillPriorityQueue();
    expect(hospitalPriorityQueue.dequeue()).toMatchSnapshot('value on full queue');
    expect(hospitalPriorityQueue.toList()).toMatchSnapshot('on full queue');
    expect(hospitalPriorityQueue.dequeue()).toMatchSnapshot('value on full queue');
    expect(hospitalPriorityQueue.toList()).toMatchSnapshot('on full queue');
    expect(hospitalPriorityQueue.dequeue()).toMatchSnapshot('value on full queue');
    expect(hospitalPriorityQueue.toList()).toMatchSnapshot('on full queue');
    expect(hospitalPriorityQueue.dequeue()).toMatchSnapshot('value on full queue');
    expect(hospitalPriorityQueue.toList()).toMatchSnapshot('on full queue');
    expect(hospitalPriorityQueue.dequeue()).toMatchSnapshot('value on full queue');
    expect(hospitalPriorityQueue.toList()).toMatchSnapshot('on full queue');
    expect(hospitalPriorityQueue.dequeue()).toMatchSnapshot('value on full queue');
    expect(hospitalPriorityQueue.toList()).toMatchSnapshot('on full queue');
    expect(hospitalPriorityQueue.dequeue()).toMatchSnapshot('value on full queue');
    expect(hospitalPriorityQueue.toList()).toMatchSnapshot('on full queue');
    expect(hospitalPriorityQueue.dequeue()).toMatchSnapshot('value on full queue');
    expect(hospitalPriorityQueue.toList()).toMatchSnapshot('on full queue');
    expect(hospitalPriorityQueue.dequeue()).toMatchSnapshot('value on full queue');
    expect(hospitalPriorityQueue.toList()).toMatchSnapshot('on full queue');
  });
});
