let father_Promise = new Promise (function(resolve,reject){
    let isPass = false;
    if(isPass)
    {
        var result = {
            pass : true,
            msg : "Congratulations"
        }
        resolve(result);
    }
    else
    {
        var result = {
            pass : false,
            msg : "Bashing"
        }
        reject(result);
    }
});

father_Promise
.then(function(result){ return result;})
.then(function(result){
    if(result.pass)
    {
        result.bike = {
            Name : "FZ",
            color : "Gold" 
        }
        return result;
    }
    else
    {
        result.bike = "No bike"
        return result;
    }
})
.then(function(result){console.log(result)}).catch(function(error){console.log(error);});
