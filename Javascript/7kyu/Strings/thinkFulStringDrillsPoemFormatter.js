/**You have a collection of lovely poems. Unfortunately, they aren't formatted very well. They're all on one line, like this:

Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.
What you want is to present each sentence on a new line, so that it looks like this:

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Write a function, format_poem() that takes a string like the one line example as an argument and returns a new string that is formatted across multiple lines with each new sentence starting on a new line when you print it out.

Try to solve this challenge with the str.split() and the str.join() string methods.

Every sentence will end with a period, and every new sentence will have one space before the previous period. Be careful about trailing whitespace in your solution. */


const formatPoem = (poem) => { 
    let poemSplited = poem.split(". ")
    for(let i = 0; i < poemSplited.length - 1; i++) {
      poemSplited[i] = `${poemSplited[i]}.\n`
    }
    return poemSplited.join("")
  }
  
  /*
  params: we reiceve "poem" as a string of words representinga poem.
  return: we must return a string formatted as a poem with its line break on every sentence.
  example:
  
  Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated. 
  
  ↓
  
  Beautiful is better than ugly.
  Explicit is better than implicit.
  Simple is better than complex.
  Complex is better than complicated.
  
  pseudocode:
  -We first split(". ") "poem" into array "poemSplited".
  -We make a for loop and iterated through elements while i < poemSplited.length - 1, cause we don't want to add \n to the end line
  -We add .\n to every line except the last one.
  -We then return the array joined with join(". \n"))
  */