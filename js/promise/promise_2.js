// let father_Promise = new Promise (function(resolve,reject){
//     isPass = true;
//     if(isPass)
//     {
//         resolve("Congratulations");
//     }
//     else
//     {
//         reject("Bashing");
//     }
// })

// father_Promise.then(function(response){console.log(response);}).catch(function(reject){console.log(reject);});

let father_Promise = new Promise (function(resolve,reject){
    let isPass = true;
    if(isPass)
    {
        var result ={
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

father_Promise.then(function(result){ return result;})
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
.then(function(result){console.log(result)}).catch(function(response){console.log(response);});