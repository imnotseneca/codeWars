// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
  
// As you can see, the lists are cascading; ie, they overlap, but never out of order.

//PREP
//PARAMTERS: we get an "array" of integers, and "n" as a number integer
//RETURN: we must return a new array that holds the elements in the "array" but splitted by "n". 
//EXAMPLE: ([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

function eachCons(array, n) {
    const newArr = [];
      for(let i = 0; i<array.length;i++) {
        let smallArr = [];
        for(let j = 0; j<n; j++) {
          let index = i + j;
          if(index >= array.length) return newArr;
          smallArr.push(array[index])
        }
        newArr.push(smallArr)
      }
      return newArr
    }