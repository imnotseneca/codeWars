/**Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
The combine function should be a good citizen, so should not mutate the input objects.


*/

function combine(...params) {
  let finalObj = {};

  for (let i = 0; i < params.length; i++) {
    //store current element in currentObj variable
    const currentObj = params[i];

    // Iterate through keys of the current object
    Object.keys(currentObj).forEach((key) => {
      // Check if the key exists in finalObj
      if (finalObj.hasOwnProperty(key)) {
        // Add the current value to the existing value
        finalObj[key] += currentObj[key];
      } else {
        // If the key doesn't exist, add it to finalObj
        finalObj[key] = currentObj[key];
      }
    });
  }

  return finalObj;
}

/*
  params: we receive an undefined amount of objects. Those objects will have letters as keys, and numbers as values.
  -they will be different objects but can have the same key declaration.
  return: we must return a new object that results from combining all the ones received.
  example:
  const objA = { a: 10, b: 20, c: 30 }
  const objB = { a: 3, c: 6, d: 3 }
  combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
  pseudocode:
  
  -Initialize the Result Object: start by creating an empty object (finalObj) that will eventually store the combined values.
  
  -Iterate Through Input Objects: for loop to iterate through each input object in the params array.
  
  -Iterate Through Object Keys: for each object, iterate through its keys using Object.keys(obj).
  
  -Check if Key Exists in Result Object: For each key, check if it already exists in finalObj. 
  If it doesn't, add the key to finalObj with the corresponding value.
  
  -Add Values for Existing Keys: If the key already exists in finalObj, 
  add the current value to the existing value in finalObj.
  
  -Return the Result Object: After combining all the input objects, return the finalObj.
  
  */
