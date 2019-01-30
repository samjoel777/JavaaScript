console.log(document.body);

document.body.setAttribute("background","H:/JavaScript/media/dice.jpg");

let h2 = document.createElement('h2');
h2.innerText = "Welcome To Dice Game"
document.body.appendChild(h2);

let button = document.createElement('button');
button.innerText = "Press to Play";
button.setAttribute("id","play_Button");
button.setAttribute("onclick","play_Button()");
document.body.appendChild(button);

// let image = document.createElement('img');
// image.setAttribute("id","dice_Image");
// image.setAttribute("src","");

let iframe =document.createElement('img');
// iframe.setAttribute("src","");

function play_Button()
{
    button.outerHTML = "";
    let p = document.createElement('p');
    p.setAttribute("id","play_Button_Text")
    p.innerText = "Success";
    document.body.appendChild(p);

    let player1 = document.createElement('p');
    player1.setAttribute("id","player1");
    // player1.setAttribute("onclick","player1")
    player1.setAttribute("onclick","player1"); 
    player1.innerText = "Player 1";
    document.body.appendChild(player1);

    let player2 = document.createElement('p');
    player2.setAttribute("id","player2");
    player2.setAttribute("onclick","player2.innerText='Selected'") 
    player2.innerText = "Player 2";
    document.body.appendChild(player2);

    // document.body.appendChild(iframe);
    let dice_Roll = document.createElement('Button');
    dice_Roll.innerText = "Roll the Dice";
    dice_Roll.setAttribute("id","roll");
    // dice_Roll.setAttribute("onclick","roll().then(function(response){let res = document.createElement('p');res.innerText = response;document.body.appendChild(res); }).catch(function(error){ let res = document.createElement('p');res.innerText = error;console.log('Attempt Failed');});");
    dice_Roll.setAttribute("onclick",`
    roll()
    .then(function(response)
    {
        let res = document.createElement('p');
        res.innerText = response;
        document.body.appendChild(res); 
    })
    .catch(function(error)
    { 
        let res = document.createElement('p');
        res.innerText = error;
        console.log("Attempt Failed");
    });
    `);
    document.body.appendChild(dice_Roll)


}

// function roll()
// {
//     let value = document.createElement('p');
//     value.setAttribute("id","roll_1");
//     let value_Roll = Math.floor((Math.random() * 10) );
//     value.innerText = value_Roll;
//     document.body.appendChild(value);
//     console.log(value);
    
    // let roll_Array = [];
    // let i = 0;
    // while(i < 5)
    // {
    //     if(value_Roll > 0 && value_Roll < 6)
    //     {
    //         roll_Array[i] = value_Roll;
    //         console.log(roll_Array);
    //     }
    //     i++;
    // }
// }


function roll()
{
   return new Promise (function(resolve,reject)
   {
        let value = document.createElement('p');
        value.setAttribute("id","roll_1");
        let value_Roll = Math.floor((Math.random() * 10) );
        // value.innerText = value_Roll;
        // document.body.appendChild(value);
        // console.log(value);
        
        if(value_Roll > 0 && value_Roll < 7)
        {
            var number = value_Roll;
            console.log(number);
            resolve(number);
        }

        else
        {
            var number = value_Roll;
            reject(number);
            console.log(number);
        }        
   })    
};

// roll()
// .then(function(response)
// {
//     let res = document.createElement('p');
//     res.innerText = response;
//     document.body.appendChild(res); 
// })
// .catch(function(error)
// { 
//     let res = document.createElement('p');
//     res.innerText = error;
//     console.log("Attempt Failed");
// });

// console.log(output);

// function any()
// {
//         let roll_Array = [];
//     let i = 0;
//     while(i < 5)
//     {
//         if(value_Roll > 0 && value_Roll < 6)
//         {
//             roll_Array[i] = value_Roll;
//             console.log(roll_Array);
//         }
//         i++;
//     }
// }

// console.log(any());

