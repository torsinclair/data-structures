

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = Node(node);
  this.nodes.push(newNode);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
   
  return _.reduce(this.nodes, function(accum, item) {
    if (!accum && item.value === node) {
      accum = true;
    }
    return accum;
  }, false);

};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    // look for if this node equals the one passed in
    if (this.nodes[i].value === node) {
      // delete this node from all of its edges

      var tmpArray = this.nodes[i].edges.slice();

      for (var j = 0; j < tmpArray.length; j++) {
        // loop through edges and delete this node
        this.removeEdge(node, tmpArray[j]);
      }
      //remove this node from nodes array
      this.nodes.splice(i, 1);
      break;
    }
  }  
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var isTrue = false;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode || this.nodes[i].value === toNode) {
      if (this.nodes[i].value === fromNode) {
        if (this.nodes[i].edges.indexOf(toNode) >= 0) {
          isTrue = true;
          break;
        }
      } else {
        if (this.nodes[i].edges.indexOf(fromNode) >= 0) {
          isTrue = true;
          break;
        }
      }
    }
  }
  return isTrue;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  //find fromNode

  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode || this.nodes[i].value === toNode) {
      if (this.nodes[i].value === fromNode) {
        this.nodes[i].edges.push(toNode);
      } else {
        this.nodes[i].edges.push(fromNode);
      }
    }
  }

};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode || this.nodes[i].value === toNode) {
      if (this.nodes[i].value === fromNode) {
        var loc = this.nodes[i].edges.indexOf(toNode);
        if (loc >= 0) {
          this.nodes[i].edges.splice(loc, 1);
        }
      } else {
        var loc = this.nodes[i].edges.indexOf(fromNode);
        if (loc >= 0) {
          this.nodes[i].edges.splice(loc, 1);
        }
      }
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function(element) {
    cb(element.value);
  });
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.edges = []; // array of Node.values
  return node;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 // contains  - O(n)
 // removeNode - O(n^4) - ouch
 // hasEdge - O(n^2)
 // addEdge - O(n)
 // removeEdge - O(n^2)
 // forEachNode - O(n) depending on what the callback function does


