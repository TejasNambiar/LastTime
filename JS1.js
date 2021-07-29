//JavaScript program to swap two variables

//take input from the users
let a = prompt('Enter first variable: ');
let b = prompt('Enter second variable: ');

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value after swapping: ${a}`);
console.log(`The value after swapping: ${b}`);