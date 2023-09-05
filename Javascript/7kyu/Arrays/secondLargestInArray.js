/**Find and return second largest unique number in given Array.

Array may contain values of any data type. Ignore everything except numbers and strings, which may be converted to numbers.

If passed value is not an Array or if there is no second largest item in given Array (e.g. [1, 1, 1]) should return undefined.

Examples
secondLargest([1, -2, 3]) = 1;
secondLargest([5, 5, 4]) = 4;
secondLargest([2, '3', 4]) = 3;
Should return
// 1. Passed value not an Array:
secondLargest("1 2 3") = undefined;

// 2. There is no second largest:
secondLargest([2, 2, 2]) = undefined;

// 3. Ignore everything except:
//   * numbers
//   * not-NaN strings:
secondLargest(['-1', 2, null, false]) = -1;
Input range
Numbers are safe Integers.
Not-NaN strings represent safe Integers. */

function secondLargest(array) {
    let numbers = [];
  
    if (!Array.isArray(array)) {
      return undefined;
    }
  
    for (let i = 0; i < array.length; i++) {
      const num = parseFloat(array[i]);
      if (!isNaN(num)) {
        numbers.push(num);
      }
    }
  
    numbers = Array.from(new Set(numbers));
  
    numbers.sort((a, b) => b - a);
  
    return numbers[1];
  }
  
  //prep:
  //params: we receive "array" that can be an input of any type. But we need it to be an array.
  //return: we iterate over "array" if it is an array indeed. Then we need to find the second largest integer element on "array"
  //If passed value is not an Array or if there is no second largest item in given Array (e.g. [1, 1, 1]) should return undefined.
  //example:
  /*
  secondLargest([1, -2, 3]) = 1;
  secondLargest([5, 5, 4]) = 4;
  secondLargest([2, '3', 4]) = 3;
  
  // 1. Passed value not an Array:
  secondLargest("1 2 3") = undefined;
  
  // 2. There is no second largest:
  secondLargest([2, 2, 2]) = undefined;
  
  // 3. Ignore everything except:
  //   * numbers
  //   * not-NaN strings:
  secondLargest(['-1', 2, null, false]) = -1;
  */
  
  /*
  pseudocode:
  //We first declare variable "number" as empty arrays to store values.
  //We then check if "array" is indeed an array, if false, return undefined. 
  //We iterate over "array" and convert every element into number.
  //We check if !isNaN for num and add it to "numbers"
  //We remove duplicates from the "numbers" array with new Set
  //We sort the numeric values in descending order
  //We return second largest number (at index 1)
  */