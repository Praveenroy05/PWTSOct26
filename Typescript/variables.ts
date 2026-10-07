// Variable - Variable is a storage/container, which stores either a single value or multiple values

// There are 3 ways in which we declare a variable

// Syntax:
// keyword(var/let/const) variableName = value - JS
// keyword(var/let/const) variableName:datatype(optional) = value - TS

let i = 20
i = 50

// const j:number = 60

 

// j = 100

// var - In modern JS & TS we do not use var keyword  - ES6 - 2015
// let - If the value of the variable can change at any point of time
// const - To declare a constant variable


const k:number = 60
console.log(k)

// How to execute JS file - node PathOfTheFile
// How to execute TS file - tsx PathOfTheFile

const l:number = 60
console.log(l)

let b = "Java" // Global scoped variable



// Scope of variables
// 1. Local scope variable - When you try to declare a variable inside the {...}
// 2. Global scope variable - When you try to declare a variable outside of the {...}


{
    let b= 100 // Local scoped variable
    console.log("line# 43", b); 
    console.log(k);
    
}

 console.log("line# 48", b)



 // var -

 // 1. scope - Functional or global
 // 2. Whenever you declare variable using "var" keyword it can be re-declared 
 // and can also re-initialised.
 // 3. Hoisting: We can access the variable before it's declaration
 // 4 It is not mandatory to assign the value of the variable at the time of declaration




 var var1

 var1 = 900

console.log(num)

 
 var num = 90  // initialisation

 num = 150 // re-initialisation

 var num1 = 600// Declaration
 var num1 = 100 // re-declaration
 var num1 = 10000

 console.log(num1);
 


 var lang = "JS"

 {
    var lang = "Python"
 }


 console.log(lang);
 



 function name1()
 {
    var language = "TS"
    console.log(language);

 }

 name1()

 //console.log(language);
 

 // let
 // 1. scope - Block scoped {...} 
 // 2. Whenever you declare variable using "let" keyword it can be re-initialised
 // but cannot be re-declared.
 // 3. Hoisting : We cannot acess the variable before it's declaration
 // 4 It is not mandatory to assign the value of the variable at the time of declaration


//console.log(name2);


 let name2 = "Rahul"
name2 = "Priya"

console.log(name2);

 


 let lang1 = "TS" // global

 {
    let lang1 = "JS" // local
 }

 console.log(lang1);
 

// const

// 1. Scope - Block scoped {...}
// 2. Whenever you declare variable using "const" keyword it cannot be re-initialised
 // and cannot be re-declared.
// 3. Hoisting : We cannot acess the variable before it's declaration
// 4. It is MANDATORY to assign the value of the variable at the time of declaration


{
    const a = "Go" // local scoped
}

console.log(a);



const a  = "variable" // Global

// a = "hjdkjgdh" // re-initialisation



 // var -
 // 1. scope - Functional or global
 // 2. Whenever you declare variable using "var" keyword it can be re-declared 
 // and can also re-initialised.
 // 3. Hoisting: We can access the variable before it's declaration
 // 4 It is not mandatory to assign the value of the variable at the time of declaration


 // let
 // 1. scope - Block scoped {...} 
 // 2. Whenever you declare variable using "let" keyword it can be re-initialised
 // but cannot be re-declared.
 // 3. Hoisting : We cannot acess the variable before it's declaration
 // 4 It is not mandatory to assign the value of the variable at the time of declaration


// const
// 1. Scope - Block scoped {...}
// 2. Whenever you declare variable using "const" keyword it cannot be re-initialised
 // and cannot be re-declared.
// 3. Hoisting : We cannot acess the variable before it's declaration
// 4. It is MANDATORY to assign the value of the variable at the time of declaration
