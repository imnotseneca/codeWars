/**Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

eg: foobar == fooBAR

If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

sillycase("brian")  
//         --^-- midpoint  
//         bri    first half (lower-cased)  
//            AN second half (upper-cased)   */

function sillycase(silly) {
  
    let firstHalf = silly.substring(0, Math.round(silly.length / 2)).toLowerCase() 
    let secondHalf = silly.substring(Math.round(silly.length / 2), silly.length).toUpperCase()
    
    return `${firstHalf}${secondHalf}`
  }
  
  /*
  params: we receive "silly" as a string.
  return: we must return the string on "silly" with first half lowercased and last hald uppercased.
  -if "silly" has odd length we then round it up.
  example:
  sillycase("brian")  
  //         --^-- midpoint  
  //         bri    first half (lower-cased)  
  //            AN second half (upper-cased)  
  pseudocode:
  -we create a variable "firstHalf" to store firstHalf as a subtring lowercased
  -we create a variable "secondHalf" to store secondHalf as a subtring uppercased
  -we join them and return 
  
  
  
  */