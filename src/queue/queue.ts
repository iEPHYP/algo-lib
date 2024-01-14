import { EventEmitter } from 'events';

import { LinkedList } from '../linked-list';

export class Queue<TValue = number> {
  public linkedList = new LinkedList<TValue>();

  public toList() {
    return this.linkedList.toList();
  }

  public enqueue(value: TValue) {
    this.linkedList.push(value);
    this.eventEmitter.emit('enqueue', value);
  }

  public dequeue() {
    const dequeuedItem = this.linkedList.shift();
    this.eventEmitter.emit('dequeue', dequeuedItem);

    return dequeuedItem;
  }

  public empty() {
    return this.linkedList.empty();
  }

  public size() {
    return this.linkedList.size();
  }

  public clear() {
    this.linkedList.clear();
  }

  private eventEmitter = new EventEmitter();

  public subscribeToEnqueue(callback: (value: TValue) => void) {
    this.eventEmitter.on('enqueue', callback);
  }

  public subscribeToDequeue(callback: (value: ReturnType<typeof this.dequeue>) => void) {
    this.eventEmitter.on('enqueue', callback);
  }
}
