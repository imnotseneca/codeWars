const capMe = (names) => names.map((name) => `${name.slice(0,1).toUpperCase()}${name.slice(1).toLowerCase()}`)

/*
prep:
params: we receive "names" as an array of string names.
return: we must return the same names but capitalized.
example:
capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
pseudocode:
-we iterate over every element and return first letter uppercased and the rest of the item

*/