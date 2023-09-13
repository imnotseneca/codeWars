/**You're familiar with list slicing in Python and know, for example, that:

>>> ages = [12, 14, 63, 72, 55, 24]
>>> ages[2:4]
[63, 72]
>>> ages[2:]
[63, 72, 55, 24]
>>> ages[:3]
[12, 14, 63]
write a function inverse_slice() that takes three arguments: a list items, an integer a and an integer b. The function should return a new list with the slice specified by items[a:b] excluded. For example:

>>>inverse_slice([12, 14, 63, 72, 55, 24], 2, 4)
[12, 14, 55, 24]
The input will always be a valid list, a and b will always be different integers equal to or greater than zero, but they may be zero or be larger than the length of the list.

 */

function inverseSlice(items, a, b) {
    let slicedArr = []
    for(let i = 0; i < items.length; i++) {
      if(!(i >= a && i < b)) {
        slicedArr.push(items[i])
      }
    }
    return slicedArr
  }
  
  /*
  #params: we receive 3 params;
  -items as an array of numbers or strings.
  -a & b as integers.
  
  #return: we must return all elements from items array except the ones from a to b (including a but not b).
  
  #example:
  
  inverseSlice([12, 14, 63, 72, 55, 24], 2, 4), [12, 14, 55, 24])
  inverseSlice([12, 14, 63, 72, 55, 24], 0, 3), [72, 55, 24])
  inverseSlice(['Intuition', 'is', 'a', 'poor', 'guide', 'when', 'facing', 'probabilistic', 'evidence'], 5, 13), ['Intuition', 'is', 'a', 'poor', 'guide'])
  
  #pseudocode:
  -Declare a variable "slicedArr" as an empty array to store new values.
  -Iterate through items array.
  -Check if the index its not greater or equal to "a" and it's not lower than "b". If true, push the element to slicedArr
  -Return slicedArr
  */
  