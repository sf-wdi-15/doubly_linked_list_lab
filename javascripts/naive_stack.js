// Write the constructor
function Stack() {
  // a list attribute
  this.list = [];
} 

Stack.prototype.push = function(val){
  // push a val into the back of the list
  this.list.push(val);
  // return this
  return this;
};

Stack.prototype.pop = function(){
  // remove a val from the back of the list
  return this.list.pop();
};