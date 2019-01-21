// let calFun = (num1,num2,calType) => 
// {
//     if(calType == "ADD")
//     {
//         return num1 + num2;
//     }

//     if(calType == "SUB")
//     {
//         if(num1 > num2)
//         {
//             return num1 - num2;
//         }
//         else
//         {
//             return num2 - num1;
//         }     
//     }

//     if(calType == "MUL")
//     {
//         return num1 * num2;
//     }

//     if(calType == "DIV")
//     {
//         return num1 / num2;
//     }

//     if(calType == "OTHER")
//     {
//         return "Invalid Method";
//     }
// }

// console.log(calFun(10,20,"ADD"));

let ADD = (num1,num2) =>
{
    return num1 + num2;
} 

let SUB =  (num1,num2) =>
{
    if(num1 > num2)
    {
        return num1 + num2 ;
    }
    else
    {
        return num2 - num1;
    }
}

let MUL = (num1,num2) =>
{
    return num1 * num2;
}

let DIV = (num1,num2) =>
{
    return num1 / num2
}

let OTHER = (num1,num2) =>
{
    return "Invalid calType";
}

let calFun = (num1,num2,calType) =>    // calType is a callback Function which is passed as an Argument in calFun Function 
{
    return calType(num1,num2);
}

console.log(calFun(10,20,SUB));