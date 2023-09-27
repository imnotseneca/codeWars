/**Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74 */


function minSum(arr) {
    let finalResult = 0;
    let sortedArr = arr.sort((a,b) => a - b)
    
    // Initialize two pointers, one at the beginning and one at the end of the sorted array
    let left = 0;
    let right = sortedArr.length - 1;
  
    while (left < right) {
      // Multiply the elements at the left and right pointers and add to finalResult
      finalResult += sortedArr[left] * sortedArr[right];
      
      // Move the left pointer to the right and the right pointer to the left
      left++;
      right--;
    }
  
    return finalResult;
  }
  
  /*
  params: we receive "arr" as an array of number integers.
  return: we must return the minimun sum of numbers which is obtained from summic each two integers product
  example:
  minSum({5,4,2,3}) ==> return (22) 
   5*2 + 3*4 = 22
   
  minSum({12,6,10,26,3,24}) ==> return (342)
  26*3 + 24*6 + 12*10 = 342
  pseudocode:
  -we first declare a variable "finalResult" to store the final number value.
  -we declare a variable "sortedArr" to sort arr in ascending order.
  -we initialize two pointers, one at the beginning "left" with 0 value and one at the end of the sorted array "right"
  -we iterate over "sortedArr" and multiply the last element with the first, the second with second to last, and so on
  -move the left pointer to the right and the right pointer to the left
  -we add the results to finalResult
  -we return finalResult
  */