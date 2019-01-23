let mother_Promise_1 = () =>
{
    return new Promise (function (resolve,reject){
        var is_Cleaning_Room = true;
        if(is_Cleaning_Room)
        {
            activities = {
                cleaning : true
            }
            resolve(activities);
        }
        else
        {
            activities = {
                cleaning : false
            }
            reject(activities);
        }
    });
}

let mother_Promise_2 = (activities) =>
{
    return new Promise (function(resolve,reject){
        if(activities.cleaning == true)
        {
            activities.remove_Garbage = true
            resolve(activities);
        }
        else
        {
            activities.remove_Garbage =false
            reject(activities);
        }
    });
}

let mother_Promise_3 = (activities) =>
{
    return new Promise (function(resolve,reject){
        if(activities.remove_Garbage == true)
        {
            activities.room_Freshner = true
            resolve(activities);
        }
        else
        {
            activities.room_Freshner = false
            reject(activities);
        }
    });
}

let mother_Promise_4 = (activities) =>
{
    return new Promise (function(resolve,reject){
        if(activities.remove_Garbage == true)
        {
            activities.food = "Biryani"
            resolve(activities);
        }
        else
        {
            activities.food = "No Food"
            reject(activities);
        }
    });
}

mother_Promise_1()
.then(function(response){ return mother_Promise_2(response); })
.then(function(response){ console.log(response); return mother_Promise_3(activities) })
.then(function(response){ console.log(response); return mother_Promise_4(activities) })
.then(function(response){ console.log(response); })
.catch(function(error){ console.log(error); return mother_Promise_2(error); })
.catch(function(error){ console.log(error); return mother_Promise_3(error); })
.catch(function(error){ console.log(error); return mother_Promise_4(error); })
.catch(function(error){ console.log(error); });
