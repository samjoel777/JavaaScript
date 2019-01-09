let Names = ["SAM","JOEL","SAGAR","SARELLA"];

let Value = prompt(`Enter The Value 
1.Display Elements
2.push()
3.pop()
4.unshift()
5.shift()
6.splice()
7.exit`);

if(Value == 1){
    console.log(Names);
}

if(Value == 2){
    let new_Value = prompt("Enter The Value");
    Names.push(new_Value);
    console.log(Names);
}

if(Value == 3){
    Names.pop();
    console.log(Names);
}

if(Value == 4){
    let new_Value = prompt("Enter The Value");
    Names.unshift(new_Value);
    console.log(Names);
}

if(Value == 5){
    Names.shift();
    console.log(Names);
}

if(Value == 6){
    let new_Value = prompt("Enter The Value");
    let start = prompt("Enter The Index Position");
    let del = prompt("Enter The Delete Position");
    Names.splice(start,del,new_Value);
    console.log(Names);
}

if(Value == 7){
    console.log("The Program is Exited");
}


// for (let index = 0; index < Names.length; index++) {
//     console.log(Names[index]);
    
// }