// Write the constructor
function Queue() {
  // a list attribute
  var queue = [];
} 

Queue.prototype.push = function(val){
  // push a val into the back of the list
  this.queue.push(val);
  // return this
  return this;
};

Queue.prototype.pop = function(){
  // remove a val from the front of the list
  return this.queue.shift();
};

