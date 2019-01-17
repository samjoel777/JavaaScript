let case_Type = Number(prompt(`
Please Select Your Case Type
1.Criminal
2.Civil
3.Services
`));

if(case_Type == "")
{
    console.log("Incorrect Option Selected");
}

else if(case_Type == undefined)
{
    console.log("Exited")
}

else
{
    switch(case_Type)
    {
        case 1:
        value = "You Have Selected Criminal Case Lawyer"
        break;

        case 2:
        value = "You Have Selected Civil Case Lawyer"
        break;

        case 3:
        value = "You Have Selected Services Case Lawyer"
        break;

        default:
        value = "No Lawyer Is There For Your Case"

    }
    console.log(value);
}