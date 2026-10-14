// Conditional Statement - It allows us to execute different block of code {...}
// based on different condition


// 1. if statement - This will handle only the positive scenario
// 2. if else statement - 
// 3. if else if statement
// 4. switch statement
// 5. Ternary operator (? :) - Short form of if else statement


// 1. if statement - Country from a drop down - 250 
// 2. if else statement - Check if the test have been passed or failed
// 3. if else if statement - Cross browser or cross platform 



// 1. if statement - It will execute the if block of code only if the condition id true

// Syntax:

/*
The condition will be validated, if the condition is true if block of code will be
executed else if the condition is false nothing will happen


if(condition){

}

*/


let country = ["India", "US", "UK", "UAE"]

for (let name of country){
    if(name =="US"){
        console.log(name, "Country is selected");
    }
}

let text  = "Login"

if(text == "login"){ // "Login" == "login"
    console.log("The text value of an element is matching"); 
}



// 2. if else statement - If the condition is true then if block of code will be executed
// otherwise the else block of code will be executed.

// Syntax:

/*

if (condition){
    // if block of code
}
else{
    
    // else block of code
}


*/


if(text == "login"){
    console.log("The text value of an element is matching"); 
}
else{
    console.log("The text value of an element is not matching"); 
}

// 3. if else if else statement - Will validate multiple conditions. Dependong on the
// result of the condition the specifi block  of code will be executed

// Syntax:

/*


if(condition1){
    // code - If the condition1 is true
}
else if(condition2){
    // code - If the condition2 is true
}
else if (condition3){
    // code - If the condition3 is true
}
else{
    // code - If none of the conditions are true
}


*/

let browser = "edge"

if(browser == "chrome"){ // "edge" == "chrome"
    console.log("Launch the chrome browser");
}
else if(browser == "firefox"){ // "edge" == "firefox"
    console.log("Launch the firefox browser");   
}
else if(browser == "safari"){ // "edge" == "safari"
    console.log("Launch the safari browser");
}
else{
    console.log("Invalid browser");
}


// 4. switch statement - Switch will compare with the case value. It checks if
// any of the case value is available as similar to the expression or not. If it
// is available it will directly jump to the particular block of code


// Syntax:

let i = 10

/*

switch(expression){

    case "value":
        // block of code
        break
    case "value":
        // block of code
        break
    default:
        // block of code


}

// break keyword is mandatory in switch statement - it terminates the execution


*/


let browserName = "firefox"

switch(browserName){ // switch("firefox")

    case "chrome":
        console.log("Launch the chrome browser - switch");
        break
        
    case "firefox":
        console.log("Launch the firefox browser - switch");
        break
        
    case "safari":
        console.log("Launch the safari browser - switch");
        break
    default:
        console.log("Invalid browser - switch");
 
}


// When to use if else if statement
// 1. Range available in the condition to validate
// 2. Multiple datatypes to be validated - name= "Rahul", age = 25
// 3. Logical operator for validation && , ||

// When to use switch statement
// 1. Simple validation with single datatype and single value to compare
// 2. Should not have range in comparison
// 3. No logical operator



// 5. Ternary Operator ( ? :) - This is similar to if else but it use inline

// Syntax for if else:

/*

if (condition){
    // if block of code
}
else{
    
    // else block of code
}


*/

// Syntax for Ternary Operator:

/*
condition ? execute this if true : execute this if false


*/

let age = 20;

// if (age >= 18){ // 10 >=18
//     console.log("You are eligible for voting");
// }
// else{
//     console.log("You are not eligible for voting");
// }


(age >=18) ? console.log("You are eligible for voting") : console.log("You are not eligible for voting");



// Assignment:

// Write a program to display the grade of a student


// >90 - A
// >80 && <90 - B
// >70 && <80 - C
// >50 && <70 - D
// <=50 - Failed




