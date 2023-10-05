function trouble(x, t) {
    // Loop through the array
    for (let i = 0; i < x.length - 1; i++) {
      // Check if the sum of consecutive pair is equal to the target
      if (x[i] + x[i + 1] === t) {
        // If true, remove the second element of the pair
        x.splice(i + 1, 1);
        // Decrement i to recheck the current index after removal
        i--;
      }
    }
    // Return the modified array
    return x;
  }
  /*
  Params:
  
  x: The array of integers.
  t: The target sum.
  Return:
  
  The modified array after removing the second number of any consecutive pair whose sum is equal to the target.
  Example:
  
  Input: x = [1, 2, 3, 4, 5], t = 3
  Execution: If the pair (x[i], x[i + 1]) has a sum equal to t, remove the element at index i + 1.
  Output: [1, 3, 4, 5]
  Pseudocode:
  
  Function Definition: function trouble(x, t)
  Initialize a loop that iterates through the array x from the first element to the second-to-last element.
  Within the loop, check if the sum of the current element (x[i]) and the next element (x[i + 1]) is equal to the target (t).
  If true, remove the second element of the pair using splice(i + 1, 1).
  Decrement i to recheck the current index after the removal.
  Continue looping until the second-to-last element.
  Return the modified array x after the loop.
  
  */