// Functions - It is a set of instruction that performs a specific task


function login(username:String, password:string){
    // fill the username
    // fill the password
    // click on login button
}

// login("email", "password")


// 100 Test Cases - 300 lines of code - 195

// Duplication - Solve the problem of duplication
// Maintenance - 100 test cases to fix the issues - saves 99 steps
// reusability - We can use the code wherever we want

// 1. Named function - Function Declaration
// 2. Anonymous function - Function Expression
// 3. Arrow Function - ES6 (2015) - Lambda Function
// 4. Constructor Function - Class


// 1. Named Function - Function Declaration - A function which will be declared along 
// with the name is known as Named function.

// Syntax:

/*

JS:

function functionName(parameters(optional)){ // defining the function

    // block of code
    return (optional)

}

functionName(arguments) // calling the function




TS:


function functionName(parameters(optional)):returnType(Optional){ // defining the function

    // block of code
    return (optional)

}

functionName(arguments) // calling the function

void - nothing- it does not return



*/

// 1. Non-parametrised and non-returning function

function greet(){
    console.log("Hello, Wlecome to Typescript")
}

greet()


// 2. Non-parametrised and returning function

function greetings(){
    return "Welcome to Typescript"
}

let result = greetings()
console.log(result)

function print(){
    console.log(result + " PW" );
}

print()



// 3. Parametrised and non-returning function

function loginIntoApplication(username:string, password:string){ // username, password - parameter
    console.log("Fill the username " + username)
    console.log("Fill the password " + password)
    console.log("Click on the login button")   
}

loginIntoApplication("Login", "Password") // Login, Password - arguments


// 4. Parametrised and returning function

function add(a:number, b:number):number{
    return a+b
}

let sum = add(10,20)
console.log(sum)

// What is parameter and arguments?

// Parameter - It is a variable in the declaration of function
// It used to receive the value when the function id called.

// Argument - It is a value that is passed to the function when it is called.


// let i = Function

// 2. Anonymous function - Function expression - A function which will not have any name.
// A function which is declared without any name that function will be stored inside a
// variable. The variable where we store the function becomes the name of the function.

// Call back function - A function which will be utilised as a parameter of another
// function is known as call back function

/*

function adds(fun:Function){
    fun()
}

adds(function(){
    console.log("This is a call back function");
})

*/

// Syntax:

/*

let functionName = function(param:datatype):returntype(Optional){
    // code to be executed
}

functionName(arguments)


*/


let message = function(name:string, age:number):void{
    console.log(`Your name is ${name} and age is ${age}`)
}

message("Rahul", 25)
message("John", 34);



// 3. Arrow Function - Function Expression(=>) - Lambda function - ES 6 - 2015

// 1. This is also a part of anonymous function and wil not have any name
// 2. This function will be declred using (=>) arrow symbol after the paranthesis
// 3. Arrow function use to shorten the number of lines of code
// 4. If there is only one line of code inside the function then we can skip the curly braces
// inside the arrow function. 

// Syntax:
/*

let variable = (params) =>{

 // code
}

variable(arg)



let message = function(name:string, age:number):void{
    console.log(`Your name is ${name} and age is ${age}`)
}
*/

let message2 = (name:string, age:number) => (`Your name is ${name} and age is ${age}`)

let res = message2("Priya", 27)
console.log(res);




// Method overloading - Is a process where you can declare the same method with differem parameters

// This is not allowed in JS & TS by default

// function sum1(a:number,b:number){

// }

// function sum1(a:number, b:number, c:number){

// }



// Default parameter and optional parameter

function addition(a:number=100, b:number=200){
    console.log(a+b);
}


addition(10,20)
addition(500)
addition()



// Optional Parameter (p?) - A parameter which may or may not be provided with 
// the value during the function call


function display(name?:string, age?:number){
    console.log(name, age);
}

display("Jyoti")
display("Jyoti", 24)

// Note: If you have only 1 Optional parameter or default parameter it should be
// the last parameter inside the function


// Assignment - Complete the "display" function by writing the logic to print only
// name if the age parameter has not been given any value and print both name and age
// if age value has also been given at the time of calling the function.