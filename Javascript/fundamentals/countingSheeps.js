// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined


//PREP:
//PARAMETERS: we get an "arrayOfSheep" as an array that can contains boolean values as well as null/undefined.
//Return: we must return the total numbers of "true" as integers.
//Examples:// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

const countSheeps = arrayOfSheep => {
    let total = 0;
    arrayOfSheep.forEach(x => x === true ? total += 1 : total += 0);
    return total
};