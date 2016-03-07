var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};

  _.extend(someInstance, queueMethods);

  return someInstance;

};

var queueMethods = {
  size: function(){
    return this.items;
  },
  enqueue: function(value){
    this[this.items] = value;
    this.items++;
  },
  dequeue: function(){
    var value = this[0];

    this.items = Math.max(0, --this.items);
    delete this[0];

    _.reduce(this, function(acc, item, key){
      var num = parseInt(key);
      if(num === num){
        var ind = key-1;
        acc[ind] = item;
      }
    },this);

queueMethods.items = 0;

queueMethods.size = function(){
  return this.items;
}

queueMethods.enqueue = function(value){
  this.items++;
  queueMethods[this.items] = value;
}

queueMethods.dequeue = function(){
  if(this.items !== 0){
    var val = queueMethods[1];
    delete queueMethods[1];
    this.items--;

    _.reduce(queueMethods, function(acc, item, key){
      acc = queueMethods[key-1] = item;
    },queueMethods);

    return val;
  }

}


      delete this[this.items+1];  
    }
    
    return value;
  }
};