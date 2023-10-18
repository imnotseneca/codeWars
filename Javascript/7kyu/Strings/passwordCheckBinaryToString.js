/**Password Check - Binary to String
A wealthy client has forgotten the password to his business website, but he has a list of possible passwords. His previous developer has left a file on the server with the name password.txt. You open the file and realize it's in binary format.

Write a script that takes an array of possible passwords and a string of binary representing the possible password. Convert the binary to a string and compare to the password array. If the password is found, return the password string, else return false;

decodePass(['password123', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011');    => 'password123'
decodePass(['password321', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011');    => false
decodePass(['password456', 'pass1', 'test12'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011');    => false */

function decodePass(passArr, bin) {
    const binArr = bin.split(' ');
    const decodedPassword = binArr.map(binary => String.fromCharCode(parseInt(binary, 2))).join('');
  
    return passArr.includes(decodedPassword) ? decodedPassword : false;
  }
  
  /*
  params: we receive two params
  -passArr as an array of string words.
  -bin as a string of binary numbers.
  return: we must return the password string from passArr if it matches with the "bin" string, else false.
  example:
  decodePass(['password123', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011');    => 'password123'
  decodePass(['password321', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011');    => false
  decodePass(['password456', 'pass1', 'test12'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011');    => false
  
  pseudocode:
  -we declare binArr to split bin into array.
  -we declare "decodedPassword" and its value will be a map from binArr where we decode bin into a word.
  -we check if "passArr" contains decodedPassowrd, if true return it, if false return false.
  
  */