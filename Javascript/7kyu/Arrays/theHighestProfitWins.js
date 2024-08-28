/**
 *Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
 */



/*
PREP:
#PARAMS: we receive "arr" as an araray of 1 or more numbers.
#RETURN: we must return an array with the lowest and highest number in "arr".
#EXAMPLE:
1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
#PSEUDOCODE:
-We first create a finalArr with two slots to hold both values.
-We then iterate over arr.
-We check if length === 1. If true we return the element pushed twice on finalArr.
-If false we push the element.
-On the next cycle we will compare if element iterated is minor than finalArr[0] if true we reemplace it and put the other element as the second
-If is higher we just put it second.
-Repeat until lenght
-We return finalArr

*/
//Simple solution:
// function minMax(arr){
  
//   let sortedArr = arr.sort((a,b) => a - b)

//   if(arr.length === 1){
//     return [sortedArr[0], sortedArr[0]]
//   } else {
//     return [sortedArr[0], sortedArr[sortedArr.length -1]]
//   }
// }

function minMax(arr) {
    // Crear un array con dos slots para almacenar el valor más bajo y más alto
    let finalArr = [arr[0], arr[0]];

    // Iterar sobre cada elemento de arr
    for (let i = 1; i < arr.length; i++) {
        let num = arr[i];

        // Comparar para encontrar el valor más bajo
        if (num < finalArr[0]) {
            finalArr[0] = num;
        }

        // Comparar para encontrar el valor más alto
        if (num > finalArr[1]) {
            finalArr[1] = num;
        }
    }

    // Retornar el array final con el menor y mayor valor
    return finalArr;
}