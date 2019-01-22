// Nested call-back 

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

first(50,
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