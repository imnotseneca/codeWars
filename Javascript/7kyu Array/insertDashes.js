/*


Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).


*/


//PARAMETERS: we receive "num" as a couple of integer numbers.
//RETURN: we must return a string replicating the numbers. Whenever two odds numbers are close, we insert a "-".
/*EXAMPLE:
insertDash(454793),'4547-9-3');
(insertDash(123456),'123456');
(insertDash(1003567),'1003-567')
*/
/*PSEUDOCODE:
-We create "numToString" to pass "num" to strings
-We create a new variable called "numString" to push our new string numbers.
-We iterate through "numToString" and validate if the element is odd, if there are a "next element" and if the new element its also odd
-If yes we sum the element with a dash
-If no we sum just the element
-we return numToString
*/


function insertDash(num) {
    let numToString = num.toString();
    let numString = '';
    for(let i = 0; i < numToString.length; i++) {
      if(numToString[i] % 2 !== 0 && numToString[i+1] && numToString[i+1] % 2 !== 0){
        numString += `${numToString[i]}-`
      } else {
        numString += numToString[i]
      }
    }
    return numString
  }
  