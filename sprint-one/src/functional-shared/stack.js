


var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.items = 0;
  someInstance.size = size;
  someInstance.push = push;



  return someInstance;

};

var size = function() {
  return this.items;
};

var push = function(value) {

  this.items++;
  //return this.items = value;

};


  // var pop = function() {
  //   var val = storage[items];
  //   delete storage[items];
  //   items = Math.max(0, --items);
  //   return val;

  // };

// var stackMethods = {};

// var Stack = function() {
//   var someInstance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};
//   var items = 0;


  // Implement the methods below



