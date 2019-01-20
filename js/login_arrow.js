let users = [
    {
        user_Name : "SAM JOEL",
        user_Id : 311177110136,
        user_Password : 123
    },
    {
        user_Name : "ABDUL JANI",
        user_Id : 311177110140,
        user_Password : 456
    },
    {
        user_Name : "IRFAN SHARIFF",
        user_Id : 311177110028,
        user_Password : 789
    }
]

let username_To_Password = (user_Name) =>
{
    let index = 0;
    while(index < users.length)
    {
        if(users[index].user_Name  == user_Name)
        {
            return users[index].user_Password;
        }
        index += 1;
    }
}

let password_To_Username = (user_Password) =>
{
    let index = 0;
    while(index < users.length)
    {
        if(users[index].user_Password  == user_Password)
        {
            return users[index].user_Name;
        }
        index += 1;
    }
}

let validate_Users = (user_Name,user_Password) =>
{
    if(user_Name = password_To_Username(user_Password) && user_Password == username_To_Password(user_Name))
    {
        return true;
    }
}

let value = prompt(`
1.Login
2.Exit
`);

if(value == 1)
{
   let user_Name = prompt("Enter Your Username");
   let user_Password = prompt("Enter Your Password");

   if(validate_Users(user_Name,user_Password) == true)
   {
       console.log("Successful");
   }

   if(validate_Users(user_Name,user_Password) != true)
   {
       console.log("Login UnSuccessful");
   }
   
}