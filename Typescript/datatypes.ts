// Datatypes - Which defines what type of data a variable is storing

// Java
// int i = 10

// let i :number = 19

// Syntax:
// keyword(var/let/const) variableName:datatype(optional) = value


let j:any = 20

j = 70

let p

console.log(p);

p = 90
console.log(p);



// There are 2 types of datatypes:

// 1. Primitive datatype - Only have a single value

    // 1. number
    // 2. string
    // 3. boolean
    // 4. null
    // 5. undefined
    // 6. union (|) - Combination of other datatypes (number | string)
    // 7. any
    // 8. void - Function


// 1. number - Combination of integer (98, 78) and floating point number (67.5454, -98.880)

let num11:number = 45

let num12 = 89

// typeof - Which return the datatype of a variable

console.log(typeof num11);
console.log(typeof num12);

// What is difference between Type Annotation and Type Inference

// Whenever we define the datatype of a variable explicitly is known as Type Annotation
// Whenever JS & TS is able to identify the datatype of a variable implicitly is known as Type inference



// 2. string - Sequence of characters - string, text, word

// 1. Single Quote ('') - String literal
// 2. Double Quote ("") - String literal
// 3. Backtick (``) - Template literal

let singleQuote = 'This is a single quote string'
let doubleQuote = "This is double quote string"

// There are 2 main purpose of defining the string by using backtick (``)

// 1. Multi-line string

let multiline = `This is
a multiline
string`

console.log(multiline);

// 2. For string parametrisation - Calling a variable inside a string - 
// ${variableName} - // Data driven testing in PW

let age = 18

let message  = `Your age is ${age}`
console.log(message)


// 3. boolean - true/false

console.log(5 > 20);

// 4. null - Intentional absence of a value

let num13: null = null

// 5. undefined - You have defined a variable but have not assigned any value to it.

let num14 : undefined = undefined

let num15
console.log(num15)


// Note: 1. By default any type of variable will have a value as "undefined"
// 2. By default the datatype of a variable will be "any"


// 6. (|) - Is known as union

let num16: number | string |true = 10
num16 = "TS"
num16 = true

// 7. any - it is free to accept any type of datatype

let num17:any = 10
num17 = "TS"
num17 = true
num17 = null
num17 = undefined



// 2. Non-primitive datatype - Can store more than one value

     // 1. Array
     // 2. Function
     // 3. Object



