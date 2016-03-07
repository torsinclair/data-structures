
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // declare and initialize an empty object
  var someInstance = {};

  _.extend(someInstance, stackMethods);


  return someInstance;  
};

  var someInstance = {};
  someInstance.items = 0;
  _.extend(someInstance, stackMethods);

  return someInstance;
}

var stackMethods = {
  size : function() {
    return this.items;
  },

  push : function(value) {

stackMethods.items = 0;

stackMethods.size = function(){
  return this.items;
}

stackMethods.push = function(value){
  this.items++;
  stackMethods[this.items] = value;
}

stackMethods.pop = function(){
  if(this.items !== 0){
    value = stackMethods[this.items];
    delete stackMethods[this.items];
    this.items--;
    return value;
  }
}

    this.items++;
    return this[this.items] = value;

  },

  pop : function() {
    var val = this[this.items];
    delete this[this.items];
    this.items = Math.max(0, --this.items);
    return val;
  }
  
};
