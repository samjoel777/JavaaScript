let mother_Promise = new Promise (function(resolve,reject){
    let isCleaning_Done = false;
    if(isCleaning_Done)
    {
        var mother = {
            value : true,
            cleaning : "Done",
            msg : "You Can Eat Food Now"
        }
        resolve(mother); 
    }
    else
    {
        var mother = {
            value : false,
            msg : "You Cannot Eat Food" 
        }
        reject(mother);
    }
});

mother_Promise.then(function(response){ return response;})
.then(function(mother){
    if(mother.cleaning == "Done")
    {
        mother.food = "Biryani";
        return mother;
    }
})
.then(function(response){console.log(response);})
.catch(function(mother){ 
    if(mother.cleaning != "Done")
    {
        mother.food = "Make Yourself Anything"
        return mother;
    }
 })
 .then(function(error){ console.log(error); })
