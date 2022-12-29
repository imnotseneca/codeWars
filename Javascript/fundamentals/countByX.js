//PRERP
//PARAMETERS: we have "x" and "n" that are both positive integers.
//RETURN: we must return an array that contains all the "x" multiples till reach "n"
//EXAMPLE: countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]
const countBy = (x, n) => {
    let z = [];
    for(let i = 1; i <= n*x; i++) {
      if(i % x === 0) {
        z.push(i)
      }
    }
    return z;
  }