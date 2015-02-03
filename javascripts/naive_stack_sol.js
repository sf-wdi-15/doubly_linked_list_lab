// Write the constructor
function Queue() {
  // a list attribute
  this.list = [];
} 

Queue.prototype.push = function(val){
  // push a val into the back of the list
  this.list.push(val);
  return this;
};

Queue.prototype.pop = function(){
  // remove a val from the front of the list
  return this.list.pop()
};