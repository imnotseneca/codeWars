/*

This kata is about static method that should return different values.

On the first call it must be 1, on the second and others - it must be a double from previous value.

*/


class Class {
    static counter = 0;
    static getNumber() {
      if(Class.counter === 0) {
        Class.counter = 1;
      } else {
        Class.counter = Class.counter * 2
      }
      return Class.counter
    }
  }