var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // are we initializing an empty container?
    if(list.head === null){
      // Yes
      list.head = Node(value);
      list.tail = list.head;
    }else{
      // No, there are objects
        // OK, what happens then?
          // nest the new object in the current tail
          list.tail.next = Node(value);
          list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var oldHead = list.head.value;
    list.head = list.head.next;

    return oldHead;

  };

  list.contains = function(target) {

    var node = list.head;

    while(node){
      if (node.value === target){
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail() = Constant, same action irrespective of the list size
 * removeHead() = Constant, same action irrespective of the list size
 * contains() = Linear, in worst case, must step through each node

 */


