//PREP:
//PARAMETERS: we have an "array" thats filled with positive integers. And a non negative number "n".
//RETURN: we must return a number that is the result of doing "N" (that marks the index of an element from the array) power by the element number
//EXAMPLES: array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
//PSEUDOCODE: we need to iterate through the array

const index = (array,n) => array[n] === undefined ? -1 : Math.pow(array.find(e => e === array[n]), n)

//The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
//So in this case we mark every element in the array as "e" and check if e is equal to array[n] .