let username = prompt("Enter the Username");

let password = prompt("Enter the Password");

let gender1 = confirm("Are you Male");

let age = +prompt("Enter your age");



if (username == "" || password == "")
{
    alert("Invalid Username and Password");
}
else if (age >=18 && gender1 == false){
    confirm("Welcome to Female Login");
}
else if (age >=18 && gender1 == true){
    confirm("Welcome to male Login");
}
else if(age == "" || username == false || password == false || age == false ){
    alert("Please Fill Details");
}
else if (age <=18 )
{
    alert("Your not Eligible");
}
else{
    alert("Invalid Details");
}



