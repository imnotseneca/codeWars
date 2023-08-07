/**Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity */


function capitalize(s){
  let newArr = ["", ""]
  
  for(let i = 0; i< s.length; i++) {
    if(i % 2 === 0) {
      newArr[0] += (s[i].toUpperCase());
      newArr[1] += (s[i].toLowerCase());
    } else {
      newArr[0] += (s[i].toLowerCase());
      newArr[1] += (s[i].toUpperCase());
    }
  }
  return newArr
};

//params: we receive "s" as a string of letters lowercased
//return 
/*
we must return an array of two strings element ["",""]
on the first one letters with even index must be UpperCase and odd index LowerCase
on the second one the opposite.
*/
//example
/*
Test.assertDeepEquals(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
*/

//pseudocode:
/*
-declare a newArr variable that holds this value ["", ""]
-iterate over "s"
-check if element index its even, if true push the element uppercased to the first array and lowercased to the second
-return newArr
*/