// Error Handling Using Constructor

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
                // var error = {
                //     name : ReferenceError,
                //     message : "Address is not an user object" 
                // }

                let error = new ReferenceError("Address Field is not an user object");
                // let error = new SyntaxError("Address Field is not an user object"); 
                // let error = new Error("Address Field is not an user object");  
                
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
        console.log("Inner Catch");
        if(error.name == "ReferenceError")
        {
            return error.stack;     
        }
        else
        {
            throw error;
        }
    }
}

try
{
    var res = loginUser("sam@gmail.com","sam123")

    console.log(res);
}
catch(error)
{
    console.log("Outer Catch");
    if(error.name === "SyntaxError")
    {
        console.log(error.stack);
    }
    else
    {
        console.log(error.stack);
    }
    
}
