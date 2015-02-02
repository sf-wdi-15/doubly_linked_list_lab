### Write the class
class Stack

  def initialize
    # start new list, i.e. the array
    @list = []
  end

  def push(val)
    # push val to back
    #   of list
    @list.push(val)
  end

  def pop
    # return a val at the
    #   front of the list
    @list.pop
  end

end