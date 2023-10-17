/**Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer. */

function isSortedAndHow(array) {
    // Check if the array is sorted in ascending order
    if (array.every((value, index, array) => index === 0 || value >= array[index - 1])) {
      return "yes, ascending";
    }
    // Check if the array is sorted in descending order
    else if (array.every((value, index, array) => index === 0 || value <= array[index - 1])) {
      return "yes, descending";
    }
    // If neither ascending nor descending, return "no"
    else {
      return "no";
    }
  }
  
  
  /*
  params: we receive "array" as an array on numbers integers.
  return: 
  -we must return "yes, ascending" if the numbers in the array are sorted in an ascending order.
  -we must return "yes, descending" if the numbers in the array are sorted in a descending order.
  -we must return "no" otherwise.
  example:
    it("[1, 2]", function() {
      Test.assertEquals(isSortedAndHow([1, 2]), 'yes, ascending');
    });
    
    it("[15, 7, 3, -8]", function() {
      Test.assertEquals(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
    });
    
    it("[4, 2, 30]", function() {
      Test.assertEquals(isSortedAndHow([4, 2, 30]), 'no');
    });
  pseudocode:
  -We make an if statement to check if every element in the "array" is greater than or equal to the element before it. 
  -We use the every method, which iterates over each element in the array and checks the provided condition.
  -We do the same to check if its in descending order.
  -If none of this conditions its true, we return "no"
  
  
  */