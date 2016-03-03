var Stack = function() {
  var someInstance = {};
  var items = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[items] = value;
    items++;
  };

  someInstance.pop = function() {
    items--;
    return storage[items];
  };

  someInstance.size = function() {
    return Math.max(0,items);
  };

  return someInstance;
};
