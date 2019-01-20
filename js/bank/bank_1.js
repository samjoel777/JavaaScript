let  accounts = [
    {
    account_Id : 311177110136,
    account_Name : "SAM",
    account_Bank : "Narsingi",
    acccount_email : "sam@gmail.com",
    account_IFSC : "HYD143",
    account_Balance : 10000
    },
    {
    account_Id : 311177110140,
    account_Name : "JANI",
    account_Bank : "Kothaguda",
    acccount_email : "jani@gmail.com",
    account_IFSC : "HYD786",
    account_Balance : 9000
    },
    {
    account_Id : 311177110028,
    account_Name : "IRFAN",
    account_Bank : "Madras",
    acccount_email : "irfan@gmail.com",
    account_IFSC : "MD420",
    account_Balance : 8000   
    }
]

// console.log(accounts);

let input_1 = Number(prompt(`
Enter The Input
1.Find Account
2.Balance
3.Exit
`));

// console.log(typeof input_1);

if(input_1 == "")
{
    console.log("No Input");
}

if(input_1 == undefined)
{
    console.log("Cancelled");
}

if(input_1 != 1 && input_1 != 2 && input_1 != 3)
{
    console.log("Invalid Input Given");
}

if(input_1 == 1)
{
    // let find_Account = prompt("Enter Account No");

    // if(find_Account == accounts[0].account_Id)
    // {
    //     console.log("Account Found");
    // }   

    let find_Account = function myFunction(accounts)
    {
        for(key in accounts)
        {
            account_Id_2 = accounts[key].account_Id;
            console.log(account_Id_2);
        }
    }

    // find_Account(accounts)

    let input_1a = prompt("Enter Account No");

    for (key in accounts)
    {
        if(input_1a == "")
        {
            console.log("No Input Given")
        }

        if(input_1a == undefined)
        {
            console.log("Cancelled");
        }

        // if(input_1a == accounts[key].account_Id)
        // {
        //     console.log("Account Found");
        // }

        let new_Input_1a = accounts[key].account_Id;

        while(input_1a == new_Input_1a)
        {
            console.log("Account Found");
            break;
        }
    }

}

if(input_1 == 2)
{
    let input_1b = prompt("Enter The Account No");
    for(key in accounts)
    {
        let new_Input_1b = accounts[key].account_Id;

        while(input_1b == accounts[key].account_Id)
        {
            console.log(accounts[key].account_Balance);
            break;
        }

    }    
}