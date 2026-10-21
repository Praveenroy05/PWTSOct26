let a = "10"
a = 10
a= true
a = null
a = undefined
console.log(a)


// Loops - Will execute the block {...} of code multiple time until the condition is false

//Print 1 to 5

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)


console.log("*************************************************")

// for(let i=1; i<6; i++){
//     console.log(i) 
// }

// 1. for loop
        // a. for loop - Traditional for loop - 
        // When we know that how many times we have to run the iteration

        // b. for of loop - Loop through the iterable objects like array, string,...
        // c. for in loop - Loops through the properties of an object
        // {key : value}  - {name : "Rahul"}
// 2. while loop - When we do not know how many times we have to run the iteration
// 3. do while loop - When we want to execute the block of code at least once before we check the condition



// Drop down - Countries - for loop - 250
// Calendar date - while loop
// Search a product - Pagination 
// 


// 1. for loop

// Syntax:

/*

for(initialisation; condition; incerement/decrement){

    // block of code

}

// Initialisation - Initialize the value of the variable to start the iteration
// Condition - Condition to check whether the loop should continue or not
// increment/decrement - Increase or decrease the value of the variable to 
// move towards the condition - i++/i--


*/

for(let i =1; i<=5; i++){ // 6<=5
    console.log(i) // 1 2 3 4 5
}


console.log("*********************************")

// 10 ...1

for(let i=10; i>0; i--) // i>0 , i>=1
{
    // 10.....1
    if(i==5){
        continue
    }
    console.log(i); 
}


// break - Exit a loop when a certain condition is met
// continue - To skip the current iteration and move to the next iteration


// 2. while loop

/*

initialization - let j = 1

while(condition){
    // code
    increment/decrement
}


*/


let attempt = 1

while(attempt>=3){
    console.log("Please enter the username or password again");
    attempt++
}


console.log("***********************************")

// 3. do while loop

/*

initialisation - let k =1

do
{
    // code be to executed
}while(condition)


*/


let attempts = 1

do{
    console.log("Please enter your usename or password - do");
    attempts++
}while(attempts>=3);


function loginIntoApplication1(username, password){
    console.log("Fill the username " + username)
    console.log("Fill the password " + password)
    console.log("Click on the login button")   
}

loginIntoApplication1()