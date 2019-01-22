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

let first = (value,function_Name) =>
{
    return function_Name(value * 2);
}

let second = (value,function_Name) =>
{
    return function_Name(value * 2);
}

let third = (value,function_Name) =>
{
    return function_Name(value * 2);
}


first(200,
    function_Name = (first_Result) =>
    {
        console.log("first_Result",first_Result);
        if(true)  
        {
            second(first_Result,
            function_Name = (second_Result) =>
        {
            console.log("second_Result",second_Result);
            if(true)
            {
                third(second_Result,
                function_Name = (third_Result) =>
            {
                console.log("third_Result",third_Result);
            });
            }
        });
        }
    });
