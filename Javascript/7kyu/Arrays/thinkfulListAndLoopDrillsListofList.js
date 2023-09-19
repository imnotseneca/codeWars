/**You have a two-dimensional list in the following format:

data = [[2, 5], [3, 4], [8, 7]]
Each sub-list contains two items, and each item in the sub-lists is an integer.

Write a function process_data()/processData() that processes each sub-list like so:

[2, 5] --> 2 - 5 --> -3
[3, 4] --> 3 - 4 --> -1
[8, 7] --> 8 - 7 --> 1
and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.

For input, you can trust that neither the main list nor the sublists will be empty. */

function processData(data){
    return data.reduce((acc, curr) => (curr[0] - curr[1]) * acc, 1)
  }
  
  /*
  params: data is an input array with nested arrays that holds number integers.
  return: we must return a number integer that represent the product of all the processed elements from "data".
  example:
  processData([[2, 5], [3, 4], [8, 7]]), 3, `For [[2, 5], [3, 4], [8, 7]]`);
  processData([[2, 9], [2, 4], [7, 5]]), 28, `For [[2, 9], [2, 4], [7, 5]]`);
  pseudocode:
  -We declare "finalResult" as variable that will hold the final value and it's initialized as 0.
  -We then iterate over data and get the elements on it.
  -We substract the elements and add them to finalResult multplying over each of them.
  -We return finalResult
  */