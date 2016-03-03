var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {items: 0};
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

    if(this[this.items+1] !== undefined) {

      delete this[this.items+1];  
    }
    
    return value;
  }
};