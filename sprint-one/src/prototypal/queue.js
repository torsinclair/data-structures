var Queue = function() {
   var someInstance = Object.create(queueMethods);
  
   someInstance.items = 0;

   return someInstance;

};

var queueMethods = {
  size: function() {
    return this.items;
  },

  enqueue: function(value) {
    this[this.items] = value;
    this.items++;
  },
  dequeue: function() {

    var val = this[0];
    delete this[0];

    this.items = Math.max(0, --this.items);
    
    _.reduce(this, function(acc, item, key){
      var num = parseInt(key);
      if(num === num){
        var ind = key-1;
        acc[ind] = item;
      }
    },this);

    if(this[this.items+1] !== undefined) {

      delete this[this.items+1];  
    }
    
    return val;
  }

};


