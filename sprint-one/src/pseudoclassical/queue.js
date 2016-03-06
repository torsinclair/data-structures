var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.items = 0;

Queue.prototype.size = function(){
  return this.items;
};

Queue.prototype.enqueue = function(value){
  this.items++;
  this[this.items] = value;
};

Queue.prototype.dequeue = function(){
  if(this.items !== 0){
    var val = this['1'];
    delete this['1'];
    this.items--;

    _.reduce(this, function(acc, value, key){
      acc = this[key-1] = value;
    },this);
  return val;
  }
};


