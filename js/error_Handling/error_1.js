// Error is an Object having 3 values

console.log("Start");

try
{
    console.log("Before Error");
    SAM; // Error
    console.log("After Error"); // Not Executed ; No statements will be executed after Error ; if not error resolved here ;
}
catch(error)
{
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
finally
{
    console.log("Always Executed");
}

console.log("Stop");