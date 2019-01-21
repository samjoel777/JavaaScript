// Nested call-back 

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