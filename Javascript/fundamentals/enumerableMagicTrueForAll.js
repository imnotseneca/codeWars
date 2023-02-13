//PREP:
//PARAMETERS: we receive two parameters. One is "arr" which is an array sequence of numbers. the other is "fun" a function that takes 1 paramter and declares if number are greater of less than it.
//RETURN: we must return a boolean value depending on what the "fun" returns.
//EXAMPLE: 
//[1,2,3,4,5], function(v){return v<9}), true
//[1,2,3,4,5], function(v){return v>9}), false

function all( arr, fun ){
 return arr.every(fun)
}

//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.