//PREP
//PARAMETERS: "a" as an array that contains unknow quantity of positive integers as elements
//RETURN: a new array that filters duplicated elements.
//EXAMPLE: [1,1,2,2] => [1,2]
//CODE: 

const distinct = a => [... new Set(a)]

//SPREAD SYNTAX

// The spread (...) syntax allows an iterable (array or string) to be separated in places. In an object literal, the spread syntax enumerates the properties of an objects and adds the key-value pairs to the object being created.

// -Spread syntax expands an array into its elements


// Set object
// -The set object lets you store unique values of any type, whether primitive values or objects references.
// -Set objects are collections of vlues. A value in the Set may only occur once. 