let users = [{
    name : "SAM",
    age  : 24,
    gender : "male",
    email : "sam@gmail.com",
    password : 123,
    isActive : true,
    friends : ["Jani","Umar","Irfan"],
    family : {
        size : 6,
        name : "sarella",
        members : ["Sagar","Geeta","Swetha","Sastry","Apple"]}
    },
    {
    name : "JANI",
    age  : 25,
    gender : "male",
    email : "jani@gmail.com",
    password : 456,
    isActive : false,
    friends : ["Sam","Sudheer","Irfan"],
    family : {
        size : 2,
        name : "shaik",
        members : ["Moin","Mobin"]}
    },
    {
    name : "UMAR",
    age  : 26,
    gender : "male",
    email : "umar@gmail.com",
    password : 789,
    isActive : false,
    friends : ["Satish","Sam","Arun"],
    family : {
        size : 3,
        name : "mohammad",
        members : ["siddique","sadiq","nusrath"]}    
}];

console.log(users[0].family.name);
console.log(users.length);

let value = prompt(`Enter the Value
1.Register
2.Login
3.Exit`);

if(value == 1){
    let name= prompt("Enter your Name");
    let age = prompt("Enter your age");
    let gender = prompt("Enter your gender");
    let email = prompt("Enter your email");
    let password = prompt("Enter your password");

    if(name == "" && age == "" && gender == "" && email == "" && password == "")
    {
        console.log("Invalid Data");
    }

    if(name == undefined || age == undefined || gender == undefined || email == undefined || password == undefined)
    {
        console.log("Please Fill The Fields");
    }

    if(name == null || age == null || gender == null || email == null || password == null)
    {
        
        console.log("Null Value");
    }

    else{

    let index = 3;

    while(index > users.length-1){
        users[index] = {};
        users[index].name = name;
        users[index].age = age;
        users[index].gender = gender;
        users[index].email = email;
        users[index].password = password;

        console.log(users.length);
        console.log(users[3].name);
        
        index +=1;
        break;
    }

    for(key in users){
        console.log("key",key);
        console.log("value",users[key]);
    }

    }
    
}


if(value == 2){
    let username = prompt("Enter Username");
    let password = prompt("Enter Password");
    
    let count = 0;

    while(count < users.length){

        if(username == users[count].name && password == users[count].password)
        {
            console.log("Login Successfull");
        }
        else{
            console.log("Login Unsuccessfull");
        }

        count += 1;
        break;
        
    }

}

if(value == 3){
    console.log("The Program is Exited");
}