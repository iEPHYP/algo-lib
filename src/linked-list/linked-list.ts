export interface LinkedListItem<TValue = number> {
  value: TValue;
  nextItem: LinkedListItem<TValue> | null;
  previousItem: LinkedListItem<TValue> | null;
}

export class LinkedList<TValue> {
  public head: LinkedListItem<TValue> | null = null;
  public tail: LinkedListItem<TValue> | null = null;
  private _size = 0;

  private incrementSize() {
    this._size++;
  }

  private decrementSize() {
    if (this._size > 0) {
      this._size--;
    }
  }

  public size() {
    return this._size;
  }

  public empty() {
    return this.size() === 0;
  }

  // O(N)TS
  public toList() {
    const list: TValue[] = [];
    if (this.head) {
      let item = this.head;
      for (let i = 0; i < this.size(); i++) {
        list.push(item.value);
        if (item.nextItem === null) {
          break;
        }
        item = item.nextItem;
      }
    }

    return list;
  }

  // TODO: implement and add test cases
  /** Inserts an element at specified index O(i)T ~ O(N) */
  public insertAt(value: TValue, index: number) {
    throw Error('Not implemented yet');
  }
  /** Inserts an element after specified item O(1)TS */
  public insertAfter(item: LinkedListItem<TValue>, value: TValue) {
    throw Error('Not implemented yet');
  }
  /** Inserts an element before specified item O(1)TS */
  public insertBefore(item: LinkedListItem<TValue>, value: TValue) {
    throw Error('Not implemented yet');
  }
  /** Removes an element at specified index O(i)T ~ O(N) */
  public removeAt(index: number): TValue | null {
    throw Error('Not implemented yet');
  }
  /** Removes an element after specified item O(1)TS */
  public removeAfter(item: LinkedListItem<TValue>): TValue | null {
    throw Error('Not implemented yet');
  }
  /** Removes an element before specified item O(1)TS */
  public removeBefore(item: LinkedListItem<TValue>): TValue | null {
    throw Error('Not implemented yet');
  }

  /** Adds element to the head O(1)TS */
  public unshift(value: TValue) {
    const previousHead = this.head;
    this.head = {
      value,
      nextItem: previousHead,
      previousItem: null,
    };
    if (previousHead) {
      previousHead.previousItem = this.head;
    }
    if (this.size() === 0) {
      this.tail = this.head;
    }
    this.incrementSize();
  }

  /** Removes the first element and returns removed element O(1)TS */
  public shift() {
    const previousHead = this.head;
    this.head = previousHead?.nextItem || null;

    this.decrementSize();

    if (this.size() === 0) {
      this.tail = null;
      this.head = null;
    }

    return previousHead?.value || null;
  }

  /** Adds element to the end O(1)TS */
  public push(value: TValue) {
    if (this.tail) {
      const nextTail = {
        value,
        previousItem: this.tail,
        nextItem: null,
      };
      this.tail.nextItem = nextTail;
      this.tail = nextTail;
    } else {
      this.tail = {
        value,
        previousItem: null,
        nextItem: null,
      };
      this.head = this.tail;
    }
    this.incrementSize();
  }

  /** Removes element from the end and returns removed element O(1)TS */
  public pop(): TValue | null {
    if (this.tail) {
      const tailValue = this.tail.value;
      this.tail = this.tail.previousItem;

      this.decrementSize();

      if (this.size() === 0) {
        this.head = null;
        this.tail = null;
      }

      return tailValue;
    } else {
      return null;
    }
  }
}
