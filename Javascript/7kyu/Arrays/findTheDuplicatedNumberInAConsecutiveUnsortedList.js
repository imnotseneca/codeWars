/**You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

The array is unsorted.

An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

You should return the duplicate value as a single integer. */


function findDup( arr ){
    let duplicatedValue = 0;
    for(let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j<arr.length + 1; j++ ) {
        if(arr[i] === arr[j]) {
          duplicatedValue = arr[i]
        }
      }
    }
    return duplicatedValue
  }
  
  /*
  params: we receive "arr" as an array of integers.
  return: we must return an integer equal to the duplicated number in "arr"
  example:
  
  findDup([1,2,2,3]), 2
  findDup([1,3,2,5,4,5,7,6]), 5
  
  pseudocode:
  -create a variable named "duplicatedValue" to store the final result.
  -make two nested for loops and check if the element at [i] index its equal to the element at the [j] index
  -if true mutate duplicatedValue to arr[i]
  -return duplicatedValue
  */
  

/*
  El enfoque actual tiene una complejidad cuadrática lo que significa que el tiempo de ejecución aumenta cuadráticamente con el tamaño del array. 
  Aquí tenemos una versión mejorada con complejidad lineal:

  
  // function findDup( arr ){
  //   let seen = {}
  //   for(let i = 0; i< arr.length; i++) {
  //     if(seen[arr[i]]) {
  //       return arr[i]
  //     }
  //     seen[arr[i]] = true;
  //   }
  // }
  
Este enfoque utiliza un objeto (seen) para realizar un seguimiento de los elementos únicos que ha visto hasta ahora. 
En cada iteración, verifica si el elemento actual ya está en el objeto. 
Si es así, eso significa que ya ha encontrado ese elemento anteriormente, y puedes devolverlo como el duplicado. 
Esto tiene una complejidad de tiempo lineal lo que hace que el algoritmo sea más eficiente, especialmente para arrays más grandes.
  
  
  */