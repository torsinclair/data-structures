var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var items = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    items++;
    storage[items] = value;
  };

  someInstance.pop = function() {
    if(items > 0){
      delete storage[items];
      items--;
    }
    
  };

  someInstance.size = function() {
    return items;
  };

  return someInstance;
};

