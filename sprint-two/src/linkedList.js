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
    if(list.head !== null){
      var oldHead = list.head;
      delete list.head;
      list.head = list.head.next;
    }
  };

  list.contains = function(target) {
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
 */
