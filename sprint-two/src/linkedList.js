var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create a Node object with the passed in value argument

    //
    var newNode = Node(value);

    // if head is null,this is a new list, we must add it
    if(list.head === null){
      list.head = newNode;

    }else{
      
      //set tail.next to currentNode
      list.tail.next = newNode;
    }
    
    list.tail = newNode;

  };

  list.removeHead = function() {
    var node = list.head;

    list.head = list.head.next;

    return node.value;

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
