var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var items = 0;


  // Implement the methods below
  someInstance.push = function(value) {

    items++;
    return storage[items] = value;

  };

  someInstance.pop = function() {
    var val = storage[items];
    delete storage[items];
    items = Math.max(0, --items);
    return val;

  };

  someInstance.size = function() {
    return items;
  };

  return someInstance;
};
