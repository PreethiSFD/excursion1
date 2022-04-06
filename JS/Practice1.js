//Declare a variable called age,  assign a value to age (for eg 25) and log it on the console.
//Declare a variable called myname, assign a value to myname and log it on the console. 
let age = 25;
console.log(age);
let myName = "Preethi";
console.log(myName);
//Declare a constant greeting with a value of “Good day everyone”
const greeting = "Good day everyone";
console.log(greeting);
//Concatenate the values above from 1 to 4 to create a sentence like “Good day everyone. My name is Maya and I am 25 years old and my feel good factor is true/false”. 
let greet = greeting + "My name is" + myName + "I am" + age + "years old";
console.log(greet);
let newGreet = `${greeting} My name is ${myName} i am ${age} years old`;
console.log(newGreet);