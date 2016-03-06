var DoubleLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create a Node object with the passed in value argument  
    var newNode = Node(value);

    // if head is null,this is a new list, we must add it
    if (list.head === null) {
      list.head = newNode;
    } else {
      // list already contains nodes
      // set newNode's previous to the current tail
      newNode.previous = list.tail;

      // set tail.next to currentNode
      list.tail.next = newNode;
    }
    
    list.tail = newNode;

  };

  list.removeHead = function() {
    var node = list.head;

    list.head = list.head.next;

    // remove the new head's previous value
    list.head.previous = null;

    return node.value;

  };

  list.contains = function(target) {
    // iterate over list 

    var node = list.head;
    var found = false;

    //if there is only 1 node in the list
    if (list.head === list.tail) {
      found = target === list.head.value;
    } else {
      do {
        // test for node.value === target
        if (target === node.value) {
          found = true;
          break;
        } else {
          node = node.next;
        }
      } while (node);
    
    }

    return found;

  },

  list.addToHead = function(value) {
    // takes a value and adds it to the front of the list
    
    //create a new Node
    var newNode = Node(value);

    //set new node's next to current head
    newNode.next = this.head;

    //set current head's previous value to new node
    this.head.previous = newNode;

    //set head to new node
    this.head = newNode;

  },

  list.removeTail = function() {
    // removes the tail of the list and returns its value

    //save reference to the new tail
    var newTail = this.tail.previous;
    
    // set tail's previous' next to null
    this.tail.previous.next = null;

    this.tail = newTail;

  };

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


 // addToTail - O(1)
 // removeHead - O(1)
 // contains - O(n)

