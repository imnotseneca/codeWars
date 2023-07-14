/*

Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

Examples
[1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
[0, 1, 2, 3, 4, 5]                ==>  []

*/

//PREP:
//PARAMTERS: we receive "arr" as an array of tipically INTEGERS but can also have another data type.
//RETURN: we must return a new array that contains only the duplicated elements of "arr" in order of appearance
//EXAMPLE: [1, 2, 3, 4, 5]), [] [1, 2, 3, 4, 3]), [3]
//PSEUDOCODIGO: 
/* 
#We define a function called "duplicates" that takes an array ("arr") as input. Inside the function, we initialize two variables: "seen" and "duplicates".
##"seen" is an empty object that will be used to keep track of the elements we have encountered so far.
##"duplicates" is an empty array where we will store the duplicate elements found in the input array.

#We start a for loop to iterate over each element in "arr".
##Inside the loop, we define two variables: "current" and "type".
##"current" holds the value of the current element we are iterating over.
##"type" is determined using the typeof operator and represents the type of the current element.

#We check if "type" is either 'number' or 'string'.
This is done to exclude elements of other types, such as objects or arrays, which we don't consider as duplicates in this case.
If the current element is a "number" or a "string", we proceed with the duplicate detection logic.
We create a key by concatenating the "type" and "current" value. This ensures that numbers and strings are treated as separate entities and not considered duplicates of each other.
We check if seen[key] is true. If it is, it means we have encountered this element before.
In that case, we check if "current" is not already present in the "duplicates" array using the includes method.
This check is necessary to avoid adding duplicate entries to the "duplicates" array.
If "current" is not a duplicate, we push it to the "duplicates" array.
If seen[key] is not true, it means we are encountering this element for the first time.
We set seen[key] to true to mark it as seen and continue with the next iteration.

*/
function duplicates(arr) {
  const seen = {};
  const duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const type = typeof current;

    if (type === 'number' || type === 'string') {
      const key = type + current;

      if (seen[key]) {
        if (!duplicates.includes(current)) {
          duplicates.push(current);
        }
      } else {
        seen[key] = true;
      }
    }
  }

  return duplicates;
}
