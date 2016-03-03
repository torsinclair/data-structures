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

Stack.prototype.pop = function() {
  this.items = Math.max(0, --this.items);     
};

var stackMethods = {};

