// Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

// When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

// nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
// nextItem("testing", "t") # "e"


//PREP:
// PARAMETERS: we receive "xs" as a parameter that can be a string of letters or words or even numbers. And "item" its another parameter that try to mark us a part of the sequence from the first parameter.
// RETURN: we must return the item that instantly follows "item" from "xs" sequence. If nothing follows, return undefined.
// EXAMPLE: 
// ([1, 2, 3, 4, 5, 6, 7, 8], 5), 6) 
// (['a', 'b', 'c'], 'd'), undefined)
// (['a', 'b', 'c'], 'c'), undefined)

function nextItem(xs, item) {
    array = xs[Symbol.iterator]()
    for(let element of array) 
      if(element == item)
        return array.next().value
  }