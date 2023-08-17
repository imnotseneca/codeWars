/**Oh no!
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well. */


const toNumberArray = (stringarray) => stringarray.map((number) => +number)
/*
//prep:
//paramters: im receiving "stringarray" as an array filled with string numbers that can be either integers or float.
//return: we need to return an array with "stringarray" elements converted into number datatypes.
//example:
["1", "2", "3"] to [1, 2, 3]
(["1.1","2.2","3.3"]), [1.1,2.2,3.3]);
//pseudocode:
-create a new variable to store the final result named as "numbers" initializated as an empty array.
-iterate through "stringarray" with a for loop.
-convert the element iterated into Number and push it into "numbers"
-return numbers
*/