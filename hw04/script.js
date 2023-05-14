class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = { value: value, prev: null, next: null };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = { value: value, prev: null, next: null };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  remove(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        if (currentNode === this.head && currentNode === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (currentNode === this.head) {
          this.head = this.head.next;
          this.head.prev = null;
        } else if (currentNode === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          const prevNode = currentNode.prev;
          const nextNode = currentNode.next;
          prevNode.next = nextNode;
          nextNode.prev = prevNode;
        }
        this.length--;
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  change(oldValue, newValue) {
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

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = value;
  }
}

const myList = new DoublyLinkedList();

// Add nodes to the list
myList.append(10);
myList.append(20);
myList.prepend(5);
myList.append(30);

// Search for a node
const searchResult = myList.search(20);
console.log(searchResult); // { value: 20, prev: { value: 10, prev: [Object], next: [Object] }, next: { value: 30, prev: [Object], next: null } }

// Change the value of a node
myList.change(20, 25);
console.log(myList.search(25)); // { value: 25, prev: { value: 10, prev: [Object], next: [Object] }, next: { value: 30, prev: [Object], next: null } }

// Remove a node
myList.remove(10);
console.log(myList.length); // 3
console.log(myList.search(10)); // null
