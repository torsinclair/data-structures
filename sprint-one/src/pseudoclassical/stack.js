var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

};

Stack.prototype.storage = {};
Stack.prototype.items = 0;

Stack.prototype.size = function(){
  return this.items;
};

Stack.prototype.push = function(value){
  this.items++;
  this.storage[this.items] = value;

};

Stack.prototype.pop = function(){
  if(this.items !== 0){
    var val = this.storage[this.items];
    delete this.storage[this.items];
    this.items--;
    return val;
  }

};


