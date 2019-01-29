// Custom Error

var user = {
    name : "SAM JOEL",
    email : "sam@gmail.com",
    password : "sam123",
    // address : "HYD"
}

var loginUser = function(email,password)
{
    try
    {
        if(user.email == email && user.password == password)
        {
            if(user.address == undefined)
            {
                let error = {
                    name : "Reference Error",
                    message: "Address field is not an user object"
                }
                error.stack = error.name +  " "  + error.message 
                
                throw error;
            }
            else
            {
            return "welcome" + " " + user.name;
            } 
        }
        else
        {
            return "not-welcome";
        }
    }
    catch(error)
    {
        console.log(error);
        return "not-welcome"
    }
}


var res = loginUser("sam@gmail.com","sam123")

console.log(res);