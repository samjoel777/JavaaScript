// calculator using arrow function and call back function

let add = (num1,num2) =>
{
    return num1 + num2;
}

let sub = (num1,num2) =>
{
    if(num1 > num2)
    {
        return num1 - num2;
    }
    else 
    {
        return num2 - num1;
    }
}

let mul = (num1,num2) =>
{
    return num1 * num2;
}

let div = (num1,num2) =>
{
    return num1/num2;
}

let other = (num1,num2) =>
{
    return "Invalid";
}

let calculator = (num1,num2,cal_Type) =>

{
    return cal_Type(num1,num2);
}

console.log(calculator(2,7,div));