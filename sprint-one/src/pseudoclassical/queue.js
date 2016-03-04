var Queue = function() {
  this.items = 0;
};

Queue.prototype.size = function() {
  return this.items;
};

Queue.prototype.enqueue = function(value) {
  this[this.items] = value;
  this.items++;
};

Queue.prototype.dequeue = function() {
  var value = this[0];
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

  return value;

};




