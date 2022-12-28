//PREP: 
//PARAMETERS: we get two parameters, both are arrays that holds integers.
//RETURN: we must return a number that represent the sum of each array after summing each of their elements.
//EXAMPLE: [1, 2, 3], [4, 5, 6]), 21
//

const arrayPlusArray = (arr1, arr2) => {
    const arr1Total = arr1.reduce((acc,ele) => ele + acc, 0)
    const arr2Total = arr2.reduce((acc,ele) => ele + acc, 0)
    return arr1Total + arr2Total;
} 

const arrayPlusArray = (arr1,arr2) => arr1.concat(arr2).reduce((acc,ele) => acc + ele, 0) 

function arrayPlusArray (arr1, arr2) {
    let array = [...arr1, ...arr2];
    return array.reduce((acc, ele) => acc + ele, 0)
}