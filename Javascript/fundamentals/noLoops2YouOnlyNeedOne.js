// *** No Loops Allowed ***

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.


//PREP:
//Parameters: "a" as an array that could have value of positive integers or strings. "x" can be either.
//Return: true or false if "a" contains "x"
//Example: ([66, 101], 66), true);

const check = (a,x) => a.includes(x) ? true : false