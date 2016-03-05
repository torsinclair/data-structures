

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  
  var valArr = this._storage.get(index);  //this.retrieve(key);
  var found = false;

  if (valArr === undefined) {
    this._storage.set(index, [[key, value]]);
  } else {
    //search valArr for value
    for (var i = 0; i < valArr.length; i++) {
      if (valArr[i][0] === key) {
        valArr[i][1] = value;
        found = true;
      }
    }

    if (!found) {
      valArr.push([key, value]);
    }

    this._storage.set(index, valArr);

    valArr.push(value); 
  }
  
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var valArr = this._storage.get(index);

  if (!valArr) {
    return;
  }

  var value;

  for (var i = 0; i < valArr.length; i++) {
    if (valArr[i][0] === key) {
      value = valArr[i][1];
    }
  }
  
  return value;
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


