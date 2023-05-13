class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Добавляем новый узел в конец списка
  add(value) {
    const newNode = { value, prev: null, next: null };
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Remove the first node with the given value from the list, Удаляем первый узел с заданным значением 
  remove(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        if (currentNode === this.head) {
          this.head = this.head.next;
          if (this.head !== null) {
            this.head.prev = null;
          }
        } else if (currentNode === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
        }
        this.length--;
        break;
      }
      currentNode = currentNode.next;
    }
  }

  // Search for the first node with the given value in the list
  search(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  // Change the value of the first node with the given value in the list
  change(oldValue, newValue) {
    const nodeToChange = this.search(oldValue);
    if (nodeToChange !== null) {
      nodeToChange.value = newValue;
    }
  }

  // Get the length of the list
  getLength() {
    return this.length;
  }

  // Insert a new node with the given value after the first node in the list with the given afterValue
  insertAfter(value, afterValue) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === afterValue) {
        const newNode = { value, prev: currentNode, next: currentNode.next };
        if (currentNode === this.tail) {
          this.tail = newNode;
        } else {
          currentNode.next.prev = newNode;
        }
        currentNode.next = newNode;
        this.length++;
        break;
      }
      currentNode = currentNode.next;
    }
  }

  // Add a new node with the given value to the start of the list
  addFirst(value) {
    const newNode = { value, prev: null, next: this.head };
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }
}

const list = new DoublyLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.addFirst(0);
console.log(list.getLength()); // Output: 3
list.insertAfter(4, 2);
console.log(list.getLength()); // Output: 4
console.log(list.search(2)); // Output: Object with value of 2, prev and next properties
list.change(2, 4);
console.log(list.search(4)); // Output: Object with value of 4, prev and next properties
list.remove(3);
console.log(list.getLength()); // Output: 2


// A doubly linked list is a data structure that consists of a sequence of nodes, where each node stores a value and has a reference to the previous and next nodes in the sequence. The DoublyLinkedList class maintains a reference to the head and tail nodes of the list, as well as the number of nodes in the list (length).

// Here's a brief explanation of each method in the DoublyLinkedList class:

// add(value): This method adds a new node to the end of the list. It creates a new node object with the given value, sets its prev reference to the current tail node (if there is one), sets the current tail node's next reference to the new node, and updates the tail reference to point to the new node. If the list is empty, the new node becomes both the head and tail of the list. The length of the list is incremented by 1.

// remove(value): This method removes the first node in the list with the given value. It traverses the list from the head node, checking each node's value until it finds a node with the given value. If the node is the head node, it updates the head reference to point to the next node (if there is one) and updates the new head node's prev reference to null. If the node is the tail node, it updates the tail reference to point to the previous node and updates the new tail node's next reference to null. If the node is neither the head nor tail node, it updates the previous node's next reference to point to the next node, and the next node's prev reference to point to the previous node. The length of the list is decremented by 1.

// search(value): This method searches for the first node in the list with the given value. It traverses the list from the head node, checking each node's value until it finds a node with the given value. If it finds the node, it returns the node object; otherwise, it returns null.

// change(oldValue, newValue): This method changes the value of the first node in the list with the given old value to the new value. It calls the search method to find the node with the old value. If it finds the node, it updates its value property to the new value.

// getLength(): This method returns the length of the list (i.e., the number of nodes in the list).

// To add a node to the middle of a doubly linked list, you would need to traverse the list to find the node where you want to insert the new node, and then update the prev and next references of the adjacent nodes to point to the new node.

// Here's an example of how you could modify the DoublyLinkedList class to add a new method called insertAfter(value, afterValue) that inserts a new node with the given value after the first node in the list with the given afterValue

// The insertAfter method takes two arguments: value, which is the value of the new node to be inserted, and afterValue, which is the value of the node after which the new node should be inserted. The method traverses the list from the head node, checking each node's value until it finds a node with the given afterValue. If it finds the node, it creates a new node object with the given value, and updates the prev and next references of the adjacent nodes to point to the new node. The length of the list is incremented by 1.