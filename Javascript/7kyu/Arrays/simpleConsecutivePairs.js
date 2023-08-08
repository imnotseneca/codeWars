/**In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.
More examples in the test cases. */

function pairs(ar){
    let counter = 0;
    let newArr = ar.length % 2 !== 0 ? ar.slice(0,-1) : ar
    for(let i = 0; i<newArr.length; ++i){
      if(i % 2 === 0) {
      if(newArr[i] === (newArr[i + 1] - 1) || newArr[i] === (newArr[i + 1] + 1)){
        ++counter
      }
    }
  }
     return counter
  };
  
  /*
  params: we receive "ar" as an array of number Integers.
  return: a number integer that will represent how many consecutive pairs are on "ar"
  example:
  [1,2,5,8,-4,-3,7,6,5]),3);
  [21, 20, 22, 40, 39, -56, 30, -55, 95, 94]),2);
  //pseudocode:
  -Declare a variable named "counter" that will track as a number how many pairs we got.
  -Create a new variable that will check if ar.length its even or odd.
  -iterate over the array.
  -check if the index its even or odd.
  -check if the element iterated its greater or lesser by 1 for the next element on "ar"
  -if true sum 1 to counter. else we keep on iterating.
  -We return counter
  */