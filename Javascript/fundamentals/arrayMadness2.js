/*

Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
Get your timer out. Are you ready? Ready, get set, GO!!!

PREP:
-PARAMETERS: we have "a" and "b" both as array of integers.
-RETURN: true if the sum of the squares of "a" elements is greater than the sum of the cubes of "b"
-EXAMPLE: arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
*/


const arrayMadness = (a,b) => a.reduce((acc, ele) => acc + Math.pow(ele, 2), 0) > b.reduce((acc, ele) => acc + Math.pow(ele, 3), 0) ? true : false
