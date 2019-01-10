let door_Open = "The Door is Opened";

let door_Already_Open = "The Door is Already Open";

let door_Close = "The Door is Closed";

let door_Already_Close = "The Door is Already Closed";

let outside = "Iam Outside";

let inside = "Iam Inside";

let default_Door_Value = prompt(` Choose The Default Door value
1.Door is Open 
2. Door is Close `);

let door_Value = prompt("1.Open The Door 2.Close The Door");

while(default_Door_Value == 1){
    console.log("Default Door Value: Door is Open");
    if(door_Value == 1){
        console.log(door_Already_Open);
        break;
    }
    if(door_Value == 2){
        console.log(door_Close);
        console.log(outside);
        break;
    }
}

while(default_Door_Value == 2){
    console.log("Default Door Value: Door is Close");
    if(door_Value == 1){
        console.log(door_Open);
        console.log(inside);
        break;
    }
    if(door_Value == 2){
        console.log(door_Already_Close);
        break;
    }
}
