var BinarySearchTree = function(value) {

  var tree = Object.create(binaryTreeMethods);

  tree.left;
  tree.right;
  tree.value = value;

  return tree;

};

var binaryTreeMethods = {
  insert: function(value) {

    // create new tree object
    var newTree = BinarySearchTree(value);
    // test original value against new tree's value
    // if new value is less
    if (this.value > value) {
      // put new tree in right
      // test if right already exists
      if (this.left) {
       // if it does call insert on child node
        this.left.insert(value);
      } else {
        // it doesn't already exist, set to right
        this.left = newTree;
      }
    } else {
      // if new value is greater than current value
      if (this.right) {
       // if it does exist, call insert on child node
        this.right.insert(value);
      } else {
        // it doesn't already exist, set to right
        this.right = newTree;
      }
    }
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
