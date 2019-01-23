let check_DataBase_Connectivity = () =>
{
    return new Promise(function (resolve,reject){
        var db_Connected = "Half-Way";
        if(db_Connected === "Connected")
        {
            database = {
                value : true,
                msg : "Database Connected"
            }
            resolve(database);
        }
        else if(db_Connected === "Half-Way")
        {
            database = {
                value : true,
                msg : "Please Check DataBase Connection"
            }
            reject(database);
        }
        else
        {
            database = {
                value : false,
                msg : "Database Not Connected"
            }
            reject(database);
        }
    });
}

let execute_Query = (database) =>
{
    return new Promise(function (resolve,reject){
        if(database.value)
        {
            database.query_value = true;
            database.query_msg ="Query Execution Done";
            resolve(database);
        }
        else
        {
            database.query_value = false;
            database.query_msg ="Query Execution Not Done";
            reject(database);
        }
    })
}

check_DataBase_Connectivity()
.then(function(response){ console.log(response); return execute_Query(database); })
.then(function(response){ console.log(response); })
.catch(function(error){ console.log(error); return execute_Query(database); })
.catch(function(error){ console.log(error); });