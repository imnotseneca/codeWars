/**Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically by key name.

Good Luck! */


function convertHashToArray(hash){
    let arrPair = []
    const keys = Object.keys(hash)
    for(const key in hash) {
      const value = hash[key]
      arrPair.push([key, value])
    }
    return arrPair.sort()
  }
  
  /*
  
  -Parameters:
  --we receive "hash" that represents the input (JavaScript object).
  -Return:
  --the function convertHashToArray returns an array of key-value pairs, sorted alphabetically by the key.
  -Example:
  const hash = { name: 'Jeremy', age: 24, role: 'Software Engineer' };
  const result = convertHashToArray(hash);
  console.log(result);
  
  -Pseudocode:
  --Create an empty array called arrPair to store the key-value pairs.
  --Iterate over each key in the hash array.
  --Retrieve the corresponding value from the hash object using the current key.
  --Create a pair [key, value] representing the key-value pair.
  --Append the pair to the arrPair array.
  --After iterating through all the keys and creating the pairs, arrPair will contain the desired output.
  --Return the arrPair array sorted.
  */