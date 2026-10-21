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

function add(a:number, b:number){
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






