let name = "samjoel";

let pass = 123;

let username = prompt("Enter Username");

let password = prompt("Enter Password");

if(username == name){
    console.log("User Found");
}
if(username == name && password == pass){
    console.log("Login Successfull");
}
if(username != name){
    console.log("User Not Found");
}
if(password != pass){
    console.log("Invalid Password");
}
if(username == " " && password == " "){
    alert("Login Unsuccessfull");
}


