var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.items = 0;
  
  return someInstance;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.items;
};

stackMethods.push = function(value) {
  this.items++;
  this[this.items] = value;
};

stackMethods.pop = function() {
  var value = this[this.items];
  delete this[this.items];
  this.items = Math.max(0, --this.items);    
  return value; 
};


