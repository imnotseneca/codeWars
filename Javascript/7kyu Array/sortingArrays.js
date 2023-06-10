/*
Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

Example 1
a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
Example 2
a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
Each element in the arrays will start with a unique letter so there will only be a single match for each element.



*/


/*
PARAMETERS: we receive "a1" and "a2" as two arrays of strings
RETURN: we must return the "a2" array sorted, based on the index of the word in "a1" that begins with the same element compared to "a2" elements.
EXAMPLE:
a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
*/

function sortArray(a1, a2) {
    const dictionary = {};
    
    for(let i = 0; i < a1.length; i++) {
      let word = a1[i]
      let firstLetter = word[0] 
      dictionary[firstLetter] = i
    }
    a2.sort(function (a, b) {
      let firstLetterA = a[0];
      let firstLetterB = b[0];
      return dictionary[firstLetterA] - dictionary[firstLetterB];
    });
  
    return a2;
  }