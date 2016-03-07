var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.items = 0;

};

Stack.prototype.size = function(){
  return this.items;
};

Stack.prototype.push = function(value){
  this.items++;
  this[this.items] = value;

};

Stack.prototype.pop = function(){
  if(this.items !== 0){
    var val = this[this.items];
    delete this[this.items];
    this.items--;
    return val;
  }

};



