/**
 * You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

Examples
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]

 */


function tailSwap(arr) {
    const tail1 = arr[0].split(":")[1]
    const tail2 = arr[1].split(":")[1]
  
    arr[0] = arr[0].split(":")[0] + ":" + tail2; // Swap the tail in the first element
    arr[1] = arr[1].split(":")[0] + ":" + tail1; // Swap the tail in the second element
  
    return arr;
  }
  
  //prep
  //params: we receive "arr" as an array with element strings.
  //return we must return an array with element strings wher we swap the last part of the elements after a ":" with each other.
  //example:
  /*
  ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
  ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
  */
  /*
  pseudocode:
  -We declare tail1 and tail2 to store tail values.
  -we split elements of arr by ":" and add swaped values
  
  */