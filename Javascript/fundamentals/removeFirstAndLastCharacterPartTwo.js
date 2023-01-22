// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
/*
PREP:
-PARAMTERS: WE GET "arr" as an string containing a sequence of character sequences separated by commas.
-RETURN: new string containing the same char seq excepto the first and the last one, separated by spaces. If the input is empty or the removal of the first and last items would cause the resulting string to be empty, return empty value or null
-EXAMPLE:
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL

*/

function array(arr) {

    const newArr = arr.split(',').slice(1,-1)
    
        if(newArr.length < 1 || newArr.length === 0) {
          return null
      } 
        else {
          return newArr.join(' ')
      }
    }