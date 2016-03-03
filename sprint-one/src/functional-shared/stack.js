var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.items = 0;
  someInstance.size = size;
  someInstance.push = push;
  someInstance.pop = pop;

  return someInstance;

};

var size = function(){
	return Math.max(0,this.items);
}

var push = function(){
	this.items = value;
    items++;
}

var pop = function(){
	items--;
    return this.items;
}
