// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//PREP
//PARAMETERS: an "arr" that could contain numbers o strings.
//RETURN: a new array filtering every element thats has index multiple of 2.
//EXAMPLE: // ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]


const removeEveryOther = arr => arr.filter((e,i) => i % 2 === 0)