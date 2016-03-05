var BinarySearchTree = function(value) {

  var tree = Object.create(binaryTreeMethods);

  tree.left;
  tree.right;

  return tree;

};

var binaryTreeMethods = {
  insert: function(value) {
  
  },
  contains: function(value) {
    return false;
  },
  depthFirstLog: function(callback) {
    // execute callback on every value in tree
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
