### Write the class
class Queue

  def initialize
    # begin with a new array
    @queue = []
  end

  def push(val)
    # push val to back
    #   of list
   @queue.push(val)
    # return self
    self
  end

  def pop
    # return a val at the
    #   front of the list
    @queue.shift
  end

end