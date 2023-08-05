/**Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).

 */

function validateUsr(username) {
  // Check if the username contains only lowercase letters, numbers, and underscores
  // and has a length between 4 and 16 characters (both included)
  return /^[a-z0-9_]{4,16}$/.test(username);
}

//prep
//params: we receive "username" as a string of characters.
//return: we must return true if the string matchs this criteria: length between 4 to 16. lowercase, numbers and underscore.
//else return false
/*
  example:
      assert.strictEqual(validateUsr('asddsa'), true);
      assert.strictEqual(validateUsr('a'), false);
      assert.strictEqual(validateUsr('Hass'), false);
      assert.strictEqual(validateUsr('Hasd_12assssssasasasasasaasasasasas'), false);
      assert.strictEqual(validateUsr(''), false);
      assert.strictEqual(validateUsr('____'), true);
      assert.strictEqual(validateUsr('012'), false);
      assert.strictEqual(validateUsr('p1pp1'), true);
      assert.strictEqual(validateUsr('asd43 34'), false);
      assert.strictEqual(validateUsr('asd43_34'), true);
  */

//pseudocode:
/*build a regex that test for all this conditions.
  
  ^: indicates the start of the string.
  [a-z0-9_]: Matches any lowercase letter, number, or underscore.
  {4,16}: Specifies the length of the username to be between 4 and 16 characters (both included).
  $: indicates the end of the string.
  
  */
