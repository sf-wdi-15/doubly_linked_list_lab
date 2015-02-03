// Write the constructor
function Stack() {
  // a list attribute
  this.stack = [];
} 

Stack.prototype.push = function(val){
  // push a val into the back of the list
  this.stack.push(val);
  // return this
  return this;
};

Stack.prototype.pop = function(){
  // remove a val from the back of the list
  this.stack.pop();

};