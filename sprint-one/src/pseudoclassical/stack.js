var Stack = function() {
  
   this.items = 0;

};


Stack.prototype.size = function() {
  return this.items;
};

Stack.prototype.push = function(val) {
  this.items++;
  this[this.items] = val;
};

Stack.prototype.pop = function() {
  var val = this[this.items];
  delete this[this.items];
  this.items = Math.max(0, --this.items);

  return val;
};


