var Stack = function() {
  var someInstance = Object.create(Stack.prototype);
  someInstance.items = 0;
  
  return someInstance;
};

Stack.prototype.size = function() {
  return this.items;
};

Stack.prototype.push = function(value) {
   this.items++;
};

var stackMethods = {};

