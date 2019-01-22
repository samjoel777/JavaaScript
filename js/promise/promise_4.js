let performance_Promise = () => 
{
    return new Promise (function(resolve,reject){
        var work_Type = "over-smart";
        if(work_Type == "hard")
        {
            hike = {
                performance : "good"
            }
            resolve(hike);
        }
        else if(work_Type == "smart")
        {
            hike = {
                performance : "better"
            }
            resolve(hike);
        }
        else if(work_Type == "over-smart")
        {
            hike = {
                performance : "best"
            }
            resolve(hike);
        }
        else
        {
            hike = {
                performance : "bad"
            }
            reject(hike);
        }
    });
}

let manager_Promise = (hike) =>
{
    return new Promise (function (resolve,reject) {
        if(hike.performance === "good")
        {
            hike.status = true;
            hike.approval = "20%";
            resolve(hike);
        }
        else if(hike.performance === "better")
        {
            hike.status = true;
            hike.approval = "25%";
            resolve(hike); 
        }
        else if(hike.performance === "best")
        {
            hike.status = true;
            hike.approval = "33.3%";
            resolve(hike); 
        }
        else if(hike.performance === "better")
        {
            hike.status = true;
            hike.approval = "20%";
            resolve(hike); 
        }
        else
        {
            hike.status = false;
            hike.approval = "5%";
            reject(hike);    
        }
    });
}

let hr_Promise = (hike) =>
{
    return new Promise (function(resolve,reject){
        if(hike.status == true)
        {
            hike.hr_status = "Ok";
            resolve(hike);
        }
        else
        {
            hike.hr_status = "Not-Ok";
            reject(hike);
        }
    });
}

let accountant_Promise = (hike) =>
{
    return new Promise (function(resolve,reject){
        if(hike.hr_status == "Ok")
        {
            hike.amount = 50000;
            resolve(hike);
        }
        else
        {
            hike.amount = 0.0;
            reject(hike);
        }
    });
}

performance_Promise().then(function(hike_Response){console.log(hike_Response); return manager_Promise(hike_Response);})
.then(function(hike_Response){console.log(hike_Response); return hr_Promise(hike_Response);})
.then(function(hike_Response){console.log(hike_Response); return accountant_Promise(hike_Response)})
.then(function(hike_Response){console.log(hike_Response)})