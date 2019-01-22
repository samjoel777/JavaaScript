let users = [
    {
        account_Name : "SAM JOEL",
        account_Id : 311177110136,
        account_Email : "sam@gmail.com",
        account_Balance : 10000,
        account_IFSC : "HYD143"
    },
    {
        account_Name : "ABDUL JANI",
        account_Id : 311177110140,
        account_Email : "jani@gmail.com",
        account_Balance : 9000,
        account_IFSC : "HYD420"
    },
    {
        account_Name : "IRFAN SHARIFF",
        account_Id : 311177110028,
        account_Email : "irfan@gmail.com",
        account_Balance : 8000,
        account_IFSC : "HYD786"
    }
]

let value = prompt(`
1.Show Balance
2.Create Account
3.Transactions
4.Fixed Deposit
5.Exit
`);

function search_For_AccountNumber(account_No) 
{
    for(i=0 ; i < users.length ; i++ )
    {
        if(users[i].account_Id == account_No)
        {
            return users[i].account_Id;
        }
    }
}

function search_For_AccountName(account_Name) 
{
    for(i=0 ; i < users.length ; i++ )
    {
        if(users[i].account_Name == account_Name)
        {
            return users[i].account_Name;
        }
    }
}

function search_By_AccountNumber(account_No) 
{
    for(i=0 ; i < users.length ; i++ )
    {
        if(users[i].account_Id == account_No)
        {
            return users[i].account_Balance;
        }
    }
}

let search_By_AccountName = (account_Name) => 
{
    for(i=0 ; i < users.length ; i++ )
    {
        if(users[i].account_Name == account_Name)
        {
            return users[i].account_Balance;
        }
    }
}

let create_Account = function(name,email,location,balance)
{
    let obj = 
    {
        account_Name : name,
        account_Id : Math.floor((Math.random() * 10) + 311177110178),
        account_Email : email,
        account_Balance : 0,
        account_IFSC : location + Math.floor((Math.random() * 10) + 700)
        
    }
    return obj; 
}

let accountNo_To_AccountName = (account_No) => 
{
    for(i=0 ; i < users.length ; i++ )
    {
        if(users[i].account_Id == account_No)
        {
            return users[i].account_Name;
        }
    }
}

let accountName_To_AccountNumber = (account_Name) => 
{
    for(i=0 ; i < users.length ; i++ )
    {
        if(users[i].account_Name == account_Name)
        {
            return users[i].account_Id;
        }
    }
}

let same_Account_Details = (account_Name,account_No) =>
{
    if(accountName_To_AccountNumber(account_Name) == account_No && accountNo_To_AccountName(account_No) == account_Name)
    {
        return true;
    }
    
}

let accountName_To_Index = (account_Name) => 
{
    for(i=0 ; i < users.length ; i++ )
    {
        if(users[i].account_Name == account_Name)
        {
            return i;
        }
    }
}

let accountNo_To_Index = (account_No) => 
{
    for(i=0 ; i < users.length ; i++ )
    {
        if(users[i].account_Id == account_No)
        {
            return i;
        }
    }
}


if(value == 1)
{
    let Search_type = prompt(`
    1.Account No
    2.Account Name
    `)

    if(Search_type == 1)
    {

        let account_No = +prompt("Enter Account No");

        if(account_No == search_For_AccountNumber(account_No))
        {
            console.log(search_By_AccountNumber(account_No));
        }

        if(account_No != search_For_AccountNumber(account_No))
        {
            console.log("Account Not Found");
        }

        if(account_No == "" || account_No == undefined)
        {
            console.log("Invalid Values");
        }

    }

    if(Search_type == 2)
    {
        let account_Name = prompt("Enter Account Name");

        if(account_Name == search_For_AccountName(account_Name))
        {
            console.log(search_By_AccountName(account_Name));
        }

        if(account_Name != search_For_AccountName(account_Name))
        {
            console.log("Account Not Found");
        }

        if(account_Name == "" || account_Name == undefined)
        {
            console.log("Invalid Values");
        }
        
    }

}

if(value == 2)
{
    let name_CA = prompt("Enter Your Name");
    let email_CA = prompt("Enter your Email");
    let location_CA = prompt("Enter Your location");

    let new_User = create_Account(`${name_CA}`,`${email_CA}`,`${location_CA}`);

    users.push(new_User);

    console.log(users);

}

if(value == 3)
{
    let transaction_Type = prompt(`
    1.Deposit Amount
    2.WithDraw Amount
    `);

    if(transaction_Type == 1)
    {
        let account_Name = prompt("Enter Account Holder Name");

        let account_No = prompt("Enter Account No");

        if(same_Account_Details(account_Name,account_No) == true)
        {
            let index = accountNo_To_Index(account_No);

            let amount = +prompt("Enter Amount To Deposit");

            users[index].account_Balance = users[index].account_Balance + amount;

            console.log(users[index]);
            console.log(`Amount Deposited : ${amount}`)
        }

        else
        {
            console.log("Given Account Details Are Incorrect")
        }
    }

    if(transaction_Type == 2)
    {
        let account_Name = prompt("Enter Account Holder Name");

        let account_No = prompt("Enter Account No");

        if(same_Account_Details(account_Name,account_No) == true)
        {
            let index = accountNo_To_Index(account_No);

            let amount = +prompt("Enter Amount To Withdraw");

            users[index].account_Balance = users[index].account_Balance - amount;

            console.log(users[index]);
            console.log(`Amount Withdrawed : ${amount}`)
        }

        else
        {
            console.log("Given Account Details Are Incorrect")
        }
    }
}

if(value == 4)
{
    let type_Of_Customer = prompt(`
    1. Normal
    2. Senior Citizen
    `);

    let type_Of_Fixed_Deposit = prompt(`
    1.Cumulative
    2.Quarterly Payout
    3.Monthly Payout
    4.Short Term FD
    `); 

    let amount_Of_Deposit = +prompt("Enter The Amount");

    let date_Of_Fixed_Deposit = new Date();
    
    let tenure = prompt(`
    1.Years/Months/Days
    2.Days Only
    `)

    if(type_Of_Customer == 1)
    {
        if(type_Of_Fixed_Deposit = 1)
        {
            
        }
    }
}
