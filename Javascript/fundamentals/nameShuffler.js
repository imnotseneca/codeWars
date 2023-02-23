/*
Write a function that returns a string in which firstname is swapped with last name.


//PREP:
//PARAMETERS: we receive "str" as a string of words that represents names.
//RETURN: we must return a new string that has the same words as "str" but with inverted positions.
//EXAMPLE: "john McClane" --> "McClane john".


*/

const nameShuffler = str => str.split(' ').reverse().join(' ')


//We convert argument String "str" into an Array separated by spaces, making it with two elements.
//We reverse those elements positions and join them by spaces to return the new string.