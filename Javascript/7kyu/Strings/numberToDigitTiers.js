/*

Create a function that takes a number and returns an array of strings containing the number cut off at each digit.

Examples
420 should return ["4", "42", "420"]
2017 should return ["2", "20", "201", "2017"]
2010 should return ["2", "20", "201", "2010"]
4020 should return ["4", "40", "402", "4020"]
80200 should return ["8", "80", "802", "8020", "80200"]
PS: The input is guaranteed to be an integer in the range [0, 1000000]


###### PREP #######

#PARAMS: we receive "num" as a single integer.
#RETURN: we must return an array of strings, with length equal to "num" number of digits. Where every element represents "digit tiers"
#EXAMPLE:
420 should return ["4", "42", "420"]
2017 should return ["2", "20", "201", "2017"]
2010 should return ["2", "20", "201", "2010"]
#PSEUDOCODE:
-We create a finalArr to store values.
-We create a variable numString to transform num into string
-We iterate over numString and take substring based on [i].
-Push it to finalArr every loop
-Return finalArr


*/


const createArrayOfTiers = (num) => {
    const finalArr = [];
    const numToString = new String(num);
    for(let i = 1; i < numToString.length + 1; i++){
      const trimmedNum = numToString.substring(0,i)
      finalArr.push(trimmedNum);
    }
    return finalArr;
  }