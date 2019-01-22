let first = (value) =>
{
    return value * 2;
}

let second = (value) =>
{
    return value * 2;
}

let third = (value) =>
{
    return value * 2;
}

// let promise = new Promise(callback(resolve,reject)) // promise syntax

// let promise = new Promise(
//     function_Name = (resolve,reject) =>
//     {
//         resolve(2000);
//     });

// let promise1 = new Promise(
//     function_Name = (resolve,reject) =>
//     {
//         reject(1000);
//     });

let promise2 = new Promise(
    function (resolve,reject)
    {
        var bid = 800;
        if(bid >= 1000)
        {
            resolve(bid)
        }
        else
        {
            var error = {
                name : "Not Applicable",
                msg : "Minimun Bid is 1000"
            }
            reject(error);
        }
    });

// promise.then(first).then(second).then(third).then(function_Name = (response) => { console.log(response); });

// promise1.then(first).then(second).then(third).catch(function_Name = (error) => { console.log("Iam Rejected",1000); });

// promise2.then(first).then(second).then(third).then(function_Name = (response) => { console.log(response); });

// promise2.then(first).then(second).then(third).then(function_Name = (error) => { console.log("Iam Rejected",error); });

promise2.then(function (response) { console.log(response) } , function (error) { console.log("Iam Rejected",error); });
