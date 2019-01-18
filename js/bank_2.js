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
2.Exit
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

}


