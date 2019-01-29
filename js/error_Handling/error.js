console.log("1st Statement");
console.log("2nd Statement");

try
{
    console.log("3rd Statement");
    console.log("Before Error");

    try
    {
        SAMJOEL;
    }
    catch(e)
    {
         console.log(e); // Error Resolved
        // throw e;  // throw Error
    }    

    console.log("After Error") //  if Error Resolved this Statements Will be Executed // If throw Error this statements Will not be Executed
    console.log("4th Statement");
}
catch(error)
{
    console.log("Error Catch");
    console.log(error);
}
finally
{
    console.log("Always Executed");
}

console.log("5th Statement");
console.log("6th Statement");
console.log("7th Statement");
