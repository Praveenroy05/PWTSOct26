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




