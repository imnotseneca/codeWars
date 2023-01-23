// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

/*
PREP:
-PARAMETERS: we have an array of number positives integers. 
-RETURN: we must return a new array that hold the min and max number, and the difference between them.
-EXAMPLE: [82, 15, 6, 38, 35]), [6, 82, 76]
-PSEUDO-CODE:

*/

function differenceInAges(ages){
    const max = Math.max(...ages);
    const min = Math.min(...ages);
    const difference = max - min
    return [min, max, difference]
    }