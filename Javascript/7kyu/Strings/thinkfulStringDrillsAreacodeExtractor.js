/**You've got a bunch of textual data with embedded phone numbers. Write a function area_code() that finds and returns just the area code portion of the phone number.

>>> message = "The supplier's phone number is (555) 867-5309"
>>> area_code(message)
'555'
The returned area code should be a string, not a number. Every phone number is formatted like in the example, and the only non-alphanumeric characters in the string are apostrophes ' or the punctuation used in the phone number. */


function areaCode(text) {
    const regex = /\((\d+)\)/;
    const match = text.match(regex);
  
    if (match) {
      return match[1]; // The area code is captured in the first capturing group (group 1).
    } else {
      return ""; // Return an empty string if no area code is found.
    }
  }
  
  /*
  params: we receive "text" as a string of characters
  return: we must return only the "areacode" of the numbers string given wrapped ().
  example:
  areaCode("The supplier's phone number is (555) 867-5309"), '555');
  areaCode("Grae's cell number used to be (123) 456-7890"), '123');
  areaCode("The 102nd district court's fax line is (124) 816-3264"), '124');
  pseudocode:
  -declare a regex variable that will look for parenthesis and things into it.
  -declare a variable to match the regex with text
  -Check if match is true, then return the first element captured
  -Else return empty string
  */
  