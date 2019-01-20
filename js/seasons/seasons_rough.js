// let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// let day = ["Monday","Tuesday","Wednesday","Thursday)","Friday","Saturday","Sunday"];

// let date = [];

// let January;
// let February;
// let March;
// let April;

let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// for(index in months){
//     let value = (Number(index) + 1,months[index]);


//     let month = Number(prompt(value));
// }

let value = function myFunction (months){
    for(index in months){
    console.log(months[index]);
    return months;
    }
};
value(months);

console.log(typeof value()); 
// let month = alert(value(months));

switch(month){

    case 1:
    case 2:
    case 3:
    case 4:
    season = "season1"
    break;

    case 5:
    case 6:
    case 7:
    case 8:
    season = "season2"
    break;
    
    case 9:
    case 10:
    case 11:
    case 12:
    season = "season3"
    break;
}

// console.log(season);