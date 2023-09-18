/**Given a string, determine if it's a valid identifier.

Here is the syntax for valid identifiers:
Each identifier must have at least one character.
The first character must be picked from: alpha, underscore, or dollar sign. The first character cannot be a digit.
The rest of the characters (besides the first) can be from: alpha, digit, underscore, or dollar sign. In other words, it can be any valid identifier character.
Examples of valid identifiers:
i
wo_rd
b2h
Examples of invalid identifiers:
1i
wo rd
!b2h */

function isValid(idn) {
  // Regular expression to match valid identifiers
  const identifierPattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

  return identifierPattern.test(idn);
}

/*
  #params: we receive "idn" as a string of chars.
  #return: we must return true if "idn" its a valid identifier, what are valid identifiers?:
  -Each identifier must have at least one character.
  -The first character must be picked from: alpha, underscore, or dollar sign. The first character cannot be a digit.
  -The rest of the characters (besides the first) can be from: alpha, digit, underscore, or dollar sign.
  -In other words, it can be any valid identifier character.
  #example:
  --
      Test.assertEquals(isValid("okay_ok1"), true, "Wrong result for 'okay_ok1'");
      Test.assertEquals(isValid("$ok"), true, "Wrong result for '$ok'");
      Test.assertEquals(isValid("___"), true, "Wrong result for '___'");
      Test.assertEquals(isValid("str_STR"), true, "Wrong result for 'str_STR'");
      Test.assertEquals(isValid("myIdentf"), true, "Wrong result for 'myIdentf'");
      --
      Test.assertEquals(isValid("1ok0okay"), false, "Wrong result for '1ok0okay'");
      Test.assertEquals(isValid("!Ok"), false, "Wrong result for '!Ok'");
      Test.assertEquals(isValid(""), false, "Wrong result for an empty string");
      Test.assertEquals(isValid("str-str"), false, "Wrong result for 'str-str'");
      Test.assertEquals(isValid("no no"), false, "Wrong result for 'no no'");
      --
  #pseudocode:
  -This function uses the regular expression ^[a-zA-Z_$][a-zA-Z0-9_$]*$ to match valid identifiers. 
  -It checks if the input string starts with a character from the set [a-zA-Z_$] (alpha, underscore, or dollar sign) 
  -and is followed by zero or more characters from the set [a-zA-Z0-9_$] (alpha, digit, underscore, or dollar sign). 
  -If the input string matches this pattern, it's considered a valid identifier.
  */
