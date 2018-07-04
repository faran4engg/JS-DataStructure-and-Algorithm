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
LinkedList.prototype.addToHead = function (value, ) {

  let newNode = new Node(value, this.head, null);
  // this.head is the curent node, so updating it as next of our newNode
  // setting null as prev bcz first node doesn't have any prev Node
}
let LL = new LinkedList();