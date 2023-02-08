/*

Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

*/


//PREP:
//PARAMETERS: we get "number" as a positive integer.
//Return: we must return a string that shows the multiplication table of "number" and the result.
//EXAMPLE: if number === 5 then 
/*
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
*/

const multiTable = number => {
    let arr = [1,2,3,4,5,6,7,8,9,10]
    return arr.map((_,i) => `${i + 1} * ${number} = ${(i + 1) * number}`).join('\n')
  
}


const multiTable = number => [...Array(10)].map((_,i) => `${i+1} * ${number} = ${(i+1) * number}`).join('\n')