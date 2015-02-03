### First In First Out
### Write the class
class Stack

  def initialize
    # start new list, i.e. the array
    @stack = []
  end

  def push(val)
    # push val to back
    #   of list
    @stack.push(val)
  end

  def pop
    # return a val at the
    #   back of the list
    @stack.pop
  end

end