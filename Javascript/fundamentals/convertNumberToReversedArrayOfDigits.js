//Convert number to reversed array of digits
/*

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]

*/

//Arrow function 

const digitize = n => n.toString().split('').reverse().map(Number)

//We gonna receive n as a Number data type, so we convert it to a String then we split it into an array (of strings numbers) which we reverse to finally transform them into Numbers again.