/*
What is a LinkedList ?
- Linked List is pretty much exactly what it sounds like. 
Its a list of elements called NODES that are connected together / liked together.
- There are 2 types of LinkedList:
  1. Singly Linked list
  2. Doubly Linked List

What is Singly Linked List ?
- Here, each node only has a reference to the node after it i.e. Next Node.

What is Doubly Linked List ?
- Here, each node has a reference to the next node but it also has a reference to the node before it i.e. Previous Node.

NOTE:
- A Linked List itself as a whole only needs to know about 2 nodes in the entire list to function correctly.
- Those 2 nodes are Head node and Tail node.
- It keeps a reference to these nodes by 2 pointers called head pointer and tail pointer
- 
*/
console.clear();

// LinkedList constructor function
function LinkedList() {

  this.head = null;
  this.tail = null;
}

// node constructor function
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

/*
Add to head Algo:
- Create new Node and put it right at the beginning
- Link it with proper next and prev properties
- Finally, update the head pointer pointing to new node
*/
LinkedList.prototype.addToHead = function (value) {

  // this.head is the curent node, so updating it as next of our newNode
  // setting null as prev bcz first node doesn't have any prev Node
  let newNode = new Node(value, this.head, null);


  if (this.head) {
    // case 1 : LinkList is not empty
    this.head.prev = newNode;

  } else {
    // case 2 : LinkList is empty. No node is present
    this.tail = newNode;

  }
  // updating head pointer to newNode - in both cases
  this.head = newNode;

}

// LinkedList size
LinkedList.prototype.size = function () {
  if (!this.head) return 0;
  var size = 0;
  var pointer = this.head;
  while (pointer) {
    size++;
    pointer = pointer.next;
  }
  return size;
}

/* Logic to find middle with below illustration 
    a    b    c    d    e    f    g     null
12
    1    2
         1         2
              1               2
                    1                   2
*/
// LinkedList find middle
LinkedList.prototype.findMiddle = function () {
  if (!this.head) return "Linked List is empty";

  var pointer1 = this.head;
  var pointer2 = this.head.next;

  while (pointer2) {

    pointer1 = pointer1.next;
    if (pointer2.next) {
      pointer2 = pointer2.next.next;
    }

  }
  return pointer1;
}

LinkedList.prototype.reverse = function (head) {
  if (head) {
    this.reverse(head.next);
    console.log(head.value);
  }

}

function reverseDoublyLL(dll) {
  var head = dll.head,
    current = dll.head,
    tmp;
  while (current) {
    tmp = current.next;
    current.next = current.prev;
    current.prev = tmp;
    if (!tmp) {
      //set the last node as header
      dll.head = current;
    }
    current = tmp;
  }
  return dll;
}

// null 1 2 3 4 5 null
var LL = new LinkedList();
LL.addToHead(5);
LL.addToHead(4);
LL.addToHead(3);
LL.addToHead(2);
LL.addToHead(1);

var length = LL.size();
console.log(LL);
console.log(length);

var mid = LL.findMiddle();
console.log(mid);

console.log(LL.reverse(LL.head));

console.log(reverseDoublyLL(LL));