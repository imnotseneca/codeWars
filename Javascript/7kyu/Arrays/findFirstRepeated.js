/**

In the toy factory of the North Pole, each toy has a unique identification number.

However, due to an error in the toy machine, some numbers have been assigned to more than one toy.

Find the first identification number that has been repeated, where the second occurrence has the smallest index!

In other words, if there is more than one repeated number, you must return the number whose second occurrence appears first in the list. If there are no repeated numbers, return -1.

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Even though 2 and 3 are repeated
// 3 appears second time first

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// It is -1 since no number is repeated

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5 */

function findFirstRepeated(gifts) {
    const seen = new Set();
  
    for (const gift of gifts) {
      if (seen.has(gift)) {
        return gift;
      }
      seen.add(gift);
    }
  
    return -1;
  }
  
  /*prep
  
  -Params: We receive "gifts" as an array of number integers representing IDs.
  
  -Return: we must return a number integer that represents the first occurrence of a repeated number
  
  -Example:
  const giftIds = [2, 1, 3, 5, 3, 2]
  const firstRepeatedId = findFirstRepeated(giftIds)
  console.log(firstRepeatedId) // 3
  Even though 2 and 3 are repeated
  3 appears second time first
  
  -Pseudocode:
  -We create a variable called seen as a new Set to store unique values.
  -We iterate over gifts.
  -Every time we iterate over gift we check if the element exist on "seen", if true, return it, else add it.
  -If no repetitions occurs, we return -1
  */