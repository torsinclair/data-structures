var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var items = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    items++;
    storage[items] = value;
  };

  someInstance.dequeue = function() {
    if(items !== 0){
    var val = storage[1];
    delete storage[1];  
    items--;

    _.reduce(storage, function(acc, item, key){
      acc[key-1] = item;
    }, storage);

    return val;
    }  
  };

  someInstance.size = function() {
    return items;
  };

  return someInstance;
};
