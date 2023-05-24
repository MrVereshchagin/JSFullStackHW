// Make class of double linked list in TS
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.tail = null;
        this._length = 0;
    }
    DoublyLinkedList.prototype.append = function (value) {
        var newNode = { value: value, prev: this.tail, next: null };
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this._length++;
    };
    DoublyLinkedList.prototype.prepend = function (value) {
        var newNode = { value: value, prev: null, next: this.head };
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            this.head = newNode;
        }
        this._length++;
    };
    DoublyLinkedList.prototype.search = function (value) {
        var currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    };
    DoublyLinkedList.prototype.remove = function (value) {
        var currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                if (currentNode === this.head && currentNode === this.tail) {
                    this.head = null;
                    this.tail = null;
                }
                else if (currentNode === this.head) {
                    this.head = this.head.next;
                    if (this.head)
                        this.head.prev = null;
                }
                else if (currentNode === this.tail) {
                    this.tail = this.tail.prev;
                    if (this.tail)
                        this.tail.next = null;
                }
                else {
                    var prevNode = currentNode.prev;
                    var nextNode = currentNode.next;
                    if (prevNode)
                        prevNode.next = nextNode;
                    if (nextNode)
                        nextNode.prev = prevNode;
                }
                this._length--;
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    };
    DoublyLinkedList.prototype.change = function (oldValue, newValue) {
        var currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === oldValue) {
                currentNode.value = newValue;
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    };
    Object.defineProperty(DoublyLinkedList.prototype, "length", {
        get: function () {
            return this._length;
        },
        enumerable: false,
        configurable: true
    });
    return DoublyLinkedList;
}());
var myList = new DoublyLinkedList();
console.log(myList.length); // 0
myList.append(1);
myList.append(2);
myList.append(3);
console.log(myList.length); // 3
myList.prepend(0);
console.log(myList.length); // 4
var node1 = myList.search(2);
if (node1) {
    console.log(node1.value); // 2
    myList.remove(2);
    console.log(myList.length); // 3
}
var node2 = myList.search(4);
console.log(node2); // null
var success = myList.change(3, 4);
console.log(success); // true
var failure = myList.change(5, 6);
console.log(failure); // false
myList.append(5);
console.log(myList.length); // 4
myList.remove(0);
console.log(myList.length); // 3
myList.prepend(-1);
console.log(myList.length); // 4
var node3 = myList.search(5);
if (node3) {
    console.log(node3.value); // 5
    myList.remove(5);
    console.log(myList.length); // 3
}
var node4 = myList.search(-1);
if (node4) {
    console.log(node4.value); // -1
    myList.remove(-1);
    console.log(myList.length); // 2
}
// Make class of list in TS
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (item) {
        this.items.push(item);
    };
    List.prototype.remove = function (item) {
        var index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
    List.prototype.search = function (item) {
        var index = this.items.indexOf(item);
        return index !== -1;
    };
    List.prototype.change = function (oldItem, newItem) {
        var index = this.items.indexOf(oldItem);
        if (index !== -1) {
            this.items[index] = newItem;
        }
    };
    Object.defineProperty(List.prototype, "length", {
        get: function () {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    return List;
}());
var newList = new List();
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
