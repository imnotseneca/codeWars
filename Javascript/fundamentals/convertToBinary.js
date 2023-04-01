/**
 * 
 * Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

to_binary(1)  /* should return 1 
to_binary(5)  /* should return 101 
to_binary(11) /* should return 1011 
Example:

toBinary(1)  /* should return 1 
toBinary(5)  /* should return 101 
toBinary(11) /* should return 1011 

 */



//PREP
//PARAMETERS: we receive "n" as a non-negative integer.
//RETURN: we must return "n" converted to binary
/*EXAMPLE:
to_binary(1)  /should return 1 
to_binary(5)  /should return 101 
to_binary(11) /should return 1011 
*/

const toBinary = n => Number(n.toString(2));

//We use the 2 "radix" on the .toString() method to define we trying to reach binary numbers.