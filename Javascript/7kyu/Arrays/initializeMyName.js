/**Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis' */

function initializeNames(name) {
  let abName = [];
  let splitedArr = name.split(" ");
  for (let i = 0; i < splitedArr.length; i++) {
    if (
      splitedArr.indexOf(splitedArr[i]) !== 0 &&
      splitedArr.indexOf(splitedArr[i]) !== splitedArr.length - 1
    ) {
      splitedArr[i] = `${splitedArr[i].slice(0, 1)}.`;
      abName.push(splitedArr[i]);
    } else {
      abName.push(splitedArr[i]);
    }
  }
  return abName.join(" ");
}

//prep
//params: we recieve "name" as a string of names.
//return: we must return name formated in a way that middle names only shows it first letter and "."
//example:
/*
Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

//pseudocode:
/*
-declare a new variable "abName" as an empty array.
-declare a variable "splitedArr" to store the value of name splited into array.
-Iterate over splitedArr with a for loop
-check if the index of the element iterated is not 0 or -1 (first and last element of the array).
- if true mutate and slice the element to its first character adding also a "." and push it to abName
-else push the element to abName
-return abName
*/
