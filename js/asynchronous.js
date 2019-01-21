//synchronous 
// console.log("1 Statement");
// console.log("2 Statement");
// console.log("3 Statement");
// console.log("4 Statement");
// console.log("5 Statement");

//asynchronous
console.log("1 Statement");
console.log("2 Statement");
setTimeout (() => {
    console.log("3 Statement");
},1000);
console.log("4 Statement");
console.log("5 Statement");

