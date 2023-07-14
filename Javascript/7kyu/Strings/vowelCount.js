/*


Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/


function getCount(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
      if (str[i].includes("a")) {
        count += 1
      }
      else if(str[i].includes("e")) {
        count += 1
      }
      else if(str[i].includes("i")) {
        count += 1
      }
      else if(str[i].includes("o")) {
        count += 1
      }
      else if(str[i].includes("u")) {
        count += 1
      }
    }
     return count
  }