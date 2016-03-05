var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
   
  _.extend(newTree, treeMethods);
  
  newTree.children = [];  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = new Tree(value);

  this.children.push(tree);
};

treeMethods.contains = function(target) {
  
  var doesContain = false;
  //search children  
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      // doesContain = true;
      return true; //break;
    } else {
      // console.log()
      doesContain = this.children[i].contains(target);
      if (doesContain) { 
        break;
      }
    }
  }

  return doesContain;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// contains - O(n)
// addChild - O(1) - because it is pushing onto the very end of the array
