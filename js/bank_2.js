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





let show_Balance = () =>
{

        let index = 0;

        let Balance = [];  
        
        while(index < users.length)
        {
            Balance[index] = users[index].account_Balance;

            index ++;

            continue;

        }

        return Balance;
        
} 

let show_Id = () =>
{

        let index = 0;

        let ids = [];  
        
        while(index < users.length)
        {
            ids[index] = users[index].account_Id;

            index ++;

            continue;

        }

        return ids;
        
}



let value = prompt(`
1.Show Balance
2.Create Account
3.Transactions
4.Exit
`)

if(value == 1)
{
    let Search_type = prompt(`
    1.Account No
    2.Account Name
    `)

    if(Search_type == 1)
    {
        let rough = show_Balance();

        let rough_1 = show_Id();

        let account_No = +prompt("Enter Account No");

        function search() 
        {
            for(i=0 ; i < users.length ; i++ )
            {
                if(users[i].account_Id == `${account_No}` )
                {
                    return users[i].account_Id;
                }
            }
        }
        
        let id = 0;

        while(id < users.length)
        {
            if(account_No == users[id].account_Id)
            {
              console.log(users[id].account_Balance);  
            }
            id += 1;

            // let search_1 = search();

            if(account_No != search())
            {
                console.log("Account Not Found");
                
            }

            if(account_No == "" || account_No == undefined)
            {
                console.log("Invalid Values");
                break;
            }
            
        }

    }

    if(Search_type == 2)
    {
        let rough = show_Balance();

        let rough_1 = show_Id();

        let account_Name_1 = prompt("Enter Account Name");

        function search() 
        {
            for(i=0 ; i < users.length ; i++ )
            {
                if(users[i].account_Name == `${account_Name_1}` )
                {
                    return users[i].account_Name;
                }
            }
        }
        
        let id = 0;

        while(id < users.length)
        {
            if(account_Name_1 == users[id].account_Name)
            {
              console.log(users[id].account_Balance);  
            }
            id += 1;

            // let search_1 = search();

            if(account_Name_1 != search())
            {
                console.log("Account Not Found");
                
            }

            if(account_Name_1 == "" || account_Name_1 == undefined)
            {
                console.log("Invalid Values");
                break;
            }
            
        }

        

    }

}

if(value == 2)
{
    let name_CA = prompt("Enter Your Name");
    let email_CA = prompt("Enter your Email");
    let location_CA = prompt("Enter Your location");

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

    let deposit_Amount = () =>
    {
         
        
    }

    if(transaction_Type == 1)
    {
        let account_No = +prompt("Enter The Account No");

        function search_1() 
        {
            for(i=0 ; i < users.length ; i++ )
            {
                if(users[i].account_Id == `${account_No}` )
                {
                    return users[i].account_Id;
                }
            }
        }

        let index = 0;

        while(index < users.length)
        {
            if(account_No == users[index].account_Id)
            {
                let amount = +prompt("Enter Amount To Deposit");

                users[index].account_Balance = users[index].account_Balance + amount;

                console.log(users[index])

                console.log("Amount Deposited");
            }
            index += 1;
        }

        if(account_No != search_1())
        {
            console.log("Account Not Found");
        }

        if(account_No == "" || account_No == undefined)
        {
            console.log("Invalid Values");
        }
    }

    if(transaction_Type == 2)
    {
        let account_No = +prompt("Enter The Account No");

        function search_1() 
        {
            for(i=0 ; i < users.length ; i++ )
            {
                if(users[i].account_Id == `${account_No}` )
                {
                    return users[i].account_Id;
                }
            }
        }

        let index = 0;

        while(index < users.length)
        {
            if(account_No == users[index].account_Id)
            {
                let amount = +prompt("Enter Amount To WithDraw");

                users[index].account_Balance = users[index].account_Balance - amount;

                console.log(users[index])

                console.log(`${amount} Withdrawed`);
            }
            index += 1;
        }

        if(account_No != search_1())
        {
            console.log("Account Not Found");
        }

        if(account_No == "" || account_No == undefined)
        {
            console.log("Invalid Values");
        }
    }
}




