/**Use case
Imagine you have a Car, the car has an Engine, the engine has a Gearbox and the gearbox has some property you are interested in, for example numberOfGears. Now, the car could be from junkyard and the gearbox or even the engine could be missing (null).

The name of each property is the name of the class it contains, converted to the appropriate case, such that if all components are present the final property could be accessed by:

Car.engine.gearbox.numberOfGears

How to determine the number of gears in a car?

Instructions
Complete the method called getNumberOfGears being added to the prototype of the Car class. This method will return the value of the numberOfGears property of the gearbox or null if the gearbox (or anything else) is missing.

Constraints
Find some information about the ?. and ?? operators and try to write the method without using if or the ternary operator ?:.

 */

Car.prototype.getNumberOfGears = function getNumberOfGears() {
  return this.engine?.gearbox?.numberOfGears ?? null;
};

/*
  #params:
  -The getNumberOfGears method doesn't take any parameters. 
  -It operates on an instance of the Car class
  #return:
  -returns the value of the numberOfGears property if it exists in the nested gearbox object. 
  -If any part of the chain (Car, Engine, Gearbox) is missing, it returns null.
  #example:
  describe("Solution", function() {
    it("should return correct number of gears", function() {
      const car = new Car(new Engine(new Gearbox(5)))
      assert.strictEqual(car.getNumberOfGears(), 5);
    });
    
    it("should handle missing engine", function() {
      const car = new Car();
      assert.strictEqual(car.getNumberOfGears(), null);
    });
  });
  #pseudocode:
  METHOD getNumberOfGears():
      // Use optional chaining to access properties safely
      IF this.engine is defined AND this.engine.gearbox is defined
          RETURN this.engine.gearbox.numberOfGears
      // Use nullish coalescing to handle missing values
      ELSE
          RETURN null
      END IF
  END METHOD
  */
