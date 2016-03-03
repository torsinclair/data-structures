
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.items = 0;
  someInstance.size = size;
  someInstance.push = push;
  someInstance.pop = pop;

};

var size = function(){
	return Math.max(0,this.items);
}

var push = function(value) {

  this.items++;
  return this[this.items] = value;
  
};

var pop = function() {
  var val = this[this.items];
  delete this[this.items];
  this.items = Math.max(0, --this.items);
  return val;
};
