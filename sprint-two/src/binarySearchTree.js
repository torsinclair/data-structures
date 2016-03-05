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
    //check tree value === value;
    //if true, return
    if (this.value === value) {
      return true;
    }
    //does tree have right value
    if (this.value < value) {
      //does right value !== undefined
      if (this.right !== undefined) {
        //recurse
        return this.right.contains(value);
      } else {
        return false;
      }
    } else {
    //does tree have left value !== undefined
      if (this.left !== undefined) {
        //recurse
        return this.left.contains(value);
      } else {
        return false;
      }
    } 
    
  },
  depthFirstLog: function(callback) {
    // execute callback on value
    callback(this.value);


    // does tree have right value
    if (this.right !== undefined) {
      this.right.depthFirstLog(callback);
    }

    // does tree have a left value
    if (this.left !== undefined) {
      this.left.depthFirstLog(callback);
    }
  }
     
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
