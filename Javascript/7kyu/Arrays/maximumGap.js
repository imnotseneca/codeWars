/**
 * 
 * Task
Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives and negatives also zeros_

Repetition of numbers in the array/list could occur.

The Maximum Gap is computed Regardless the sign.

Input >> Output Examples
maxGap ({13,10,5,2,9}) ==> return (4)
Explanation:
The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
maxGap ({-3,-27,-4,-2}) ==> return (23)
Explanation:
The Maximum Gap after sorting the array is 23 , The difference between  |-4- (-27) | = 23 .

Note : Regardless the sign of negativity .

maxGap ({-7,-42,-809,-14,-12}) ==> return (767)  
Explanation:
The Maximum Gap after sorting the array is 767 , The difference between  | -809- (-42) | = 767 .

Note : Regardless the sign of negativity .

maxGap ({-54,37,0,64,640,0,-15}) //return (576)
Explanation:
The Maximum Gap after sorting the array is 576 , The difference between  | 64 - 640 | = 576 .

Note : Regardless the sign of negativity .
 */


function maxGap (numbers){
    let finalResult = 0;
    let subNumber = 0;
    let sortedArr = numbers.sort((a,b) => b - a );
    for(let i = 0; i < sortedArr.length; i++) {
      subNumber = (sortedArr[i] - sortedArr[i+1])
      if(subNumber > finalResult) {
        finalResult = subNumber
      }
    }
    return finalResult
  }
  
  /*
  #params: we receive "numbers" as an array of numbers integers, could be positive, negative or zero.
  
  #return: we must return the maxum difference between successive elements in numbers array sorted.
  
  #example:
  
  maxGap ({13,10,5,2,9}) ==> return (4)
  The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
  maxGap ({-3,-27,-4,-2}) ==> return (23)
  The Maximum Gap after sorting the array is 23 , The difference between  |-4- (-27) | = 23
  maxGap ({-7,-42,-809,-14,-12}) ==> return (767)  
  The Maximum Gap after sorting the array is 767 , The difference between  | -809- (-42) | = 767 .
  
  #pseudocode:
  -we declare a variable called "finalResult" initialized with a 0.
  -we create a variable subtractNumber that will hold the value of elements substracted
  -we declare a variable "sortedArr" to sort numbers into descending order.
  -we iterate over sortedArr 
  -we add to subNumber the substraction of two consecutive elements. If its value is greater than finalResult, add to it.
  -return finalResult
  */