// Nested call-back Step-1

// let first = (value,function_Name) =>
// {
//     return function_Name(value * 2);
// }

// let second = (value,function_Name) =>
// {
//     return function_Name(value * 2);
// }

// let third = (value,function_Name) =>
// {
//     return function_Name(value * 2);
// }

// let function_Name = (first_Result) =>
// {
//     console.log("first_Result",first_Result);
// }

// first(10,function_Name);

// Nested call-back Step-2

// let first = (value,function_Name) =>
// {
//     return function_Name(value * 2);
// }

// let second = (value,function_Name) =>
// {
//     return function_Name(value * 2);
// }

// let third = (value,function_Name) =>
// {
//     return function_Name(value * 2);
// }


// first(40,
//     function_Name = (first_Result) =>
//     {
//         console.log("first_Result",first_Result);
//     }
// );

// Nested call-back Step-3

let first = (value,callback) =>
{
    return callback(value * 2,false);
}

let second = (value,callback) =>
{
    return callback(value * 2,false);
}

let third = (value,callback) =>
{
    return callback(value * 2,false);
}

let callback = (firstResult,error) =>
{
    return console.log("firstResult",firstResult);
}

first(10,function(firstResult,error)
{
    console.log("firstResult",firstResult);
})

first(10,
    function(firstResult,error)
{
    console.log("firstResult",firstResult);
    if(!error)
    {
        second(firstResult,
            function(secondResult,error)
            {
                console.log("secondResult",secondResult);
                if(!error)
                {
                    third(secondResult,
                        function(thirdResult,error)
                    {
                        console.log("thirdResult",thirdResult);
                    });
                }
            });
    }
});
