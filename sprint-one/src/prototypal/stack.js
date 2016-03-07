var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);


  return someInstance;
};

var stackMethods = {};

stackMethods.items = 0;

stackMethods.size = function(){
  return this.items;
};

stackMethods.push = function(value){
  this.items++;
  stackMethods[this.items] = value;
};

stackMethods.pop = function(){
  if(this.items !== 0){
    var val = stackMethods[this.items];
    delete stackMethods[this.items];
    this.items--;
    return val;
  }
};

