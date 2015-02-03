# Doubly Linked List Lab??
## Reading Up


We don't really want to do too much with linked lists on this first day, and we will get more into the implementation in the following days. Let's review the applications of a linked lists: queue and stack.

## Exercises

1.) Let's implement a naive `Queue` class using an `Array` instead of a linked list.
  * You'll need a `Queue` class
    * You'll need a `list` attribute for each new `Queue` that will just be an `Array`.
    * You'll need two methods `push` and `pop`
  * Write you solution in the `naive_queue.rb` file.
2.) Let's implement a naive `Stack` class using an `Array` instead of a linked list.
  * You'll need a `Stack` class
    * You'll need a `list` attribute for each new `Stack` that will just be an `Array`.
    * You'll need two methods `push` and `pop`
  * Write you solution in the `naive_stack.rb` file.
3.) Let's rewrite our `Queue` using JavaScript. 
  * You'll need a `Queue` constructor function
    * You'll need a `list` hasOwnProperty for each new `Queue` that will just be a new `Array`.
    * You'll need two prototype methods `push` and `pop`
  * Write you solution in the `naive_queue.js` file.
4.) Let's rewrite our `Stack` using JavaScript. 
  * You'll need a `Stack` constructor
    * You'll need a `list` hasOwnProperty for each new `Stack` that will just be an `Array`.
    * You'll need two methods `push` and `pop` prototype properties.
  * Write you solution in the `naive_stack.js` file.

## Playing With Stacks!


* Let's print comments on comments using the function stack

```
    post_results = {post: "www.reddit.com",
                    title: "sharing links",
                    comments: [
                        {name: "Jane doe",
                        comment: "just like this site"}, 
                        {name: "John doe",
                        comment: "Yeah, soo fun",
                        comments: [
                            {name: "Bob doe",
                            comment: "agreed! cannot stop clicking!"},
                            {name: "Kelly doe",
                            comment: "carpel tunnel cannot from clicking!"},
                            {name: "Chris doe",
                            comment: "Is it better though?",
                            comments: [
                                {name: "Jane doe",
                                comment: "yes, it is."} 
                            ]
                            }
                        ]
                        },
                        {name: "Peter doe",
                        comment: "lame!",
                        comments: [
                            {name: "Sam doe",
                            comment: "hater's gonna hate"}
                        ]
                        }

                    ]}

def print_comments(comments)
  comments.each do |comment|
    puts comment[:comment]
    if comment[:comments]
      print_comments(comment[:comments])
    end
  end
end

print_comments(post_results[:comments])

```
