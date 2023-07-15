/**Write a function that returns the number of occurrences of an element in an array.

This function will be defined as a property of Array with the help of the method Object.defineProperty, which allows to define a new method directly on the object (more info about that you can find on MDN).

Examples
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences(3) === 1; */


Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
    value : function numberOfOccurrences(element) {
      let ocurrences = 0;
      for(let i = 0; i < this.length; i++) {
            if(this[i] === element) {
          ocurrences += 1
        }
    }
            return ocurrences
  }
  });
  
  
  //prep:
  //params: we receive "element" as a number INTEGER
  //return: we must return the number of ocurrences of "element" on Array.
  /*example:
  var arr = [0, 1, 2, 2, 3];
      assert.strictEqual(arr.slice().numberOfOccurrences(0), 1, `Incorrect answer for 0, arr = [0, 1, 2, 2, 3]`);
      assert.strictEqual(arr.slice().numberOfOccurrences(4), 0, `Incorrect answer for 4, arr = [0, 1, 2, 2, 3]`);
      assert.strictEqual(arr.slice().numberOfOccurrences(2), 2, `Incorrect answer for 2, arr = [0, 1, 2, 2, 3]`);
      assert.strictEqual(arr.slice().numberOfOccurrences(3), 1, `Incorrect answer for 3, arr = [0, 1, 2, 2, 3]`);
  */
  //pseudocode:
  /*
  -define a counter for ocurrences.
  -iterate over Array using "this" keyword
  -Check if element on Array is equal to element parameter
  -If true sum 1 to occur
  -Return occur
  */