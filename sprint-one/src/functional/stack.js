// Functional Patters
// Enclosed Methods
var Stack = function() {
  var someInstance = {};
  var items = 0;

  // Use an object with numeric keys to store values
  var storage = {};
  var items = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    items++;

    storage[items] = value;

  };

  someInstance.pop = function() {
    var val = storage[items];

    if(items > 0){
      delete storage[items];
      items--;
    }

    return val;
  };

  someInstance.size = function() {
    return items;
  };

  return someInstance;
};
