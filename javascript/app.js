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
*/  



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



// Loops: for loop
for(let index = 0; index < 4; index ++){ // 0, 1, 2, 3, 4, 5, 6
    console.log("Count:", index);
}
// Loops: while loop
let count = 1;
while(count <= 5){
    console.log("Count:", count);
    count++;
}
// Loop: do-while loops
let i = 1;
do {
    console.log("Do-While Count:", i);
    i++;
} while (i <= 5)



//Arrays
let fruits = ['apple', 'bayabas', 'pineapple', 'mango', 'pomelo', 'grapes'];
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Last fruit:", fruits[fruits.length - 1]);
console.log("Original Array:", fruits);
//Modifying array elements
fruits[1] = 'Star Apple';
fruits.pop();
fruits.push('Strawberry');
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Last fruit:", fruits[fruits.length - 1]);
console.log("Modified Array:", fruits);
for(let i = 0; i < fruits.length; i++){
    console.log("Fruit " + i + ":", fruits[i]);
}
let colors = ['purple', 'cyan', 'yellow', 'magenda', 'blue', 'fuschia'];
colors.forEach(function(color){
    console.log(color);
})


let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//Arrays Methods
console.log("Array Length:", numbers.length);
console.log("Index of 8:", numbers.indexOf(8));
console.log("Includes 9:", numbers.includes(9));
console.log("Includes 5:", numbers.includes(5));
console.log("Joined Array:", numbers.join(" "));
console.log("Sliced Array:", numbers.slice(5,7));
let removedElements = numbers.splice(1, 4);
console.log("Removed elements:", removedElements);
console.log("Updated Array:", numbers);



//Object Literals
const person = {
    firstName: 'Tristan',
    lastName: 'Pogi',
    age: 21,
    hobbies: ['reading', 'playing', 'jumping'],
    greet: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}. Nice to meet you!`);
    },
};
console.log(person.firstName);
console.log(person.age);
person.greet();
person.nationality = "Filipino";
console.log(person.nationality);
person.introduce = function () {
    console.log(`My hobbies are ${this.hobbies.join(", ")}.`)
}
person.introduce();
const address = {
    street: "123 Street",
    city: "456 city",
    country: "Philippines"
};
person.address = address;
console.log(person.address.country);
console.log(person);