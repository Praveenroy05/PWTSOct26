// Arrays - []

let arr = [10, "JS", "TS"] // [0:10, 1:"JS", 2:"TS"] - arr[0]

console.log(typeof arr);

// Syntax:
// arrayName[index] - it will return the value at specified index
console.log(arr[1]);


/*

1. Array is a collection of data, which can have different data types.
2. Array is an ordered collection. Means can also access the element from the array
using the position(index)
3. Index starts with 0 in an array
4. Array is dynamic in size

*/

let i = [90]

// Declaration of an array

// 1. Using Array literal - []
// 2. Using Array constructor - new Array()


// 1. Using Array Literal - []

// Syntax:
// let arrayName:datatype[](optional) = [value1, value2,.....]

let arr1:number[] = [10,20,30,40,50]



let arr2 = [10,200,300,"pink", "apple", "TS", null, undefined, true]

console.log(arr2)

// 2. Using Array Constructor - new Array()

// Syntax:
// let arrayName = new Array<datatype(optional)>(value, value1,....)


let arr3 = new Array<any>(10, "Java", 10.5, "TS")

console.log(arr3);


let arr4 = [10,20,30,40,50,"TS", "Python", "AILLM"]

// length - It returns the total number of elements available inside an array

console.log(arr4[0])
console.log(arr4[1])
console.log(arr4[2])

// Using the loop to iterate through the element of an array

// 1. Traditional for loop 

for(let i=0 ; i<arr4.length; i++){ // 8 - [0-7]
    console.log(arr4[i]); 
}


console.log("***********************************************")


// 2. for of loop  - Directly interact with the element

// Syntax:

/*

for(let variableName of arrayName)
{
    // body
}

let arr4 = [10,20,30,40,50,"TS", "Python", "AILLM"]


*/

for(let element of arr4){
    console.log(element)
}


console.log("****************Methods of an array**********************")

let emptyArray = []

let arr5 = [10,20,30,"TS", "pink"]
console.log(arr5);


// 1. push(ele1, ele2, ele3,.....) - It adds the elements to the end of an array

// Syntax:
// arrayName.push(ele1, ele2,...)

arr5.push(100,"JS")
console.log(arr5);


// 2. pop() - It removes the last element from the array
arr5.pop()
console.log(arr5);







