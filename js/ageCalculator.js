//Example 1

// let age_Cal = function age_Calculator(name,yearOfBirth)
// {
//     let age = 2019 - yearOfBirth;
//     return {
//         name : name,
//         age : age};
// } 

// console.log(age_Cal("sam",1994));

//Example 2

// let age_Cal = function age_Calculator(name,yearOfBirth)
// {
//     let age;
//     return {
//         name : name,
//         age : 2019 - yearOfBirth};
// } 

// console.log(age_Cal("Harini",1995));

//Example 3

// let age_Cal = function (name,yearOfBirth)
// {
//     let age = 2019 - yearOfBirth;
//     return {
//         name : name,
//         age : age};
// } 

// let retirement_Age = function(name,yearOfBirth)
// {
//     let person = age_Cal(name,yearOfBirth);
//     let ret_Age = 60 - person.age;
//     return ret_Age;
// }

// // console.log(age_Cal("sam",1994));
// console.log(retirement_Age("sam",1994));

//Example 4

// let age_Cal = function (name,yearOfBirth)
// {
//     let age = 2019 - yearOfBirth;
//     return {
//         name : name,
//         age : age};
// } 

// let retirement_Age = function(name,yearOfBirth)
// {
//     let person = age_Cal(name,yearOfBirth);
//     person.ret_Age = 60 - person.age;
//     return person;
// }

// // console.log(age_Cal("sam",1994));
// console.log(retirement_Age("sam",1994));

//Example 5

// let age_Cal = function (name,yearOfBirth)
// {
//     let age = (yearOfBirth < 2019) ? 2019 - yearOfBirth :0;
//     return {
//         name : name,
//         age : age};
// } 

// let retirement_Age = function(name,yearOfBirth)
// {
//     let person = age_Cal(name,yearOfBirth);
//     if(person.age > 0 && person.age < 60)
//     {
//         person.ret_Age = 60 - person.age;
//     }
//     else if(person.age > 60)
//     {
//         person.ret_Age = "Already Retired";
//     }
//     else
//     {
//         person.ret_Age = "Invalid";
//     }
//     return person;
// }

// // console.log(age_Cal("sam",1994));
// console.log(retirement_Age("sam",1994));

// Example 6

// let person = {

//     name : "SAM JOEL",
//     yearOfBirth : 1994

// }

// person.calculateAge = function (yearOfBirth)
// {
//     return 2019 - yearOfBirth;
// }

// console.log(person.calculateAge(1994));

// Example 7

// let person = {

//     name : "Harini",
//     yearOfBirth : 1995,
//     calculateAge : function (yearOfBirth)
//     {
//         return 2019 - yearOfBirth;
//     }

// }



// console.log(person.calculateAge(1995));

// Example 8 

// let person = {

//     name : "Padmanandam",
//     yearOfBirth : 1935,
//     calculateAge : function ()
//     {
//         return 2019 - this.yearOfBirth;
//     }

// }



// console.log(person.calculateAge());
// console.log(person.yearOfBirth);

// Example 9 

var users = 
{
    name : "John Smith",
    yearOfBirth : 1947,
    calculateAge : function()
    {
        return 2019 - this.yearOfBirth;
    }
}

users.retirement_Age = function()
{
    var age = this.calculateAge();
    this.rage = 60 - age;
    return users;
}

console.log(users.calculateAge());

console.log(users.retirement_Age());