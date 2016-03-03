var Stack = function() {
  
   this.items = 0;

};


Stack.prototype.size = function() {
  return this.items;
};

Stack.prototype.push = function(val) {
  //this[this.items] = val;
  this.items++;
};

Stack.prototype.pop = function() {
  items = Math.max(0, --this.items);
};


