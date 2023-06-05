/**
 * Task
You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

In practice, you should implement this function:

function eliminateUnsetBits(number);
Examples
eliminateUnsetBits("11010101010101") ->  255 (= 11111111)
eliminateUnsetBits("111") ->  7
eliminateUnsetBits("1000000") -> 1
eliminateUnsetBits("000") -> 0
 */
/*


Parameters:
-Single parameter "number", which is a string representing a number in binary.

Return:
-Should return a decimal number. 
-Obtained after deleting all the unset bits (0s) from the binary string and converting the remaining bits to decimal.

Examples:
Here are a few examples to illustrate the expected behavior of the eliminateUnsetBits function:

eliminateUnsetBits("11010101010101") should return 255, which is the decimal representation of the binary string with all the unset bits removed.
eliminateUnsetBits("111") should return 7 since there are no unset bits in the binary string.
eliminateUnsetBits("1000000") should return 1 as the only set bit (1) remains after removing the unset bits.
eliminateUnsetBits("000") should return 0 as there are no set bits remaining after removing all the unset bits.



*/


function eliminateUnsetBits(number) {
    let binaryString = '';
    
    for (let i = 0; i < number.length; i++) {
      if (number[i] === '1') {
        binaryString += '1';
      }
    }
    
    const decimalNumber = parseInt(binaryString, 2);
    return decimalNumber || 0;
  }
  
  
  
  // function eliminateUnsetBits(number) {
  //   const binaryString = number.replace(/0/g, '');
  //   const decimalNumber = parseInt(binaryString, 2);
  //   return decimalNumber || 0;
  // }