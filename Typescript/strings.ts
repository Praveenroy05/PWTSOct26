// 2. string - Sequence of characters - string, text, word

// 1. Single Quote ('') - String literal
// 2. Double Quote ("") - String literal
// 3. Backtick (``) - Template literal

let singleQuote1 = 'This is a single quote string'
let doubleQuote1 = "This is double quote string"

// There are 2 main purpose of defining the string by using backtick (``)

// 1. Multi-line string

let multiline1 = `This is
a multiline
string`

console.log(multiline1);

// 2. For string parametrisation - Calling a variable inside a string - 
// ${variableName} - // Data driven testing in PW

let age1 = 18

let message2  =  `Your age is ${age1}` // "Your age is "+ age1//
console.log(message2)

let char = 'c'
console.log(typeof char);


console.log("*****************************************")

let str =  "Welcome to Typescript"   


// 1. length - return the number of characters in a string
// SYntax:
// stringName.length

let size = str.length
console.log(size);

console.log(str.length)

// 2. charAt(index) - Returns the character at the specified index

console.log(str.charAt(7));

// "abcdabcd" - a2b2c2d2

// 3. concat(str1, str2,....) - merges all the string and return us a new string
console.log(str.concat(" Hello ", "JS"));
console.log(str);

// 4. includes(searchSring)
// 5. indexOf(searchValue, startIndex?)
// 6. lastIndexOf(searchValue, startIndex?)


// What is difference betwewn slice() and substring()?

// 7. slice(startIndex?, endIndex?) - Returns the portion of the string

console.log(str.slice())
console.log(str.slice(1, 9))
console.log(str.slice(-9, -1))
console.log(str.slice(9, 1)) // Empty string - startIndex should be less than endIndex

// 8. substring(startIndex, endIndex?) - Returns the portion of the string
// Note: startIndex is mandatory in substring

console.log(str.substring(5))
console.log(str.substring(1, 9))
console.log(str.substring(9, 1)) // Substring auto reverse the startIndex to endIndex

// 9. startsWith(string) - It checks if the string is starting with the specified
// string or character and return us the boolean value

console.log(str.startsWith("W"));
console.log(str.startsWith("Welcome"));
console.log(str.startsWith("w"));


// 10. endWith(string) - It checks if the string is ending with the specified
// string or character and return us the boolean value


// 11. toUpperCase() - It converts the string to upper case letter and return a new string

console.log(str)
console.log(str.toUpperCase());

// 12. toLowerCase() - It converts the string to upper case letter and return a new string
console.log(str.toLowerCase())

let str1 = "Hello JOHN"

console.log(str1.toLowerCase() === "hello john");

let str2 = "    This is an element    "

// 13. trim() - It removes the leading and trailing whitespace from a string
// and return us a new string

console.log(str2.length)
console.log(str2.trim().length);

// 14. trimStart() - It removes the leading whitespace from a string
console.log(str2.trimStart().length);

// 15. trimEnd() - It removes the trailing whitespace from a string
console.log(str2.trimEnd());


// 16. split(separator) - Splits the string into an array of substring based on
// the specified separator

let str3 = "Apple banana Mango Orange"
console.log(str3.split(" "));

let email = "praveen@qamitra.com"
let domain = email.split("@")
console.log(domain[0])

// Objects
// Class

// Setting up Playwright