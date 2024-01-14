import { LinkedList } from './linked-list';

describe('LinkedList', () => {
  let linkedList: LinkedList<number>;

  beforeEach(() => {
    linkedList = new LinkedList<number>();
  });

  it('initializes correctly', () => {
    expect(linkedList.toList()).toMatchSnapshot('initialized Linked List');
  });

  it('adds elements to the beginning with unshift', () => {
    linkedList.unshift(1);
    expect(linkedList.toList()).toMatchSnapshot('unshifts for empty Linked List');
    linkedList.unshift(2);
    expect(linkedList.toList()).toMatchSnapshot('unshifts for Linked List with 1 item');
    linkedList.unshift(3);
    expect(linkedList.toList()).toMatchSnapshot('unshifts for Linked List with 2 items');
  });

  it('removes elements from the beginning with shift', () => {
    expect(linkedList.shift()).toBe(null);
    expect(linkedList.toList()).toMatchSnapshot('shifts for empty Linked List');

    linkedList.unshift(1);
    expect(linkedList.shift()).toBe(1);
    expect(linkedList.toList()).toMatchSnapshot('shifts for Linked List with 1 item');

    linkedList.unshift(1);
    linkedList.unshift(2);
    expect(linkedList.shift()).toBe(2);
    expect(linkedList.toList()).toMatchSnapshot('shifts for Linked List with 2 items');
  });

  it('adds elements to the end with push', () => {
    linkedList.push(1);
    expect(linkedList.toList()).toMatchSnapshot('for empty Linked List');
    linkedList.push(2);
    expect(linkedList.toList()).toMatchSnapshot('for Linked List with 1 item');
    linkedList.push(3);
    expect(linkedList.toList()).toMatchSnapshot('for Linked List with 2 items');
  });

  it('removes elements from the end with pop', () => {
    expect(linkedList.pop()).toBe(null);
    expect(linkedList.toList()).toMatchSnapshot('for empty Linked List');
    linkedList.push(1);
    expect(linkedList.pop()).toBe(1);
    expect(linkedList.toList()).toMatchSnapshot('for Linked List with 1 item');
    linkedList.push(1);
    linkedList.push(2);
    expect(linkedList.pop()).toBe(2);
    expect(linkedList.toList()).toMatchSnapshot('for Linked List with 2 items');
  });

  it('checks if list is empty', () => {
    expect(linkedList.empty()).toBe(true);
    linkedList.push(1);
    expect(linkedList.empty()).toBe(false);
    linkedList.unshift(2);
    expect(linkedList.empty()).toBe(false);
  });

  it('checks the size of the list', () => {
    expect(linkedList.size()).toBe(0);
    linkedList.push(1);
    expect(linkedList.size()).toBe(1);
    linkedList.pop();
    expect(linkedList.size()).toBe(0);
  });

  it('looks as expected after several operations', () => {
    linkedList.unshift(1);
    linkedList.push(2);
    linkedList.push(5);
    linkedList.unshift(10);
    linkedList.pop();
    linkedList.unshift(11);
    linkedList.shift();
    linkedList.shift();
    linkedList.push(22);

    expect(linkedList.toList()).toMatchSnapshot();
  });
});
