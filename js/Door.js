let value = ["Door Is Open","Door Is Close"]

let Door_Open = "Door Is Open";

let Door_Close = "Door Is Close"

let Open = "Door Is Already Open";

let Close = "Door Is Already Closed";

let Out = "Iam Outside";

let  In = "Iam Inside";

let rand = value[Math.floor(Math.random() * value.length)];
 
let value1 = prompt(`1.${Door_Open} 2.${Door_Close}`);

if(value1 == 1){
    if(rand == Door_Open){
        console.log(`${Open}`);
    }
    else{
        console.log("Door Is Opened");
        console.log(`${In}`)
    }   
}

if(value1 == 2){
    if(rand == Door_Close){
        console.log(`${Close}`);
        console.log(`${Out}`)
    }
    else{
        console.log("Door Is Closed")
        
    }
}

if(value1 == "" || value1 == undefined){
    alert("No Value Entered")
}