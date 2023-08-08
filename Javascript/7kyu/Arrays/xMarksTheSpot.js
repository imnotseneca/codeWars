/**
 * Task:
Given a two dimensional array, return the co-ordinates of x.

If x is not inside the array, or if x appears multiple times, return [].

The co-ordinates should be zero indexed in row-major order.
You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

Examples
Input: []
Return an empty array if input is an empty array => []

Input: [
  ['o', 'o'],
  ['o', 'o']
]
Return an empty array if no x found => []

Input: [
  ['x', 'o'],
  ['o', 'x']
]
Return an empty array if more than one x found => []

Input: [
  ['x', 'o'],
  ['o', 'o']
]
Return [0,0] when x at top left => [0, 0]

Input: [
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
]
Return [4,6] for the example above => [4, 6]
 */

const xMarksTheSpot = (input) => {
    let counter = 0;
    let newArr = []
    for(let i = 0; i <input.length;i++) {
      for(let j = 0; j < input[i].length; j++)
      if(input[i][j] === 'x') {
        ++counter
        newArr.push(i)
        newArr.push(j)
      }
    }
    return counter === 0 || counter > 1 ? [] : newArr
  }
  
  //prep:
  //params: we receive "input" as an array of arrays with strings.
  //return: we must return an array that matches the coordenates of the "x". If !x or x appears multiple times we return an []
  //example:
  /*
  Input: [
    ['x', 'o'],
    ['o', 'o']
  ]
  Return [0,0] when x at top left => [0, 0]
  
  Input: [
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
  ]
  Return [4,6] for the example above => [4, 6]
  */
  //pseudocode:
  /*
  -Declare a variable to take count of "x"
  -Declare a newArray to store the coordinates.
  -Iterate over input arr.
  -Iterate over the nested array.
  -Check if element its an "x". If true, ++count and push the indexes to the NewArr.
  -If counter its 0 greater than 1 return [], else return newArr.
  */