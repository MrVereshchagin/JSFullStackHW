// Make class of double linked list in TS
class DoublyLinkedList<T> {
  private head: { value: T; prev: DoublyLinkedNode<T> | null; next: DoublyLinkedNode<T> | null } | null = null;
  private tail: { value: T; prev: DoublyLinkedNode<T> | null; next: DoublyLinkedNode<T> | null } | null = null;
  private _length = 0;

  public append(value: T): void {
    const newNode: DoublyLinkedNode<T> = { value, prev: this.tail, next: null };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this._length++;
  }

  public prepend(value: T): void {
    const newNode: DoublyLinkedNode<T> = { value, prev: null, next: this.head };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      this.head = newNode;
    }
    this._length++;
  }

  public search(value: T): DoublyLinkedNode<T> | null {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  public remove(value: T): boolean {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        if (currentNode === this.head && currentNode === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (currentNode === this.head) {
          this.head = this.head.next;
          if (this.head) this.head.prev = null;
        } else if (currentNode === this.tail) {
          this.tail = this.tail.prev;
          if (this.tail) this.tail.next = null;
        } else {
          const prevNode = currentNode.prev;
          const nextNode = currentNode.next;
          if (prevNode) prevNode.next = nextNode;
          if (nextNode) nextNode.prev = prevNode;
        }
        this._length--;
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  public change(oldValue: T, newValue: T): boolean {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === oldValue) {
        currentNode.value = newValue;
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  get length(): number {
    return this._length;
  }
}

interface DoublyLinkedNode<T> {
  value: T;
  prev: DoublyLinkedNode<T> | null;
  next: DoublyLinkedNode<T> | null;
}

const myList = new DoublyLinkedList<number>();
console.log(myList.length); // 0

myList.append(1);
myList.append(2);
myList.append(3);
console.log(myList.length); // 3

myList.prepend(0);
console.log(myList.length); // 4

const node1 = myList.search(2);
if (node1) {
  console.log(node1.value); // 2
  myList.remove(2);
  console.log(myList.length); // 3
}

const node2 = myList.search(4);
console.log(node2); // null

const success = myList.change(3, 4);
console.log(success); // true

const failure = myList.change(5, 6);
console.log(failure); // false

myList.append(5);
console.log(myList.length); // 4
myList.remove(0);
console.log(myList.length); // 3

myList.prepend(-1);
console.log(myList.length); // 4

const node3 = myList.search(5);
if (node3) {
  console.log(node3.value); // 5
  myList.remove(5);
  console.log(myList.length); // 3
}

const node4 = myList.search(-1);
if (node4) {
  console.log(node4.value); // -1
  myList.remove(-1);
  console.log(myList.length); // 2
}

// Make class of list in TS
class List<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  public add(item: T): void {
    this.items.push(item);
  }

  public remove(item: T): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  public search(item: T): boolean {
    const index = this.items.indexOf(item);
    return index !== -1;
  }

  public change(oldItem: T, newItem: T): void {
    const index = this.items.indexOf(oldItem);
    if (index !== -1) {
      this.items[index] = newItem;
    }
  }

  public get length(): number {
    return this.items.length;
  }
}

const newList = new List<string>();

newList.add('apple');
newList.add('banana');
newList.add('orange');

console.log(newList.search('banana')); // true
console.log(newList.search('pear')); // false

newList.remove('banana');
console.log(newList.search('banana')); // false

newList.change('apple', 'pineapple');
console.log(newList.search('apple')); // false
console.log(newList.search('pineapple')); // true

console.log(newList.length); // 2