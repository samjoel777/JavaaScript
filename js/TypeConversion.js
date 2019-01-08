// This are for debbuging purpose
// alert("This is Working");
// prompt("Enter your name");
// confirm("Are you single");
// console.log("Hello");
// console.warn("Hello");
// console.info("Hello");
// console.error("Hello");

//variable declaration

// var firstName = "Sam"

// var lastName = "Joel"

// console.log(firstName+" "+lastName);

// var msg = "India is great"

// var msg = "India is Beautiful"

// console.log(msg);

// 'use strict';

// alert("Welcome to the calculator");

// let num1= Number(prompt("Enter First no"));

// let num2= Number(prompt("Enter Second no"));

// let num3= Number(prompt("Enter Third no"));

// console.log(`Addition:${(num1+num2)+num3}`);

'use strict';

let data = prompt("Enter Value");
console.log(data);
console.log(typeof data);

console.log(`Number(Boolean) Conversion: ${Number(Boolean(data))}`);
console.log(`Number(Boolean) Type Conversion: ${typeof Number(Boolean(data))}`);
console.log(`Number(String) Conversion: ${Number(String(data))}`);
console.log(`Number(String) Type Conversion: ${typeof Number(String(data))}`);


console.log(`String(Boolean) Conversion: ${String(Boolean(data))}`);
console.log(`String(Boolean) Type Conversion: ${typeof String(Boolean(data))}`);
console.log(`String(Number) Conversion: ${String(Number(data))}`);
console.log(`String(Number) Type Conversion: ${typeof String(Number(data))}`);

console.log(`Boolean(String) Conversion: ${Boolean(String(data))}`);
console.log(`Boolean(String) Type Conversion: ${typeof Boolean(String(data))}`);
console.log(`Boolean(Number) Conversion: ${Boolean(Number(data))}`);
console.log(`Boolean(Number) Type Conversion: ${typeof Boolean(Number(data))}`);

console.log(Number(null));
console.log(String(null));
console.log(Boolean(null));

console.log(Number(undefined));
console.log(String(undefined));
console.log(Boolean(undefined));







