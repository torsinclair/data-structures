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
  
  //search current node for target
  var doesContain = false;
  //search children  
  for(var i = 0; i < this.children.length; i++){
    if (this.children[i].value === target){
      doesContain = true;
    }  
  }

  return doesContain;
};



/*var Node = function(value) {
  var node = {};

  node.value = value;
  //node.next = null;

  return node;
};
*/


/*
 * Complexity: What is the time complexity of the above functions?
 */
