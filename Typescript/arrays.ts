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


// 3. unshift(ele1, ele2, ele3,....) - It adds the element to the beginning of an array
arr5.unshift("Java", 50)
console.log(arr5);

// 4. shift() - It removes the first element from an array

arr5.shift()
console.log(arr5);


// What is difference between push() and unshift()?
// What is difference between pop() and shift()?

// What is difference between slice() and splice()?

// 5. splice(startIndex, deleteCount, ele1, ele2,....) - Add/Remove the element
// from the array at the specified index

// startIndex - The position where you want to add/delete the element
// deleteCount - The number of element that you want to delete
// ele1, ele2, ele3,.... - The elements that you want to add at the startIndex

let arr6 = [10,20,30,40,"TS", 50, 60]

console.log(arr6);

arr6.splice(2, 0, "Java", 100, 200, 300, 500)
console.log(arr6)

// 6. slice(startIndex?, endIndex?) - Returns the portion of an element from 
// start Index to endIndex

// startIndex - The position where you want to start the slice
// endIndex(Exclusive) - The position where you want to end the slice

console.log(arr6.slice(1,6))
console.log(arr6.slice(0,7))



// 7. indexOf(element, startIndex?) - Returns the index of first occurances of
// an element in the array or -1 if not found

//arrrayName.indexOf(element, startIndex?)

let arr7 = [10,20,30,40,50,10,30,10,70,10]

let index = arr7.indexOf(10, 3)
console.log(index)

let index1 = arr7.indexOf(10, 8)
console.log(index1)


// Assignment - 1:
// To find out all the index of 10 available inside arr7 - 0, 5, 7, 9

// 8. lastIndexOf(element startIndex?) - Return the index of last occurances of 
// an element inside an array

console.log(arr7.lastIndexOf(10, 6))
console.log(arr7.lastIndexOf(10))


// 9. includes(element) - Return true if the element is found in the array
// otherwise false

console.log(arr7.includes(70))
console.log(arr7.includes(500))

// 10. join(separator) - Joins all the elements of an array and return 
// as a string

let arr8 = [20,12,2026,3002, 5000] // dd-mm-yyyy
console.log(arr8)

let joinResult = arr8.join("-")
console.log(joinResult);


// 11. toString() - Convert the array into string
console.log(arr8.toString())

