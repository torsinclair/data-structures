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


