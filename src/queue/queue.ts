import { LinkedList } from '../linked-list';

export class Queue<TValue = number> {
  public linkedList = new LinkedList<TValue>();

  public toList() {
    return this.linkedList.toList();
  }

  public enqueue(value: TValue) {
    this.linkedList.push(value);
  }

  public dequeue() {
    return this.linkedList.shift();
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
}
