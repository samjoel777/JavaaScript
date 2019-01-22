// let showMsg = (a,b) =>
// {
//     console.log(a);
//     console.log(b);
// }

// showMsg(10,20);
// showMsg(true,
//     {
//         name: "SAM JOEL",
//         gender : "MALE"
//     });

let showMsg = (callback,y) =>     // let showMsg = (x,y) =>
{                                 // {
    console.log(callback);        // console.log(x);
    console.log(y);               // console.log(y);               
    callback();                   // x();
    alert("Iam Show Msg")         //
}                                 // }

let showCall = () =>
{
    alert("Iam Show Call");
    return 0;
}
showMsg(showCall,20);



