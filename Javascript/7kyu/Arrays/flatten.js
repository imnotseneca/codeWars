// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]


const flatten = (array) => array.reduce((curr,prev) => curr.concat(prev),[])


//prep:
//params: "array" that is an array that can hold data types like numbers or strings, and even another Arrays.
//return: we must return the input mutated so we remove one layer of arrays if we have more than one Array.
//examples:
/*
flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/
//pseudocode:
/*
-we reduce "array" and pass two paramters into the function that will be current and prev
-and put an empty array as the initial value.
-we concatenate the previous element with the currents.
*/