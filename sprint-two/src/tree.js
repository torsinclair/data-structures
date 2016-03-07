var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  this.children.push(Tree(value));

};

treeMethods.contains = function(target) {
  if(this.value === target){
    return true;
  } 
    
  for (var i = 0; i < this.children.length; i++){
    if(this.children[i].contains(target)){
      return true;

    }
  }
  

  return false;

};



/*
 * Complexity: What is the time complexity of the above functions?
 * treeMethods.addChild = O(1) = Constant: Pushing to the end of array is contant
 * treeMethods.contains = O(n) = Linear: Worst case, may need to step through array
 */

// contains - O(n)
// addChild - O(1) - because it is pushing onto the very end of the array
