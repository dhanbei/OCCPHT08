greet();
//Function Declaration
function greet() {
    console.log("Hello");
}
//Function Expression
const squareExpression = function(num) {
    return num * num;
}

//Arrow Function
const name = (name) => {
    console.log("My name is", name);
}
console.log(squareExpression(20));

name("Tristan");