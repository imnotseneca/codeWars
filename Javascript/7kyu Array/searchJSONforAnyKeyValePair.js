/*
You have a friend who works for a well known animation studio. He has heard you talk about your mad programming skills and ask for your help in writing a function that can search some JSON records and return matching character details.

He needs to be able to search for objects in the collection by any of the objects keys and return an array of all the matches.

The basic structure of the JSON object is shown below:

characters = {"characters": [
    {"name":"Bill Cipher", "age":"Unknown", "speciality":"warp reality"},
    // ......
]};
The JSON object is preloaded and can be accessed using the variable characters.

Your function will also need to accommodate the following:

Passed value does not match any keys: in this instance return an empty array.
Passed key does not exist: in this instance return an empty array.
Passed val should not be case sensitive.

*/









function getCharacters(obj, key, val) {
    // Check if the characters object is defined and contains the "characters" key
    if (!obj || !obj.characters) {
      return [];
    }
    
    // Convert the search value to lowercase for case-insensitive comparison
    const searchValue = val.toLowerCase();
    console.log(searchValue)
    
    // Search for matching objects based on the provided key and value
    const matches = obj.characters.filter((character) => {
      // Check if the object has the provided key
      if (character.hasOwnProperty(key)) {
        // Convert the object value to lowercase for case-insensitive comparison
        const objectValue = character[key].toLowerCase();
        
        // Return true if the object value matches the search value
        return objectValue === searchValue ? true : false;
      }
      // Return false if the object doesn't have the provided key
      return false;
    });
    
    return matches;
  }