/*console.log("Hello World");

// single line comment

    Multi-line 
    Comment


// Ways on declaring variables

let  UPPERCASE = "UPPERCASE";
const lowercase = "lowercase";
var name ="Dani"; 

console.log(UPPERCASE);
console.log(lowercase);

UPPERCASE = "CHANGE";
console.log(UPPERCASE);

console.log(name);

*/

/*
//Basic syntax

let name = "Dani";
const age = 24;
let isStudent= false;

console.log("My name is",  name);
console.log("Age:", age);
console.log("Is", name, "a student?", isStudent);

//ADDITION
let syntaxA = 5;
let syntaxB = 10;
const sum = syntaxA + syntaxB;

console.log("The sum of", syntaxA, "and", syntaxB, "is equal to", sum);

//SUBTRACTION
let diffA = 50;
let diffB = 15;
const diff = diffA - diffB;

console.log("The difference between", diffA, "and", diffB, "is equal to", diff);

//MULTIPLICATION
let prodA = 5;
let prodB = 15;
const prod = prodA * prodB;

console.log("The product of", prodA, "and", prodB, "is equal to", prod);

//DIVISION
let qouA = 150;
let qouB = 15;
const qou = qouA / qouB;

console.log("The quotient of", qouA, "and", qouB, "is equal to", qou);

*/


//DATA TYPES
/* PRIMITIVE DATA TYPES
    - Number - 5, 5, 3.14, 10, 50,....
    - String -  "Hello", "sentence"
    - Boolean - true, false, 0, 1
    - Undefined - walang equals/no value
    - Null - intentional abnsence of any object value
    - Symbol - unique identifier that is often used as a property key in objects
*/  

let dataNum = 25;
let dataStr= "Hi";
let dataBool= false;
let dataUndef;
let car = null;
let sym = null; //for further discussion down the line


console.log("Data type of", dataNum, "as:", typeof(dataNum));
console.log("Data type of '"+ dataStr + "' as:", typeof(dataStr));
console.log("Data type of '"+ dataBool + "' as:", typeof(dataBool));
console.log("Data type of '"+ dataUndef + "' as:", typeof(dataUndef));
console.log("Data type of '"+ car + "' as:", typeof(car));
console.log("Data type of '"+ sym + "' as:", typeof(sym));

//Javascript Operators

/*
    Arithmetic Operators: +, -, *, /, %
        - 11 % 2 = 1 (odd) 
        - 20 % 2 = 0 (even)
    Assignment Operator: =, +=, -=, *=, /=, %=
        - sum = addA + addB
        - sum += addA
        - diff -= addA
        - product *= addA
        - quotient /= addA
        - let mod = 11, mod %= 2 (result = 1)
    Comparison Operators: compare value and return (true or false)
        - 5 == 5 (true), 5 != 4 (true), >, <, >=, <=,
        - 5 > 4, 10 < 20, 15 >= 15, 1 <= 3
    Bitwise Operators: Perform bitwise operations on numeric operands.
        - & (AND), | (OR), ^ (XOR), ~ (NOT)
    Unary Operators: Performs on a single operand
        - +, -, ++, --, !
        - let a = 1, a++ (2), a-- (1)
        - let databool = true, console.log(!databool)
    Ternary operator: A conditional operator that takes three operands and returns a value based on a condition.
        - condition ? expression1 : expression2
        - let a = 3, b = 5;
            console.log((a > b) ? a + " is less than " + b : b + " is greater than " + a);
    Typeof operator: returns the data type of the an operand as a string
        - typeof(3): number
        - console.log(typeof("43"));
*/


// ==== Javascript Expression ====
// Arithmetic Expression
// String Expressions
// Logical Expressions
// Assignment Expression
// Function Call Expression
let sunny = true;
let cold = false;
console.log("Sunny && Cold", sunny && cold);
console.log("Sunny && Cold", sunny || cold)
console.log("!cold", !cold)
let aNumber = 20;
let b = 10;
aNumber += b;
console.log("aNumber:", aNumber);
aNumber -= b;
console.log("aNumber:", aNumber);
aNumber *= b;
console.log("aNumber:", aNumber);
aNumber /= b;
console.log("aNumber:", aNumber);

function myFunction(num1, num2, num3, num4) {
    console.log(num1 + num2 + num3);
}
myFunction(25, 15, 40);

//Control Structures and Loops
// if statement
let power = 24;
if(power >= 18) {
    console.log("You are powerful!");
} else {
    console.log("You are weak!");
}
// if - else if - else statement
let temperature = 19;
if(temperature < 0){
    console.log("It's below feezing point!");
} else if(temperature >= 0 && temperature < 20){
    console.log("It's cool outside...");
} else if(temperature >= 20 && temperature < 40){
    console.log("It's a warm weather");
} else {
    console.log("It's Super Hot!");
}

//Switch Statement
let day = "Friday";
switch (day) {
    case 'Monday':
        console.log("It's the start of the week.");
        break;
    case 'Tuesday':
        console.log("It's the second day of the week.");
        break;
    case 'Wednesday':
        console.log("It's the third of the week.");
        break;
    case 'Thursday':
        console.log("It's the fourth day of the week.");
        break;
    case 'Friday':
        console.log("Yipee! It's friday!");
        break;
    default:
        console.log("There is no value");
}