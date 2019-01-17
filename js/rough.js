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

    // let find_Account = function myFunction(accounts)
    // {
    //     for(key in accounts)
    //     {
    //         account_Id_2 = accounts[key].account_Id;
    //         console.log(accounts[key]);
    //     }
    // }

    // find_Account(accounts)

    let input_1a = Number(prompt("Enter Account No (Find Account)"));

    // console.log(typeof input_1a);

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

        if(input_1a == accounts[key].account_Id)
        {
            let find_Account = function myFunction(accounts)
            {
                for(key in accounts)
                {
                    if(input_1a == accounts[key].account_Id)
                    {
                        console.log(accounts[key]);
                    }

                    // account_Id_2 = accounts[key].account_Id;
                    // console.log(accounts[key]);

                    // if(input_1a != accounts[key].account_Id)
                    // {
                    //     console.log("Unsuccessfull");
                    // }
                }
            }

            find_Account(accounts);
        }

        // if(input_1a != typeof Number)
        // {
        //     console.log("Invalid Account No");
        //     break;
        // }

        // else if(input_1a != accounts[key].account_Id)
        // {
        //     console.log("Account Not Found");
        // }

        // let new_Input_1a = accounts[key].account_Id;

        // while(input_1a == new_Input_1a)
        // {
        //     console.log("Account Found");
        //     break;
        // }
    }

}

if(input_1 == 2)
{
    let input_Balance_1;

    let input_No_Balance;

    input_Balance_1 = Number(prompt("Enter The Account No"));

    let input_Balance = function Balance (accounts)
    {

        for(key in accounts)
        {            

            while(input_Balance_1 == accounts[key].account_Id)
            {
                console.log(accounts[key].account_Balance);
                break;                

            }

        }

    }

    for(key in accounts)
    {

        if(input_Balance_1 == accounts[key].account_Id)
        {
            input_Balance(accounts);
        }

        if(input_Balance_1 == "")
        {
            console.log("No Account No Given");
            break;
        }

        if(input_Balance_1 == undefined)
        {
            console.log("Cancelled Balance Transaction");
            break;
        }

        // if(input_Balance_1 != typeof Number)
        // {
        //     console.log("Invalid Account No");
        //     break;
        // }

        // while(input_Balance_1 == accounts[key].account_Id)
        // {
            
        // //    if(input_Balance_1 == accounts[key].account_Id)
        // //    {
        // //         input_Balance(accounts);
        // //         break;
        // //    }

        //     if(input_Balance_1 != accounts[key].account_Id)
        //     {
        //         console.log("Invalid Account No");
        //         break;
        //     }
        // }

    }



}




