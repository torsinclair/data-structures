var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var items = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[items] = value;
    items++;
  };

  someInstance.dequeue = function() {
    var value = storage[0];
    delete storage[0];
    items = Math.max(0, --items);

    _.reduce(storage, function(acc, item, key){
      acc[key-1] = item;
    }, storage);

    return value;
  };

  someInstance.size = function() {
    return items;
  };

  return someInstance;

};