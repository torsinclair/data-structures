var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  return someInstance;
};

var queueMethods = {};
queueMethods.items = 0;

queueMethods.size = function(){
  return this.items;

};

queueMethods.enqueue = function(value){
  this.items++;
  queueMethods[this.items] = value;
};

queueMethods.dequeue = function(){
  if (this.items !== 0){
    var val = queueMethods['1'];
    delete queueMethods['1'];
    this.items--;

    _.reduce(queueMethods, function(acc, item, key){
      acc = queueMethods[key-1] = item;
    },queueMethods);

    return val;
  }
};

